const taskListe = document.getElementById("aufgaben-liste");
const textFeld = document.getElementById("aufgabe-text");
let emptyArrayTaskList = [];

// Add Button
const addTaskToDisplayButton = document.getElementById("add-item");
addTaskToDisplayButton.addEventListener("click", addItemToDisplayList);
addTaskToDisplayButton.addEventListener("click", addItemToArray);

function addItemToDisplayList() {
  if (textFeld.value === "") {
    alert("Mensch, schreib doch was...");
  } else {
    let li = document.createElement("li");
    li.innerHTML = textFeld.value;
    // li.className = "" broke the function;
    taskListe.appendChild(li);
    let cross = document.createElement("cross");
    cross.innerHTML = "\u00d7";
    li.appendChild(cross);
  }
}

function addItemToArray() {
  let x = textFeld.value;
  emptyArrayTaskList.push(x);
  // console.log(emptyArrayTaskList) consol log check;
  textFeld.value = "";
}

// Verlosen

const verlosenButton = document.getElementById("verlosen-button");
// Random Funktion
function rndNumber(max) {
  return Math.floor(Math.random() * max);
}

const verlosteAufgabeDirectory = document.getElementById("verloste-aufgabe");

function aufgabenVerlosen() {
  // verlosteAufgabeDirectory.innerHTML = "";
  let verlosteAufgabeText =
    emptyArrayTaskList[[rndNumber(emptyArrayTaskList.length)]];
  console.log(verlosteAufgabeText);
  let li = document.createElement("li");
  li.innerText = verlosteAufgabeText;
  verlosteAufgabeDirectory.appendChild(li);
  emptyArrayTaskList.slice[verlosteAufgabeText];
  // pop or shift not usable, delete is not recommended
  console.log(emptyArrayTaskList);
}

verlosenButton.addEventListener("click", aufgabenVerlosen);

// delete Aufgabe button

const Deletebutton = document.getElementById("aufgaben-liste");
Deletebutton.addEventListener(
  "click",
  function (Deletethis) {
    if (Deletethis.target.matches("cross")) {
      Deletethis.target.parentElement.remove();
    }
  },
  false
);
