function theBeginning() {
  let i = 1;
    do {
      let newDiv = document.createElement("div");
      document.getElementById("main").appendChild(newDiv);
        if (i % 15 === 0) {
          newDiv.innerText = "FizzBuzz";
          newDiv.id = Number(i);
          newDiv.className = "fizzBuzz";
        }else if (i % 5 === 0) {
          newDiv.innerText = "Buzz";
          newDiv.id = Number(i);
          newDiv.className = "buzz";
        }else if (i % 3 === 0) {
          newDiv.innerText = "Fizz";
          newDiv.id = Number(i);
          newDiv.className = "fizz";
        }else {
          newDiv.innerText = Number(i);
          newDiv.id = Number(i);
          newDiv.className = "number";
        }
          i++;
       }
    while (i < 101);
  }
function removeElement() {
for (i = 1; i < 101; i++) {
  let myNode = document.getElementById(i);
       myNode.remove();
  }
}
function divWillBeBorn() {
  let i = document.getElementById("myInput").value;
  if (i % 15 == 0) {
  console.log("BuzzFizz");
  document.getElementById('main').innerHTML = "I'm buzzfizz";
  return (i);
} if (i % 5 == 0) {
  console.log("Buzz");
  document.getElementById('main').innerHTML = "I'm buzz";
} if (i % 3 == 0) {
  console.log("Fizz");
  document.getElementById('main').innerHTML = "I'm fizz";
} if (i <0 || i > 100) {
    alert("No way!");
} if (i % 15 !== 0 && i % 5 !== 0 && i % 3 !== 0) {
  console.log("Number");
  document.getElementById('main').innerHTML = "I'm simple number";
}
}     
  