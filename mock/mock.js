const Mock = require('mockjs');
const fetchMock = require('fetch-mock');

fetchMock.mock(/\/crms\/api/g)

module.exports = fetchMock;