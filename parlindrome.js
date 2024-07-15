  f="";
function parlindrome(name){
   for(i=name.length-1;i>=0;i--){
    f+=name[i];
   }
   if(f==name){
    return true
   }
   else{
    return
false   }
}
if(parlindrome("malayalam")){
    console.log("pariindrome")
}
else{
    console.log("Not parlindrome");
}
