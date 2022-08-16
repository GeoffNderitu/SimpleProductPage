function tangaza(){
    var bei=40000;  
var bei2= 3000;
var lipa= 3500;
var pay= 90000;
    var total = parseInt(document.getElementById('quantity').value);
    
    if(total<=0 && total>=100){
        alert("Please Enter Valid Quantity");
    }else if(bei=40000){
        var disp = bei*total;
        document.getElementById('dispTotal').value=disp;
    }
    
}

function hizo(){
    var bei2= 3000;
    var total = parseInt(document.getElementById('quantity').value);
    if(total>0 && total<=100){
        var disp = bei2*total;
        document.getElementById('dispTotal2').value=disp;
    }
}
function xbox(){
    var lipa= 3500;
    var total = parseInt(document.getElementById('quantity').value);
    if(total>0 && total<=100){
        var disp = lipa*total;
        document.getElementById('dispTotal3').value=disp;
    }
}

function ps5(){
    var pay= 90000;
    var total = parseInt(document.getElementById('quantity').value);
    if(total>0 && total<=100){
        var disp = pay*total;
        document.getElementById('dispTotal4').value=disp;
    }
}