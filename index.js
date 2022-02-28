function myFuntion(){
    table =document.getElementById('thetable');
    row = document.getElementById('row').value;
    column = document.getElementById('column').value;
    for(let indexRow=0;indexRow<row;indexRow++){
        let x=table.insertRow(indexRow);
        for(let indexCol=0;indexCol<column;indexCol++){
            let y=  x.insertCell(indexCol);
            y.innerHTML=" "; 
        }
    }
}
// bai 2

function nguyenToNumber(n) {
   
    if(num < 2) 
    return false;
    for (var i = 2; i < num; i++) {
        if(num%i==0)
            return false;
    }
    return true;
}

function checkNumber() {
    let arrData = [];
    let data = "";
    let numberA = document.getElementById("numberOne").value;
    let numberB = document.getElementById("numberTwo").value;
    for(var i = numberA; i <= numberB; i++){
        if(nguyenToNumber(i)) 
            data += i+ " , ";
    
}
    document.getElementById("result").innerHTML = "Các số nguyên tố từ " + numberA + " đến " + numberB + " là : <br>" + data;
}
