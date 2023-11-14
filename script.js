


const btn=document.querySelector("#throttle");   
const throttleFunction=(func, delay)=>{        
 
  let prev = 0; 
  return (...args) => {
 
    let now = new Date().getTime(); 
 
    
   
     
    
    if(now - prev> delay){ 
      prev = now;
 
      return func(...args);  
    }
  }
}


document.querySelector("#center").
addEventListener("mousemove", 
throttleFunction((dets)=>{
  // your less repetation code 

  var div = document.createElement("div");
  div.classList.add('imagediv');

  div.style.left = dets.clientX + 'px';
  div.style.top = dets.clientY + 'px';

  var img = document.createElement("img");
  img.setAttribute("src","https://images.unsplash.com/photo-1633174524827-db00a6b7bc74?q=80&w=1496&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  document.body.appendChild(div); 
  div.appendChild(img);

 gsap.to(img,{
    y : "0",
    ease : Power1,
    duration : .6

 });

 gsap.to(img,{
    y : "100%",
    delay: 0.6,
    ease : Power2,

 });

  setTimeout(function(){
    div.remove();
  },2000)
}, 500));









    

// har baar ek div banao , div ko absolute banao ek height ek width do overflow hidden karo
// and div ke ander image banao and uss image ko neeche se push karo 
// image ko animated way me uper lao 
