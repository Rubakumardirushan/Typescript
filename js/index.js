//variable
function checkvar() {
    var a = 10;
    if (true) {
        var a = 100;
        console.log(a);
    }
    console.log(a);
}
checkvar();
function checklet() {
    let a = 10;
    if (true) {
        let a = 100;
        console.log(a);
    }
    console.log(a);
}
checklet();