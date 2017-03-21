/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}

There are two sorted arrays nums1 and nums2 of size m and n respectively.

Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

Example 1:
nums1 = [1, 3]
nums2 = [2]

The median is 2.0
Example 2:
nums1 = [1, 2]
nums2 = [3, 4]

The median is (2 + 3)/2 = 2.5

 */
var findMedianSortedArrays = function(nums1, nums2) {
    var findMedian4 = function (a,b,c,d){
        var max = Math.max(a, Math.max(b, Math.max(c, d)))
        var min = Math.min(a, Math.min(b, Math.min(c, d)))
        return (a+b+c+d-max-min)/2
    }
    var findMedian3 = function (a,b,c){
        var max = Math.max(a, Math.max(b, c))
        var min = Math.min(a, Math.min(b, c))
        return (a+b+c-max-min)
    }
    var findMedian1 = function (arr, leng){
        if(leng == 0 ){
            return NaN
        }
        if(leng % 2 == 0 ){
            return (arr[leng/2-1]+arr[(leng)/2])/2
        }
        return (arr[(leng-1)/2])
    }
    //b要比a长，同时对比后，消除a的一半
    var findMedian = function(arr1,a,arr2,b){
      // console.log(arr1,a,arr2,b)
      if(a == 0){
          return findMedian1(arr2, b)
      }
      if(a == 1){
          if(b == 1){
              return (arr1[0]+arr2[0])/2
          }else if(b % 2 == 1){
              return findMedian4(arr1[0], arr2[(b-1)/2-1], arr2[(b-1)/2], arr2[(b-1)/2+1])
          }
          return findMedian3(arr1[0], arr2[b/2-1], arr2[b/2])
      }
      if(a == 2){
          if(b == 2){
              return findMedian4(arr1[0], arr1[1], arr2[0], arr2[1])
          }else if(b % 2 == 1){
              return findMedian3(Math.max(arr1[0],arr2[(b-1)/2-1]),Math.min(arr1[1],arr2[(b-1)/2+1]), arr2[(b-1)/2])
          }
          return findMedian4(Math.max(arr1[0],arr2[b/2-2]),Math.min(arr1[1],arr2[b/2+1]),arr2[b/2-1],arr2[b/2])
      }
      var median1 = 0
      var median2 = 0
      if(a % 2 == 0){
          median1 = a/2
      }else{
          median1 = (a-1)/2
      }
      if(b % 2 == 0){
          median2 = b/2
      }else{
          median2 = (b-1)/2
      }
      if(arr1[median1] >= arr2[median2]){
        if(a % 2 == 0){
           var newarr1 = arr1.slice(0, a-median1 + 1)
           var temp1 = a-median1 + 1
        }else{
           var newarr1 = arr1.slice(0, a-median1)
           var temp1 = a-median1
        }  
        var newarr2 = arr2.slice(a - temp1,b)
        var temp2 = b + temp1 - a 
        return findMedian(newarr1,temp1,newarr2,temp2)
      }else{
        if(a % 2 == 0){
           var newarr1 = arr1.slice( median1 -1, a )
           var temp1 = a-median1 + 1
        }else{
           var newarr1 = arr1.slice( median1 , a )
           var temp1 = a-median1
        }  
        var newarr2 = arr2.slice(0,b-a+temp1)
        var temp2 = b - a + temp1
        return findMedian(newarr1,temp1,newarr2,temp2)
      }
    }
    var median = 0
    var leng1 = nums1.length
    var leng2 = nums2.length    
    if(leng1 <= leng2){
        median = findMedian(nums1, leng1, nums2, leng2)
    }else{
        median = findMedian(nums2, leng2, nums1, leng1)
    }
    return median
};
