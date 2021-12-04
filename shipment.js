function message(){
    alert("CONGRATULATIONS! YOUR ORDER PLACED SUCCESFULLY..");
}
 var bill=JSON.parse(localStorage.getItem("total"));

var total=document.getElementById("total");
total.textContent="INR " +bill[0];
var shipment=document.getElementById("shipment");
shipment.textContent="INR "+Math.round((bill[0]*0.05),2);
var grand=document.getElementById("grand");
grand.textContent=Number(bill[0])+(Number(bill[0])*0.05);
function cart(){
    location.href="cart.html";
}