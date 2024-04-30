btn1 = document.querySelector("#btn1");
btn2 = document.querySelector("#btn2");

copyBtn= document.querySelector("#copy");
code = document.querySelector("#code");


  btn1.addEventListener("click",(e)=>{
    btn1.innerText = colorList[Math.floor(Math.random() * colorList.length)];
    updateBg();
    updateCode();
    
  })

  btn2.addEventListener("click",(e)=>{
    btn2.innerText = colorList[Math.floor(Math.random() * colorList.length)];
    updateBg();
    updateCode();
  })

  const updateBg = () =>{
    document.body.style.backgroundImage =  `linear-gradient(to right,${btn1.innerText},${btn2.innerText})` ;
    copyBtn.innerText = "Copy Your Code"
  }

  const updateCode = () =>{
   code.innerText = `background-image : linear-gradient(to right , ${btn1.innerText} , ${btn2.innerText});` ;
}

  copyBtn.addEventListener("click",()=>{
    let text = code.innerText;
    navigator.clipboard.writeText(text);
    copyBtn.innerText = "Copied ✅"
    

  })