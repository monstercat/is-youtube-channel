
var request = require('superagent')
var some = require('async-some')

function check(url, done) {
  request.head(url, function(err, res){
    done(err, res && isValidStatus(res.statusCode))
  });
}

function isValidStatus(status) {
  return status >= 200 && status < 300
}

function isValidYoutubeChannel(channel, done) {
  var urls = [
    "https://www.youtube.com/user/" + channel,
    "https://www.youtube.com/channel/" + channel,
    "https://www.youtube.com/c/" + channel
  ]

  some(urls, check, done)
}

module.exports = isValidYoutubeChannel
