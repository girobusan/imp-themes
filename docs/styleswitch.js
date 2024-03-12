const container = document.getElementById("cssSwitcher");
const styles = [
  { name: "Default" , css: "style.css" },
  { name: "NetArt" , css: "netart.css" },
  { name: "TypeBase" , css: "tbase.css" },
]
if (container){
 const selector = document.createElement("select");
 const editLink = document.createElement("div");
 editLink.innerHTML = "<a href='?mode=edit' style='font-size: 14px'>edit text</a>";
 selector.addEventListener("change", e=>{
   const selindex = e.target.selectedIndex;
   console.log(selindex);
   const cssAdress = styles[selindex].css;
   const cssEl = document.getElementById("viewCSS");
   cssEl.setAttribute("href" , cssAdress)
 })

 styles.forEach(
   s=>{
       const opt = document.createElement("option");
       opt.value = s.css;
       opt.label =s .name;
       if( window.settings.viewCSS==s.css ){
           opt.selected = true;
       }
       selector.appendChild(opt)
   }
 )
 container.appendChild(selector);
 container.appendChild(editLink);
}else{
console.info("no container")
}
