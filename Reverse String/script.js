
function reverse_string(){
    var str = window.prompt("Enter a string");
    console.log('The entered word is: ' + str);
    //var output = str.split(''); 
    var reverse="";
    for (let i = str.length-1;i>=0;i--){
        reverse+=str[i];
    }
    return reverse;
}
const rev= reverse_string();
console.log('The reversed string is: '+ rev);
alert('The reversed string is: '+ rev);


