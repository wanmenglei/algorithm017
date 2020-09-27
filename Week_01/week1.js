
//三数之和
var threeSum = function(nums) {
    var arr=[];
    
    nums=nums.sort((a,b)=>{
      return a-b;
    })
     
    for(var k=0;k<nums.length;k++){
       var i=k+1; var j=nums.length-1;
      while(i<j){
        if(nums[k]+nums[i]+nums[j]>0){
          j--
        }else if(nums[k]+nums[i]+nums[j]<0){
            i++
        }else{
           arr.push([nums[k],nums[i],nums[j]]); 
         while(i<j&&nums[j]==nums[j--]);
         while(i<j&&nums[i]==nums[i++]);
        }
      }
    }
    return arr;
    };
//盛最多水的容器
    var maxArea = function(height) {
        var max=0
        var area=0;
        for( i=0,j=height.length-1;i<j;){
           var minheight=height[i]<height[j]?height[i++]:height[j--];
           max=(j-i+1)*minheight;
           area=Math.max(max,area);
        }
        return  area;
    };

    // 移动归零

    var moveZeroes = function(nums) {
        var j=0;
        for(var i=0;i<nums.length-1;i++){
           if(nums[i]!=0){
             nums[j]=nums[i]
             
             if(j!=i){
                nums[i]=0;
             } 
             j++
           }
        }
       };

    //    有效括号
    var isValid = function(s) {
     var nums=s.split("");
     var num=[];
     for(var i=0;i<nums.length;i++){
         if(nums[i]=="("){
            num.push(")");
         }else if(nums[i]=="["){
            num.push("]");
         }else if(nums[i]=="{"){
            num.push("}");
         }else if( nums[i]!=num.pop()){
            return false;
         }
        if(num.length==0){
            return true
        }else{
            return false
        }
     }
    };
