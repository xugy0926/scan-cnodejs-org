const axios = require('axios')
const config = require('config')

axios.defaults.headers.common['X-LC-Id'] = config.get('appId')
axios.defaults.headers.common['X-LC-Key'] = `${config.get('masterKey')},master`
axios.defaults.headers.common['Content-Type'] = 'application/json'

module.exports = function(data) {
  let newData = []

  data.forEach(item => {
    newData.push({
      method: 'POST',
      path: '/1.1/classes/Post',
      body: item
    })
  })

  // https://leancloud.cn/docs/rest_api.html#hash787692837
  return axios
    .post(`${config.get('url')}`, { requests: newData })
    .then(response => response.data)
    .then(console.log)
}
