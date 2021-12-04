var products=JSON.parse(localStorage.getItem("ubuy"));
        var proDiv=document.getElementById("product")
        function showproduct(){
        products.forEach(function(item){

        var div=document.createElement("div");
        var figure=document.createElement("figure");
        
        var img=document.createElement("img");
        img.onclick=function (){
        showDetail(item)
        };
        figure.append(img);
        img.src=item.img;
        // var price=document.createElement("p");
        // price.textContent=item.price;
        var prod_name=document.createElement('p')
        prod_name.id="desc";
        prod_name.textContent=item.desc;

        let add=document.createElement("button");
        

        add.onclick=function (){
        addtocart(item)
        };

        div.append(add,figure, prod_name);
       
        proDiv.append(div)
       
        })
    }
showproduct();


if(localStorage.getItem("ubuyitem")===null){
  localStorage.setItem("ubuyitem",JSON.stringify([]));
  
}
function showDetail(i){
 var detailDisplay=JSON.parse(localStorage.getItem("ubuyitem"));
 detailDisplay=i;
 localStorage.setItem("ubuyitem",JSON.stringify(detailDisplay));
 console.log(detailDisplay);
 location.href="showdetail.html";
}
