fu


$(document).ready(function(){
    
    let userName=document.getElementById('name');
    let inBal=document.getElementById('inBal').value;
    let withraw=document.getElementById('withraw').value;
    let deposit=document.getElementById('deposit').value;


   $('.depositbtn').click(function(event){
        $('#nameOutPut').text(userName.val())

        event.preventDefault()
   })
    



})