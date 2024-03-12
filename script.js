let form=document.querySelector("form");
let areaMaseg=document.querySelector("#areamasg");
let inputValue=document.querySelector("#inputvalue");
let areamasg=document.querySelector("#areamasg");

//get data
async function getdata(){
    const response= await fetch('boot.json');
    const data= await response.json();
form.onsubmit= function(e){
    e.preventDefault();
    let anyvalue=inputValue.value.trim().toLowerCase();
    if(anyvalue === ""){
        alert("please enter your ask");
            } else{
                data.forEach(anser => {
                    if(anyvalue === anser.my_msg ){
                        areamasg.innerHTML+=`<p class='user'>${anser.my_msg}</p>`
                        setTimeout(()=>{areamasg.innerHTML+=`<p class='chat'>${anser.anser_boot}</p>`},500)
                    }
                });
          
         }
         inputValue.value="";
        }
 


}
getdata()

