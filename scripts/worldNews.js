

var data=JSON.parse(localStorage.getItem("user"));

let append=(data,sidebar)=>{
    console.log(data)
    data.forEach(el => {
    var div= document.createElement("div");
    var img=document.createElement("img");
    img.src=el.image;
    var name=document.createElement("h3")
    name.innerText=el.name;
    var email=document.createElement("h4")
    email.innerText=el.email;
    var country=document.createElement("p")
    country.innerText=el.country;
    div.append(img,name,email,country);
    sidebar.append(div);


});
}
append(data,sidebar);
function navbar(){
    return`   <input type="text" id="search_box">
    <div>
      <h3 id="in">India</h3>
      <h3 id="us">Usa</h3>
      <h3 id="ch">China</h3>
      <h3 id="uk">UK</h3>
      <h3 id="nz">New Zeland</h3>
    </div>
   </div>
 </div>`
}
export{append,navbar}



let info=async ()=>{
    let value=document.getElementById("search_box").value;
    try{
        let res=await fetch(`https://masai-mock-api.herokuapp.com/news?q=${value}`)
        let file=await res.json();
        console.log(file);

    }catch(err){
        console.log(err);
    }
    
}
info();

