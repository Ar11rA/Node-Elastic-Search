const axios = require('axios');

const config = require('../config');

const serverUrl = `http://${config.host}:${config.port}`;

const headers = {
  'Content-Type': 'application/json'
};

module.exports = {
  create: (index, type, data) => {
    return axios
      .post(`${serverUrl}/${index}/${type}?pretty`, data, headers);
  },
  lazyDelete: (index) => {
    return axios
      .delete(`${serverUrl}/${index}`);
  },
  eagerDelete: (params) => {
    return axios
      .post(`${serverUrl}/${index}/_delete_by_query`, params, headers);
  },
  eagerSearch: (index, params) => {
    return axios.post(`${serverUrl}/${index}/_search`, params, headers);
  },
  lazySearch: (index, queryTerm) => {
    return axios.post(`${serverUrl}/${index}/_search`, {
      'query' : {
        'term' : queryTerm
      }
    }, headers);
  },
};
