console.log('Calci Script Started...')
let display = document.getElementById('display');
let btnList = document.getElementsByClassName('btn');

let text = "";

Array.from(btnList).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        if(e.target.innerText=='=') {
            try {
                text = text.replace('%', '/100'); // Replace % with /100 to allow evaluation
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
            // Append the '%' sign to the text
            text = text + '%';
            display.value = text;
        }
        else {
            text = text + e.target.innerText;
            display.value = text;
        }
    });
});
