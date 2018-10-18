const axios = require('axios')
const save = require('./save')

const tabs = [
  { tab: 'ask', page: 1 },
  { tab: 'share', page: 1 },
  { tab: 'job', page: 1 },
  { tab: 'good', page: 1 }
]

function getTopics() {
  tabs.forEach((item, idx) => {
    axios
      .get(`https://cnodejs.org/api/v1/topics?tab=${item.tab}&page=${item.page}`)
      .then(response => response.data)
      .then(data => data.data)
      .then(save)
      .then(() => {
        tabs[idx].page++
      })
      .catch(console.log)
  })
}

setInterval(getTopics, 2000)
