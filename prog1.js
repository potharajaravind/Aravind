function sayhello()
{
    function sayhello(){
        console.log("this is neseted")
    }
    console.log("this is sayhello function")
    console.log("another")
}
function sayhi(){
    console.log("this is hi")
}
sayhello();
sayhi();