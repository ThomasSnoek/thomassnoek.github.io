var name = ""
function showname()
{
    if(document.form.name.value == "")
    {
        alert("U heeft geen naam ingevoerd. Vul alstublieft uw naam in of klik op geen interesse.");
    }
    else        
    {
        var name = " " + document.form.name.value;
        alert("U heeft de naam" + name + " ingevult. Vul hem nog een keer in om hem te wijzigen");
        document.getElementById("viewname").innerHTML = name;
    }
}
function geeninteresse()
{
    if (name = "")
    alert("U heeft geen naam ingevoerd. Vul hem alsnog in om hem te wijzigen.")
    else
    var name = ""
    alert("U heeft uw naam gereset, vul hem nog een keer in om hem te wijzigen.")
    document.getElementById("viewname").innerHTML = name;
}