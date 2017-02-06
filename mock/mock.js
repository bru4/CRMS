var Mock = require('mockjs');

const configureMock = () => {
	Mock.mock(/\/crms\/api/g,({ url, type, body })=>{
        console.log(url, type, body)
        return url;
    })
}

module.exports = configureMock;