const axios = require('axios')
const save = require('./save')

function getTopics() {
  ;['ask', 'share', 'job', 'good'].forEach(tab => {
    axios
      .get(`https://cnodejs.org/api/v1/topics?tab=${tab}&limit=10`)
      .then(response => response.data)
      .then(data => data.data)
      .then(save)
      .catch(console.log)
  })
}

setInterval(getTopics, 1000 * 60)
