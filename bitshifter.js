var BitMask = require('bit-mask');
  
(function(){
    function BitShifter(options){
        this.options = options ||{};
    }
    BitShifter.prototype = {
        shift : function(str){
            var results = [];
            for(var lcv=0; lcv < str.length; lcv++){
                var letter = str[lcv];
                for(var bit=0; bit < 8; bit++){
                    var mask = new BitMask(letter.charCodeAt());
                    mask.setBit(bit, !mask.getBit(bit));
                    var newLetter = String.fromCharCode(mask.value);
                    results.push(str.substring(0, lcv)+newLetter+str.substring(lcv+1));
                }
            }
            if(this.options.filter) results = results.filter(this.options.filter);
            return results;
        }
    }
    BitShifter.prototype.constructor = BitShifter;
    module.exports = BitShifter;
})();