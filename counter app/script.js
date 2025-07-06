var count=0;
const counterDisplay= document.getElementById("counter");
// var le global variable declaration let le local const le constant
const incBtn= document.getElementById("increase");
const decBtn= document.getElementById("decrease");
const resetBtn= document.getElementById("reset");
 
incBtn.addEventListener('click',()=> { 
    count++;
    updateDisplay();
});
// c ma jasto function-name(){ ...} garera lekhna milcha tatra yesko equivalent chai ()=>{....} ho 
decBtn.addEventListener('click', () =>{
    if(count>0){
    count--;
    }
    updateDisplay();
});
resetBtn.addEventListener('click',()=>{
    count=0;
    updateDisplay();
});
function updateDisplay(){
    counterDisplay.textContent=count;
}
