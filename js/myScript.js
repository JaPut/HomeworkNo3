let i = 1;
do {
    let newDiv = document.createElement("div");
    newDiv.id = Number(i);
    document.body.appendChild(newDiv);
      if (i % 15 === 0) {
        newDiv.innerText = "FizzBuzz";
      }else if (i % 5 === 0) {
        newDiv.innerText = "Buzz";
      }else if (i % 3 === 0) {
        newDiv.innerText = "Fizz";
      }else {
        newDiv.innerText = "Number";
      }
    i++;
  }
  while (i < 101);