function theBeginning() {
  removeElement();
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
  let main = document.getElementById('main');
  while (main.firstChild){
    main.removeChild(main.firstChild);
  }
}
function divWillBeBorn() {
  let i = document.getElementById("myInput").value;
  if (i < 1 || i > 100 || NaN) {
    alert("it wasn't asked in homework! :)");
} if (i % 5 === 0) {
  document.getElementById('main').innerHTML = "I'm buzz element with number"+ " " + Number(i);
} if (i % 3 === 0) {
  document.getElementById('main').innerHTML = "I'm fizz element with number"+ " " + Number(i);
} if (i % 15 === 0) {
  document.getElementById('main').innerHTML = "I'm buzzfizz element with number"+ " " + Number(i);
} if (i % 15 !== 0 && i % 5 !== 0 && i % 3 !== 0) {
  document.getElementById('main').innerHTML = "However, I'm simple number"+ " " + Number(i);
}
}
function reset(){
  var resetButton = document.getElementById("myInput");
  if(resetButton){
      resetButton.value= "";
 }
}
function onlyBuzz() {
  removeElement();
let i = 1;
  do {
    let newDiv = document.createElement("div");
    document.getElementById("main").appendChild(newDiv);
        if (i % 5 === 0) {
        newDiv.innerText = "I'm BUZZ no." + " " + Number(i);
        newDiv.id = Number(i);
        newDiv.className = "buzz";
        }
        i++;
     }
  while (i < 101);
}
function onlyFizz() {
  removeElement();
  let i = 1;
    do {
      let newDiv = document.createElement("div");
      document.getElementById("main").appendChild(newDiv);
          if (i % 3 === 0) {
          newDiv.innerText = "I'm FIZZ no." + " " + Number(i);
          newDiv.id = Number(i);
          newDiv.className = "fizz";
          }
          i++;
       }
    while (i < 101);
  }
  let v = 50;
    function plusOne () {
      document.getElementById("add").click();
      v ++;
      
      document.getElementById('varValue').innerHTML = v;
      }

      function minusOne () {
        document.getElementById("desc").click();
        v = v - 1;
        document.getElementById('varValue').innerHTML = v;
      }
  function sayMyProperty() {
        removeElement();
        let i = v;
        if (i <0 || i > 100) {
        alert("it wasn't asked in homework! :)");
      }if (i === String) {
        alert("it wasn't asked in homework! :)");
      }if (i % 15 === 0) {
        console.log("BuzzFizz");
        document.getElementById('controlValue').innerHTML = "I'm buzzfizz";
        return (i);
      } if (i % 5 === 0) {
        console.log("Buzz");
        document.getElementById('controlValue').innerHTML = "I'm buzz";
      } if (i % 3 === 0) {
        console.log("Fizz");
        document.getElementById('controlValue').innerHTML = "I'm fizz";
      } if (i % 15 !== 0 && i % 5 !== 0 && i % 3 !== 0) {
        console.log("Number");
        document.getElementById('controlValue').innerHTML = "I'm simple number";
      }
    }
  