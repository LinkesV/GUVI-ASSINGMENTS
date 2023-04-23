var  solution = "";

toggler = Array.from(document.querySelectorAll(".btn"));

toggler.forEach(item => {
    item.addEventListener("click", (inputvalue) => {
        if(inputvalue.target.innerHTML == 'C'){
            solution = solution.slice(0, solution.length - 1);
        }

        else if (inputvalue.target.innerHTML == 'AC'){
            solution = "";
        }

        else if (inputvalue.target.innerHTML == '='){
            solution = eval(solution).toString().slice(0,12);

        }

        else {
            solution += inputvalue.target.innerHTML;
            solution = solution.slice(0,12)
        }
    
    display.value = solution;  
    });
});

toggler.forEach(press => {
    press.addEventListener('keydown', (event) => {
        var name = event.key;
        if(name !== 1 && 
            name !== 2 &&
            name !== 3 &&
            name !== 4 &&
            name !== 5 &&
            name !== 6 &&
            name !== 7 &&
            name !== 8 &&
            name !== 9 &&
            name !== 0 
            ){
                alert("Only Numbers are allowed to be typed");
        }
        else {
            solution += keypress;
        }
    display.value = solution;
    });
});

document.querySelectorAll(".btn").addEventListener