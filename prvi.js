/**
 * Created by Ucenik on 9.3.2017..
 */
function myFunction()
{
    var text= "";
    var i=0;
    while(i<10)
    {
        text+="<br>The number is " +i;
        i++;
    }
    document.getElementById("demo").innerHTML=text;
}
function myF()
{
    var text= "";
    var i=0;
    for(i=7;i<=14;i++)
    {
        text+="<br>The number is " +i;
    }
    document.getElementById("demmo").innerHTML=text;
}
function parnepar()
{
    var text= "";
    var i=0;
    for(i=0;i<=15;i++)
    {
        if(i===0)
        {
            text+="<br>Nula je: " +i;
        }
        else if (i%2===0)
        {
            text+="<br>Paran broj: " +i;
        }
        else
        {
            text+="<br>Neparan broj: " +i;
        }
    }
    document.getElementById("parnepar").innerHTML=text;
}


function Upis()
{
    var text= "";
    var pocbroj = prompt("Molimo unesite pocetnu vrijednost");
    var zadbroj = prompt("Molimo unesite krajnju vrijednost");
    for(pocbroj;pocbroj<=zadbroj;pocbroj++)
    {
        text+="<br>The number is " +pocbroj;
    }
    document.getElementById("upis").innerHTML=text;
}
