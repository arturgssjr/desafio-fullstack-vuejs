const config = {
  api: {
    url: `${process.env.VUE_APP_BACKEND_URL}`
  }
};

global.config = config;

export default config;
