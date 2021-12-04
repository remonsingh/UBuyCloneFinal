var store=JSON.parse(localStorage.getItem("ubuyitem"));
    

    var div=document.createElement("div");
    div.id="firstDiv";
    var childdiv=document.createElement("div");
    var img=document.createElement("img");
    img.src=store.img3;
    childdiv.append(img);
    var childdiv1=document.createElement("div");
    var img1=document.createElement("img");
    img1.src=store.img1;
    childdiv1.append(img1);
    var childdiv2=document.createElement("div");
    var img2=document.createElement("img");
    img2.src=store.img2;
    childdiv2.append(img2);
    div.append(childdiv,childdiv1,childdiv2);

    var div1=document.createElement("div");

    div1.id="secondDiv";
    var div1img=document.createElement("img");
    div1img.src=store.img1;
    div1.append(div1img);

    var div2=document.createElement("div");
    div2.id="thirdDiv";
    var heading=document.createElement("h2");
    heading.textContent=store.desc;
    var label1=document.createElement("span");
    label1.textContent="INR "
    var price=document.createElement("span");
    
    price.textContent=store.price;
    price.style.fontWeight= "bold";
    var get=document.createElement("p");
    get.textContent="Order now and get it around Thursday, October 07";
    get.style.color="green";
    var vail=document.createElement("p");
    vail.textContent="Availability : In stock"
    var label=document.createElement("label");
    label.textContent="Qty."
    var select=document.createElement("input");
    select.value=1;
    select.type="number";
    var span=document.createElement("span");
    var button=document.createElement("button");
    button.textContent="Add to Cart";
    button.onclick=function (){
        addtocart(store)
        };
    span.append(button);
    div2.append(heading,label1,price,get,vail,label,select,button);
    


    var main=document.getElementById("main");
    main.append(div,div1,div2);
    var descr=document.createElement("h3");
    descr.textContent="Product Description";
    var anotherDiv=document.getElementById("des")
    anotherDiv.append(descr);
    var paraDes=document.createElement("p");
    paraDes.textContent=store.description;
    anotherDiv.append(paraDes);

 function addtocart(s){
    if(localStorage.getItem("ubuyCart")===null){
    localStorage.setItem("ubuyCart",JSON.stringify([]));
    }
    var ubuyStorage=JSON.parse(localStorage.getItem("ubuyCart"));
    var flag=true;
    for(var l=0; l<ubuyStorage.length; l++){
        
          if(ubuyStorage[l].desc==s.desc){
            flag=false;
            ubuyStorage[l].qty=Number(ubuyStorage[l].qty)+Number(select.value);
            localStorage.setItem("ubuyCart",JSON.stringify(ubuyStorage))
          }
        
    }
    if(flag==true){
        s.qty=select.value;
        ubuyStorage.push(s);
        localStorage.setItem("ubuyCart",JSON.stringify(ubuyStorage))
    }
    console.log(ubuyStorage)
}

 var cart=JSON.parse(localStorage.getItem("ubuyCart"));
var sup=document.getElementById("number");
        sup.textContent=cart.length;