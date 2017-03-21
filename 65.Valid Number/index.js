/**
 * @param {string} s
 * @return {boolean}
 * "   11   ","e","0"
 * numstart.....numend中间不能有空格, e前后必须要数字
 */
var isNumber = function(s) {
    var start = {status:false,index:-1};
    var end = {status:false,index:-1};
    var enums = 0;
    var dnums = 0;
    var pnums = 0;
    var fnums = 0;
    var length = s.length
    var checkNum = function(s){
        if(s >= '0' && s <= '9'){
            return true
        }
        return false
    }
    for( var i in s){
        if(s[i] == '-'){
            fnums++
            var font = checkNum(s[ parseInt(i) - 1 ])
            var next = checkNum(s[ parseInt(i) + 1 ])
            if(font){
                return false
            }
            if(!next){
                if(s[ parseInt(i) + 1 ] != '.'){
                  return false
                }
            }
        }else if(s[i] == '+'){
            pnums++
            var font = checkNum(s[ parseInt(i) - 1 ])
            var next = checkNum(s[ parseInt(i) + 1 ])
            if(font){
                return false
            }
            if(!next){
                if(s[ parseInt(i) + 1 ] != '.'){
                  return false
                }
            }
        }
        else if(checkNum(s[i])){
            if(!start.status){
              start.status = true
              start.index = i
            }
            if(end.status){
                return false
            }
        }else if (s[i] == 'e' ){
            enums++
            var font = checkNum(s[ parseInt(i) - 1 ])
            var next = checkNum(s[ parseInt(i) + 1 ])
            if( !(font&&next) ){
                if(s[ parseInt(i) - 1 ] != '.'){
                  return false
                }
            }
        }else if (s[i] == '.' ){
            dnums++
            var font = checkNum(s[ parseInt(i) - 1 ])
            var next = checkNum(s[ parseInt(i) + 1 ])
            if( !(font||next) ){
                return false
            }
            if(!next){
                if(i != length -1 && s[ parseInt(i) + 1 ] != " "){
                return false
                }
            }
        }else if(s[i] == " "){
            if(start.status){
              end.status = true
              end.index = parseInt(i) - 1 
            }
            if(start.status&&!end.status){
              return false
            }
        }else{
            return false
        }
        if(i == length-1 ){
            if(!start.status){
                return false    
            }
            if(enums > 1){
                return false
            }
            if(dnums > 1){
                return false
            }
            if(fnums > 1){
                return false
            }
            if(pnums > 1){
                return false
            }
        }
    }
    return true
};
