let str = "avjlsdfladsnlsfj;oajwhopfpvn";
let ans = "";
function findUni( str,  ans){
    for(let i=0; i<str.length; i++){
    let curstr = str[i];
    if(ans.indexOf(curstr)== -1){
        ans = ans + curstr;
    }
    
    }
    return ans;
}
console.log(findUni(str,ans));
