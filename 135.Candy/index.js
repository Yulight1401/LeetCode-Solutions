//自己想到的一个解法：一次循环过程中，从两个方向扫描，得到两边的最小特征数组，再将两个特征数组合并,既得数组
var candy = function(ratings) {
    var candylist = [];
    var tail = 0;
		var top = 0;
		for(var i in ratings){
			tail++
			candylist.push(1)
		}
  	for(var i in ratings){
			if( ratings[ top ] < ratings[ top+1 ] ){
				if( candylist[top + 1] < candylist[ top ] + 1 ){
						candylist[ top+1 ] = candylist[ top ] + 1
				}
			}
			if( ratings[ tail ] < ratings[ tail-1 ] ){
				if( candylist[ tail-1 ] < (candylist[ tail ] + 1) ){
					candylist[ tail-1 ] = candylist[ tail ] + 1
				}
			}
			top++
			tail--
		}
    var num = candylist.reduce(function(sum,item){
        return sum+item;
    },0);
    return num;
};
