
var expect = require('expect.js')
var check = require('./')

describe('is-youtube-channel', function(){
  it('works for /c/ channels', function(done){
    check("JacobiCarterMC", function(err, valid, url){
      expect(err).to.not.be.ok()
      expect(valid).to.be(true)
      expect(url).to.contain("\/c\/")
      done()
    })
  });

  it('works for alias channels', function(done){
    check("thevipermusic", function(err, valid, url){
      expect(err).to.not.be.ok()
      expect(valid).to.be(true)
      done()
    })
  });

  it('works for user names', function(done){
    check("MonstercatMedia", function(err, valid, url){
      expect(err).to.not.be.ok()
      expect(valid).to.be(true)
      expect(url).to.contain("user")
      done()
    })
  });

  it('doesnt work for invalid', function(done){
    check("MonstercatMedisdjfkhadlkjfhasdf", function(err, valid, url){
      expect(err).to.not.be.ok()
      expect(valid).to.be(false)
      expect(url).to.not.be.ok()
      done()
    })
  });

  it('works for ids', function(done){
    check("UCMIh8iKkrWVhV_YSgHejvoA", function(err, valid, url){
      expect(err).to.not.be.ok()
      expect(valid).to.be(true)
      expect(url).to.contain("channel")
      done()
    })
  });

  it('works for explicit id', function(done){
    check.id("UCMIh8iKkrWVhV_YSgHejvoA", function(err, valid, url){
      expect(err).to.not.be.ok()
      expect(valid).to.be(true)
      expect(url).to.contain("channel")
      done()
    })
  });
});
