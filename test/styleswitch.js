const styles = [
  { name: "Default" , css: "style.css" },
  { name: "DefaultInv" , css: "style_i.css" },
  { name: "NetArt" , css: "netart.css" },
  { name: "BaseTypeBW" , css: "base_bw.css" },
  { name: "BaseTypeBWI" , css: "base_bw_i.css" },
  { name: "BaseTypeC1" , css: "base_c1.css" },
  { name: "SimpleCSS" , css: "simplecss.css" },
]

function setTheme( arr , name ){
  const s = arr.filter(e=>e.name==name);
  if(s.length>0){
    const css = s[0].css;
    const cssEl = document.getElementById("viewCSS");
    const cssLnk = document.getElementById("getCSSLink");
    cssEl.setAttribute("href" , css);
    window.settings.viewCSS = css;
    const nm = document.getElementById("themeName");
    if(nm){ nm.innerHTML = name }
    if(cssLnk){ cssLnk.href=css ; cssLink.download=css }
  }
}
const container = document.getElementById("cssSwitcher");
let query = null;
const rx = /theme\=(\w+)(&|$)/im;
let test=rx.exec(window.location.search);
if(test) {
  query = test[1]
  console.log("theme requested:" , query)
  setTheme( styles , query );
}
if (container){
  const selector = document.createElement("select");
  const editLink = document.createElement("div");
  const label = document.createElement("label");
  label.innerHTML = "Choose Style";
  editLink.innerHTML = "<a href='?mode=edit' style='font-size: 14px'>edit text</a> | <a href='style.css' download='style.css' id='getCSSLink'>get css</a>";
  selector.addEventListener("change", e=>{
    const selindex = e.target.selectedIndex;
    setTheme( styles , styles[selindex].name );
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
  container.appendChild(label);
  container.appendChild(selector);
  container.appendChild(editLink);
}else{
  console.info("no container")
}
