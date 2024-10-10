let output= document.getElementById("screen");
function display(num)
{
    output.value +=num;
}
function calculate(){
    try{
        output.value=eval(output.value);
    }
    catch(err)
    {
        alert("invalid value")
    }
}

function del()
{
    output.value=output.value.slice(0,-1);
}
 function cel()
 {
    output.value="";
 }
