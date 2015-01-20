
var expect = require('expect.js')
var check = require('./')

describe('is-youtube-channel', function(){
  it('works for /c/ channels', function(done){
    check("JacobiCarterMC", function(err, valid){
      expect(err).to.not.be.ok()
      expect(valid).to.be(true)
      done()
    })
  });

  it('works for alias channels', function(done){
    check("monstercat", function(err, valid){
      expect(err).to.not.be.ok()
      expect(valid).to.be(true)
      done()
    })
  });

  it('works for user names', function(done){
    check("MonstercatMedia", function(err, valid){
      expect(err).to.not.be.ok()
      expect(valid).to.be(true)
      done()
    })
  });

  it('doesnt work for invalid', function(done){
    check("MonstercatMedisdjfkhadlkjfhasdf", function(err, valid){
      expect(err).to.not.be.ok()
      expect(valid).to.be(false)
      done()
    })
  });

  it('works for ids', function(done){
    check("UCMIh8iKkrWVhV_YSgHejvoA", function(err, valid){
      expect(err).to.not.be.ok()
      expect(valid).to.be(true)
      done()
    })
  });
});
