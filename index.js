function greet(){
    console.log("hello sani");
}
greet();

function add(a,b) {
    return a+b;
}
console.log(add(5,3));



const hello = () => {
    console.log("hello");
}
hello();

const hi = (name) => {
    console.log("hello "+name);
}
hi("ajay");

for (let i=1; i<=5; i++) {
    console.log(i);
}

let i=1;
while( i<=5) {
    console.log(i);
    i++;
}

i=1;
do {
    console.log(i);
    i++;
}
while(i<=5);

let num=[1,2,3,4,5];
for (let i of num) {
    console.log(i);
}

 num="ajay";
for (let i of num) {
    console.log(i);
}

let person={ name:"ajay", age:25};
for (let i in person) {
    console.log(i +"="+ person[i]);
}

let sum=0;
num=[1,2,3,4];
num.forEach(my);
function my(item){
    sum+=item;
    console.log(sum);
}
num.forEach(i => console.log(i));

const newarr=num.map(console.log(Math.sqrt));

