    let username='abi'
    let password='2345'
    let userchecker=function(mystring){
    if((mystring.includes('a'))){
        return true
    }    
    return false    
}
let passchecker=function(mystring){
 if((mystring.includes(234))){
     return true
 }   
return false
}
console.log(userchecker(username));
console.log(passchecker(password));