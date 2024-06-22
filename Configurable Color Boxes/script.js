 const boxConfig=[
  {color:"red" , width:"33.33%"},
  {color:"green" , width:"33.33%"},
  {color:"blue" , width:"33.33%"},
  {color:"yellow" , width:"50%"},
  {color:"orange" , width:"50%"},
  {color:"purple" , width:"70%"},
  {color:"pink" , width:"30%"}
 ]

 const container = document.createElement("div");
 container.className= "container"
 
 
 boxConfig.forEach((config , index)=>{
   const box = document.createElement("div")
   box.className= "box"
   box.style.backgroundColor = config.color;
   box.style.width = config.width;
   container.appendChild(box);
  })


  container.addEventListener("click" , (event)=>{
    const clickedElement= event.target;
    
    if(clickedElement.classList.contains("box")){
      const index = Array.from(container.children).indexOf(clickedElement);
      const config = boxConfig[index] ;
      alert(`Color of box ${index+ 1} is ${config.color}`)
    }

  })


  document.body.appendChild(container);