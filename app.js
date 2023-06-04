console.log("cool");

const Buttons=document.querySelectorAll("button")
const MyH1=document.getElementById("H1")
const clearbtn=document.getElementById("allclear")
const Equal=document.getElementById("equal")

Equal.addEventListener("click",function(){
    MyH1.innerText=eval(MyH1.innerText)
})



function getData(data){
    if(MyH1.innerText==="0")
    {
        MyH1.innerText=data //btn.innerText;
    }else
    {
       MyH1.innerText= MyH1.innerText+data
    }
}

 function addDecimal()
 {
    if(!MyH1.innerText.includes("."))
    {
        MyH1.innerText=`${MyH1.innerText}.`
    }

 }



Buttons.forEach(function(btn){
    if(btn.classList.length==0)
    {
        btn.addEventListener("click",function(){
    
    getData(btn.innerText)
       // MyH1.innerText=btn.innerText;
    })

    }

    else if(btn.classList.contains("operator"))
    {
        btn.addEventListener("click",function(){
        getData(btn.innerText);
        })
    }
      else if(btn.classList.contains("dott"))
      {

        btn.addEventListener("click",function(){
            addDecimal()
        })

      }
    
    })

    clearbtn.addEventListener("click",function(){
        MyH1.innerText="0"
    })