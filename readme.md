
# is-youtube-channel [![Build Status](https://travis-ci.org/monstercat/is-youtube-channel.svg)](https://travis-ci.org/monstercat/is-youtube-channel)

  Simple check to see if a given string is a youtube channel

## Example

```js
var isChannel = require('is-youtube-channel')

isChannel("UCMIh8iKkrWVhV_YSgHejvoA", function(err, valid){}) // channel ids
isChannel("monstercat", function(err, valid){})               // aliases
isChannel("monstercatmedia", function(err, valid){})          // usernames
isChannel("JacobiCarterMC", function(err, valid){})           // /c/ urls
```

## API

    isChannel(name : String,
              function(err : Error | null, isValid : bool, url : String))

  * name: youtube username, channel id, or alias
  * err: error objects if a request error occurs
  * isValid: `true` if channel is a valid channel, `false` otherwise
  * url: url that was found to work for the given channel name
