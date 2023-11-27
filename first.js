const numbers=document.querySelectorAll(".number");
const speed=100;
numbers.forEach((element)=>{
    incNumber(element);
});
function incNumber(elem){
    // console.log(elem.innerText);
    //this underline is used to convert string into Number
   let text=+ elem.innerText;
   //line to convert data-target(string) into Number
   const value= +elem.getAttribute("data-target");
   console.log(typeof(value));
   //har slot me kitna badega by inc
   const inc=value/speed;
   //initially value of innerText i.e; text is zero and it will update to data-target value
   if(text<value){

    elem.innerText=inc+text;
    setTimeout(() => {
        incNumber(elem);
    }, 20);
   }
   else{
    elem.innerText=value;
   }
//    console.log(typeof(text));
}