var SayHello = (function () {
    function SayHello(s) {
        this.str = s;
    }
    SayHello.prototype.Hello = function () {
        return "Hello" + this.str;
    };
    return SayHello;
}());
var hello = new SayHello("TypeScript");
document.querySelector("body").innerText = hello.Hello();
//# sourceMappingURL=hello.js.map