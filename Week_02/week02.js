// 有效的字母异位词
var isAnagram = function(s, t) {
    if(s.length!=t.length){
        return false;
      }

      var web={};
      for(var i=0;i<s.length;i++){
          web[s[i]]?(web[s[i]]++):(web[s[i]]=1);
      }
      for(var j=0;j<t.length;j++){
        if(web[t[j]]&&web[t[j]]>0){
            web[t[j]]--
        }else{
            return false 
        }
      }
      return true
};
//二叉树的中序遍历
var inorderTraversal = function(root) {
    const res = [];
    const inorder = (root) => {
        if (!root) {
            return;
        }
        inorder(root.left);
        res.push(root.val);
        inorder(root.right);
    }
    inorder(root);
    return res;
};

//两数之和

for(var i=0;i<nums.length;i++){
    var j=i+1;
 while(i<j&&j<nums.length){ 
  var sum=target-nums[i]
 if(sum==nums[j]){
   return [i,j]
 }else{
      j++ 
  } 
 }
}