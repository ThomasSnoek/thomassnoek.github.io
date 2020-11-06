var name=""
function showname()
{
    if(document.form1.name.value == "")
    {
        alert("U heeft geen naam ingevoerd. Vul alstublieft uw naam in of klik op geen interesse.");
    }
    else        
    {
        alert("U heeft de naam ",document.form1.name.value," ingevult.");
        var name= document.form1.name.value;
    }
}
function geeninteresse()
{
    alert("U heeft geen naam ingevoerd. Druk op N om uw naam te wijzigen")
    var name=""
}