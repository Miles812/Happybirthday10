const openGift=document.getElementById("openGift"),letter=document.getElementById("letter"),moreLove=document.getElementById("moreLove"),ending=document.getElementById("ending"),again=document.getElementById("again");
function reveal(section){section.classList.remove("hidden");setTimeout(()=>section.scrollIntoView({behavior:"smooth",block:"center"}),80)}
openGift.addEventListener("click",()=>reveal(letter));
moreLove.addEventListener("click",()=>reveal(ending));
again.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));
const layer=document.querySelector(".sky-doodles"),doodles=["♡","♡","✦","✿","·","☆"];
for(let i=0;i<22;i++){const x=document.createElement("span");x.className="doodle";x.textContent=doodles[i%6];x.style.left=Math.random()*96+"%";x.style.top=Math.random()*95+"%";x.style.fontSize=12+Math.random()*18+"px";x.style.animationDelay=Math.random()*4+"s";layer.appendChild(x)}