function console(){
    function createConsoleMessage(message){
        console.log(message);
    }
    function createConsoleList(list=[String]){
        console.log(list)
    }
    
}

module.exports = {
    console: console
}
