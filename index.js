const request = require('request')
const some    = require('async-some')

function check(url, done) {
  request({
    url: url,
    method: "HEAD",
  }, (err, res) => {
    done(err, res && isValidStatus(res.statusCode) && url)
  })
}

function isValidStatus(status) {
  return status >= 200 && status < 300
}

function isValidYoutubeChannelId(channelId, done) {
  var url = "https://www.youtube.com/channel/" + channelId
  return check(url, function (err, url) {
    return done(err, !!url, url);
  });
}

function isValidYoutubeChannel(channel, done) {
  var urls = [
    "https://www.youtube.com/user/" + channel,
    "https://www.youtube.com/channel/" + channel,
    "https://www.youtube.com/c/" + channel
  ]

  some(urls, check, function(err, url){
    done(err, !!url, url)
  })
}

module.exports = isValidYoutubeChannel
module.exports.id = isValidYoutubeChannelId
