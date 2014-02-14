var should = require("should");
var _ = require('lodash')
var BitShifter = require('./bitshifter');
var facebookShifts =  [ 
  'www.facebook.com',
  'gww.facebook.com',
  '7ww.facebook.com',
  'wgw.facebook.com',
  'w7w.facebook.com',
  'wwg.facebook.com',
  'ww7.facebook.com',
  'wwwnfacebook.com',
  'www.gacebook.com',
  'www.nacebook.com',
  'www.vacebook.com',
  'www.fccebook.com',
  'www.fecebook.com',
  'www.ficebook.com',
  'www.fqcebook.com',
  'www.fagebook.com',
  'www.fakebook.com',
  'www.fasebook.com',
  'www.facgbook.com',
  'www.facmbook.com',
  'www.facubook.com',
  'www.facecook.com',
  'www.facefook.com',
  'www.facejook.com',
  'www.facerook.com',
  'www.facebooo.com'
];

describe('bitshifter', function(){
    
    describe('shift', function(){
        
        it('shifts a domain', function(){
            var seen = [];
            var shifter = new BitShifter({
                filter : function(str){
                    if(seen.indexOf(str.toLowerCase()) != -1) return;
                    seen.push(str.toLowerCase());
                    return str.match(/^[0-9a-z.]+$/);
                }
            });
            var results = shifter.shift('www.facebook').map(function(str){return str+'.com'});
            _.isEqual(facebookShifts, results).should.be.true;
        });
    
    });
    
});