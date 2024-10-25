/*console.log("firt statement");
setTimeout(()=>{
    console.log("secound statement");
},7000)
console.log("thrid statement");
*/

function greet(name, callback)
{
console.log(name);
callback();
}
function sum(){
    console.log("this is callback function")
}

greet("Jithendra",sum);
