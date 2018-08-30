//alert( "I'm JavaScript!" );
//document.querySelectorAll(".btn-group-toggle label").classList.add("active");

var group = document.querySelectorAll(".btn-group-toggle label");

group.forEach(function(entry) {
    //entry.addEventListener("click", function(){ entry.classList.add("active")});
    //entry.classList.add("active");
    //$(".btn-group-toggle label").button('toggle');
});

//$(".btn-group-toggle label").button('toggle');

function updateOdds(obj){

    //console.log(obj);
    var odds = 1.00;
    //console.log(obj.classList.contains("active"));

    var group = document.querySelectorAll(".btn-group-toggle label");
    for(var i = 0; i < group.length; i++)
    {
       if(group[i].children[0].checked)
       {
           var odd = group[i].children[1].textContent;
           oddValue = 1 + eval(odd);
           odds *= oddValue;
       }
    }
    //odds -= 1;
    //console.log(document.querySelector("#odds").children[0].textContent);
    document.querySelector("#odds").children[0].textContent = odds.toFixed(2) + "";
}

function calculateReturn(obj)
{
    var total = obj.value * document.querySelector("#odds").children[0].textContent;
    document.querySelector("#returns").textContent = "£" + total.toFixed(2);
}
