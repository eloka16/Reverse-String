'use strict'

module.exports = {
    reverseString: function(string){
        var rev = string.toLowerCase().split("").reverse().join("");
        var lo = string.toLowerCase();
        if(rev != lo){
            return rev;
        }else if(string === ''){
            return null;
        }else if (rev = lo)  {
            return true;
        }
              
    }
}