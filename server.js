// server.js

const path = require('path');
const fse = require('fs-extra');

// init project
const express = require('express');
const app = express();
//const ViteExpress = require('vite-express');

// http://expressjs.com/en/starter/static-files.html
/* app.use(express.static('public')); */

app.get("/message", (_, res) => res.send("Hello from express!"));


(async()=>{
  
  if(String(process.env.production).toLowerCase()!=='true'){
    
    const {startServer, loadConfiguration, NotFoundError} = require('snowpack');
    const config = await loadConfiguration({}, path.resolve(__dirname,'snowpack.config.mjs'));
    const server = await startServer({ config });               

    // Example: Express
    // On request, build each file on request and respond with its built contents
    app.use(async(req, res, next) => {
      const ext = path.extname(req.path);
      try {
        const buildResult = await server.loadUrl(req.url,{allowStale:true});
        res.contentType(ext||'.html');
        //res.contentType(path.extname(req.path));
        res.send(buildResult.contents);
      } catch (err) {
        if(err instanceof NotFoundError){
          next();
        }else{
          switch(ext){
            case '.js':
            case '.css':
              res.contentType(ext);
              res.send(`/*\n${err}\n*/`)
            default:
              next(err);
          }
        }
      }
    });
    
  }
  


  // http://expressjs.com/en/starter/basic-routing.html
  app.get("*", function(request, response) {
    response.sendFile(__dirname + '/src/index.html');
  });


  // listen for requests :)
  var listener = app.listen(process.env.PORT, function () {
    console.log('Your app is listening on port ' + listener.address().port);
  });
  
  
})();
