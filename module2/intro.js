//printing
console.log("Swagat hai aap sabhi ka yha p");
console.log("Hello world");

let num= 10;
console.log(num);

let char= 'a';
console.log(char);

let str = 'I am a string';
console.log(str);

let bool= true;
console.log(bool);

// check a num is prime or not
let flag=true;
let  pnum=29;
for(let i=2; i*i<=pnum; i++){
    if(pnum%i==0){
        flag=false;
        break;
    }
}
if(flag==false){
    console.log("num is not a prime");
}else{
    console.log("num is prime");
}