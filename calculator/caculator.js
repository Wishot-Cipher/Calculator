let display = document.getElementById('display')
 let operators = document.querySelector('.operators')
let numbers = Array.from(document.getElementsByClassName("numbers"));


numbers.map( button => {
    button.addEventListener('click',(e) => {
        switch (e.target.innerText) {
            case "AC":
                display.innerText = '';
                break;

            case "DEL":
                if (display.innerText) {
                    display.innerText = display.innerText.slice(0,-1);  
                }
                break;
                case "=":
                    try{
                        display.innerText = eval(display.innerText);
                    }
                    catch{
                        display.innerText= 'ERROR!'
                    }
                
                break;

                default:
                display.innerText += e.target.innerText;
        }
    })
    
// getdisplay 
})
