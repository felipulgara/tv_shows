const TIMEOUTS = {
  GLOBAL: 20e3
};

const config = {
  baseURL: null,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiZmVsaXBlIiwicGFzcyI6IjEyMzQ1NiIsImlhdCI6MTU3OTUyOTAwNiwiZXhwIjoxNTc5OTYxMDA2fQ.yurSvXTN5q6r-eWS69ghCF4OzSObchzFW-x5-Rl_QSQ'
  },
  timeout: TIMEOUTS.GLOBAL
};

export { TIMEOUTS };

export default config;
