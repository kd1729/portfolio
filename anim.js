function expandnavbar(){
    if(window.innerWidth<=670){
        if(document.querySelector("div#links").dataset.exp=="false"){
            document.querySelector("div#links").style.left="0"
            document.querySelector("div#links").dataset.exp="true";
        }else{
            document.querySelector("div#links").style.left="-130vw"
            document.querySelector("div#links").dataset.exp="false";
        }
    }
}
function typeWrite(elem){
    elem.dataset.typewritestatus="active";
    if(!elem.dataset.texttype){
        elem.dataset.texttype = elem.innerHTML;
    }
    let text = elem.dataset.texttype;
    elem.innerHTML="";
    let spd = 100;
    text.split("").forEach(char=>{
        spd+=100;
        setTimeout(() => {
            elem.innerHTML+=char;
        },spd);    
    })
   
}
function togmode(){
    if(document.body.classList.contains("dark")){
        document.body.classList.remove("dark");
        document.body.classList.add("light");
    }else{
        document.body.classList.remove("light");
        document.body.classList.add("dark");
    }
}
window.onload=()=>{
    document.querySelectorAll("[data-type-write]").forEach(e=>{
        typeWrite(e);
    })
    ScrollOut();
}
