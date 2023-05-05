// sync with github
// https://github.com/javierarce/glitchub

const express = require('express');
const router = express.Router();

const path = require('path');
const cmd = require('node-cmd');
const crypto = require('crypto');


router.post('/', (req, res) => {
  let hmac = crypto.createHmac('sha1', process.env.SECRET);
  let sig  = `sha1=${hmac.update(JSON.stringify(req.body)).digest('hex')}`;

  if (req.headers['x-github-event'] === 'push' && sig === req.headers['x-hub-signature']) {
    const bashfile = path.resolve(__dirname,'update.sh')
    cmd.run(`chmod 777 ${bashfile}`); 
    
    cmd.run(bashfile, (err, data) => {  
      if (data) {
        console.log(data);
      }
      if (err) {
        console.log(err);
      }
    });

    cmd.run('refresh');
  }

  return res.sendStatus(200);
});

module.exports = router;

// TODO: create updater script and automatically set up remote
/*
git remote add eterna git@github.com:Cutievirus/eterna-card.git
git pull eterna main
git branch --set-upstream-to=eterna/main master
*/