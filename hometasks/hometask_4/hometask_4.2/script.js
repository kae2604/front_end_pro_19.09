let numberFromUser = prompt('Please enter number of threes');

if (+numberFromUser[0] == +numberFromUser[1] && +numberFromUser[0] == +numberFromUser[2]){
    alert("All numders are identical");
} else if (+numberFromUser[0] == +numberFromUser[1] && +numberFromUser[0] !== +numberFromUser[2]){
    alert("first and second numbers are identical");
} else if (+numberFromUser[0] !== +numberFromUser[1] && +numberFromUser[0] == +numberFromUser[2]){
    alert("first and third numbers are identical");
} else if (+numberFromUser[0] !== +numberFromUser[1] && +numberFromUser[1] == +numberFromUser[2]){
    alert("second and third numbers are identical");
} else {
    alert("All numders are difdifferent");
}



