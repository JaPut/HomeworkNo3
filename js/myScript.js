let i = 1;
do {
    let newDiv = document.createElement("div");
    document.body.appendChild(newDiv);
      if (i % 15 === 0) {
        newDiv.innerText = "FizzBuzz";
        newDiv.id = "fizzBuzz";
      }else if (i % 5 === 0) {
        newDiv.innerText = "Buzz";
        newDiv.id = "buzz";
      }else if (i % 3 === 0) {
        newDiv.innerText = "Fizz";
        newDiv.id = "fizz";
      }else {
        newDiv.innerText = Number(i);
        newDiv.id = "number";
      }
    i++;
  }
  while (i < 101);
