
var i = 1;
do {
    
    let newDiv = document.createElement("div");
    newDiv.id = Number(i);
    newDiv.innerHTML = Number(i);
    document.body.appendChild(newDiv);
    
    i++;
  }
  while (i < 101);

 



  
