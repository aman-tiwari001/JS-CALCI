console.log('Calci Script Started...')
let display = document.getElementById('display');
let btnList = document.getElementsByClassName('btn');

let text = "";

Array.from(btnList).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        if(e.target.innerText=='=') {
            try {
                text = eval(text);
                display.value = text;
            } catch (error) {
                text = "";
                display.value = "Invalid Expression";
            }
            
        }
        else if(e.target.innerText=='C') {
            text = "";
            display.value = text;
        }
        else if(e.target.innerText=='<-') {
            text = text.slice(0,text.length-1);
            display.value = text;
        }
        else if(e.target.innerText=='%') {
            
        }
        else {
            text = text + e.target.innerText;
            display.value = text;
        }
    });
});

