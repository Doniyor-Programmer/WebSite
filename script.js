window.addEventListener("DOMContentLoaded",()=>{let e=document.querySelector(".check"),t=document.querySelector(".error_text"),o=document.querySelector(".name"),n=document.querySelector(".surname"),c=document.querySelector(".password"),l=document.querySelector(".enter"),r=document.querySelector(".circle"),d=document.querySelector(".user");l.addEventListener("click",()=>{""!=o.value&&""!=n.value&&"200713"==c.value?(e.classList.add("check_active"),r.textContent=`${o.value.charAt(0)}${n.value.charAt(0)}`,d.textContent=`${o.value} ${n.value}`,document.body.style.cssText="z-index: 1 !important; overflow: auto !important"):t.textContent="Invalid Password or Please fill the inputs"});let u=document.querySelector("#scrollBtn");window.addEventListener("scroll",function(){document.body.scrollTop>20||document.documentElement.scrollTop>20?u.style.display="block":u.style.display="none"}),u.addEventListener("click",function(){document.body.scrollTop=0,document.documentElement.scrollTop=0})});