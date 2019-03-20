//a.
//***********************************
if (!("a" in window)) {
    var a = 1;
}
alert(a);

//undefined

//b.
//***********************************
    var b = function a(x) {
    x && a(--x);
};
alert(a);

//undefined

//c.
//***********************************
    function a(x) {
    return x * 2;
}
var a;
alert(a);

//null

//d.
//***********************************
    function b(x, y, a) {
    arguments[2] = 10;
    alert(a);
}
b(1, 2, 3);

//10

//e.
//***********************************
function a() {
    alert(this);
}
a.call(null);

//null