    let userName=document.getElementById('name');
    let inBal=document.getElementById('inBal');
    let withraw=document.getElementById('withraw');
    let deposit=document.getElementById('deposit')  ;
    
    function depositValidator(){
        if(userName.value ==""){
            //alert('Input username')
            $('#error1').show();
            return false;
        }
        if(inBal.value==""){
            $('#error2').show();
            //alert("Kindly input current account balance")
            return false;
        }
        if (deposit.value==''){
            $('#error3').show();
            deposit.focus()
            //alert('Input  deposit amount')
            return false;
        }
        // else alert('Deposit is okay')
    }
    function withrawValidate(){
        if(userName.value ==""){
            //alert('Input username')
            $('#error1').show();
            return false;
        }
        if(inBal.value==""){
            $('#error2').show();
            //alert("Kindly input current account balance")
            return false;
        }
        if (withraw.value==''){
            $('#error3').show();
            deposit.focus()
            //alert('Input  deposit amount')
            return false;
        }else alert("withrawal is validated")

    }
    $('.depositbtn').click(function(event){
        $('#nameOutPut').append(userName.value)
        $('#depositOutput').append(inBal.value)
        var newBal=parseInt(inBal.value)+parseInt(deposit.value);
        $('#newbalOutput').append(newBal)
        event.preventDefault();
    })

