const request = require('superagent');

const REQUEST_URL = 'http://localhost:7890';

const postUserAnswers = (userAnswer) => {
    return request
        .post(`${REQUEST_URL}/api/v1/userAnswers/${userAnswer._id}`)
        .send(userAnswer);
}
;
module.exports = { postUserAnswers };
