function log(message) {
    console.log(message);
}
log('Hello World');
function dosomething() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log('Finally: ' + i);
}
dosomething();
// data types
var a = 12;
var b = true;
var c = 'we';
var d = 12;
var e = [1, 2, 3];
var arr = [1, true, 'a', false];
// enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var backgroundColor = Color.Blue;
// type assertions
var message;
message = 'abc';
var endsWithC = message.endsWith('c'); // type assertions
var alternativeway = message.endsWith('c'); // type assertions
// arrow functions
var dolog = function (message1) {
    console.log(message1);
};
dolog('arrow function');
