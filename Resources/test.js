var game = document.getElementById("container");
var div = [];
var span = [];
var x = false;
var o = false;


for (var i = 1; i < 10; i++) {
  div[i] = document.createElement("div");
  div[i].setAttribute("class", "child-div");
  div[i].setAttribute("id", "div_" + [i]);
  div[i].onclick = xycheck;

  span[i] = document.createElement("span");
  span[i].setAttribute("id", "span_" + [i]);
  span[i].setAttribute("class", "span-style")

  game.appendChild(div[i]);
  div[i].appendChild(span[i]);
}

function userInput1() {
  swal("Player1 Please Select 0 or X to continue", {
    buttons: {
      // cancel: "Run away!",
      catch: {
        text: "O",
        value: "catch",
      },
      X: true,
    },
  })
    .then((value) => {
      switch (value) {

        case "X":
          swal("Player 1: x \n\n Player 2: O");
          x = true;
          // xycheck();
          break;

        case "catch":
          swal("Player 1: 0 \n\n Player 2: x");
          o = true;
          // xycheck();
          break;

        default:
          // swal("Please select X or Y to play");
          location.reload();
      }
    });
}

var turns = ["X", "O", "X", "O", "X", "O", "X", "O", "X", "O"];
userInput1();

function xycheck() {

  var id = this.id;
  var spanid = id.replace("div_", "")
  var spanText = document.getElementById("span_" + spanid)

  if (!spanText.innerText) {
    if (o === true && turns.length !== 0) {
      spanText.innerText = turns.pop();
      winLose("O")
    }
    else if (x === true && turns.length !== 0) {
      spanText.innerText = turns.shift();
      winLose("X")
    }
  }
}

function winLose(name) {

  if (span[1].innerText !== "" && span[2].innerText !== "" && span[3].innerText !== "" && span[1].innerText === span[2].innerText && span[1].innerText === span[3].innerText && span[2].innerText === span[3].innerText) {
    swal("Congratulations! ","Player " + name + " wins");
  }
  else if (span[4].innerText !== "" && span[5].innerText !== "" && span[6].innerText !== "" && span[4].innerText === span[5].innerText && span[4].innerText === span[6].innerText && span[5].innerText === span[6].innerText) {
    swal("Congratulations! ", "Player " + name + " wins");
  }
  else if (span[7].innerText !== "" && span[8].innerText !== "" && span[9].innerText !== "" && span[7].innerText === span[8].innerText && span[7].innerText === span[9].innerText && span[8].innerText === span[9].innerText) {
    swal("Congratulations! ","Player " + name + " wins");
  }
  else if (span[1].innerText !== "" && span[4].innerText !== "" && span[7].innerText !== "" && span[1].innerText === span[4].innerText && span[1].innerText === span[7].innerText && span[4].innerText === span[7].innerText) {
    swal("Congratulations! ", "Player " + name + " wins");
  }
  else if (span[2].innerText !== "" && span[5].innerText !== "" && span[8].innerText !== "" && span[2].innerText === span[5].innerText && span[2].innerText === span[8].innerText && span[5].innerText === span[8].innerText) {
    swal("Congratulations! ", "Player " + name + " wins");
  }
  else if (span[3].innerText !== "" && span[6].innerText !== "" && span[9].innerText !== "" && span[3].innerText === span[6].innerText && span[3].innerText === span[9].innerText && span[6].innerText === span[9].innerText) {
    swal("Congratulations! ", "Player " + name + " wins");
  }
  else if (span[1].innerText !== "" && span[5].innerText !== "" && span[9].innerText !== "" && span[1].innerText === span[5].innerText && span[1].innerText === span[9].innerText && span[5].innerText === span[9].innerText) {
    swal("Congratulations! ", "Player " + name + " wins");
  }
  else if (span[3].innerText !== "" && span[5].innerText !== "" && span[7].innerText !== "" && span[3].innerText === span[5].innerText && span[3].innerText === span[7].innerText && span[5].innerText === span[7].innerText) {
    swal("Congratulations! ", "Player " + name + " wins");
  }
  else if(turns.length === 0){
    swal("Tie! ", " Match is draw.");
  }

}