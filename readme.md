
# is-youtube-channel

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

### isChannel(name : String, function(err : Error | null, isValid : bool))

