class SayHello {

    private str : string;

    constructor(s:string){
        this.str = s;
    }
    Hello() : string{
        return "Hello" + this.str;
    }
}
let hello = new SayHello("TypeScript");
document.querySelector("body").innerText = hello.Hello();