export default {
  mount: {
    public: '/',
    src: '/',
  },
  buildOptions: {
    out: 'build',
  },
  devOptions: {
    port:0,
  },
  /*
  routes: [
    {
      match: 'routes',
      src: '.*',
      dest: '/index.html',
    },
  ],
  */
  plugins: [
    '@snowpack/plugin-sass',
  ],
};