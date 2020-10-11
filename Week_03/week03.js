var combine = function(n, k) {
    const ans=[];
    const dnfs=(cur,n,k,temp)=>{
       //递归判断条件
        if(temp.length+(n-cur+1)<k){
            return 
        }

       if(temp.length==k){
         ans.push(temp);
         return
       }
       dnfs(cur+1,n,k,[...temp,cur]);
       dnfs(cur+1,n,k,temp);
    }
    dnfs(1,n,k,[])
    return ans;
};

//全排列

var permute = function(nums, res = [], dfs) {
    function dfs(h){
         if( h.length === nums.length){
             return res.push(h) 
         }else{
              nums.forEach(v => !h.includes(v) && dfs(h.concat([v])))    
         }
    }
    dfs([])
   return res
  };


