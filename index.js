const revInputNam = document.querySelector("#rev-name");

let revInputNameE = " ";

revInputNam.addEventListener("change", (event) => {
  if (event.target.value > 0) {
    alert("Podaj wartość większą od 0");
  } else revInputNameE = event.target.value;
});

const revInputAmo = document.querySelector("#rev-amo");
let revInputAmoE = 1;
revInputAmo.addEventListener("change", (event) => {
  if (event.target.value <= 0) {
    alert("Podaj wartość większą od 0");
    event.target.value = 0;
  } else revInputAmoE = event.target.value;
});

const AddRevBtn = document.querySelector("#rev-add");

AddRevBtn.addEventListener("click", () => {
  const listItem = document.createElement("li");
  listItem.setAttribute("contenteditable", "false");
  listItem.classList.add("addedLi");

  const revItem = document.createElement("span");
  revItem.innerHTML = revInputNameE + " - " + revInputAmo.value;

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";

  const buttonContainer = document.createElement("span");
  buttonContainer.appendChild(editBtn);
  buttonContainer.appendChild(document.createTextNode(" ")); // Dodanie odstępu między przyciskami
  buttonContainer.appendChild(deleteBtn);

  listItem.appendChild(revItem);
  listItem.appendChild(buttonContainer);

  const revAddedDiv = document.querySelector(".rev-added");
  const ul = revAddedDiv.querySelector("ul");

  ul.appendChild(listItem);

  editBtn.addEventListener("click", () => {
    revItem.setAttribute("contenteditable", "true");
  });

  deleteBtn.addEventListener("click", () => {
    ul.removeChild(listItem);
  });
});

const expInputNam = document.querySelector("#exp-name");
const expInputAmo = document.querySelector("#exp-amo");

const AddExpBtn = document.querySelector("#exp-add");
AddExpBtn.addEventListener("click", () => {
  const listItem = document.createElement("li");
  listItem.setAttribute("contenteditable", "false");
  listItem.classList.add("addedLi");

  const expItem = document.createElement("span");
  expItem.innerHTML = expInputNam.value + " - " + expInputAmo.value;

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";

  const buttonContainer = document.createElement("span");
  buttonContainer.appendChild(editBtn);
  buttonContainer.appendChild(document.createTextNode(" ")); // Dodanie odstępu między przyciskami
  buttonContainer.appendChild(deleteBtn);

  listItem.appendChild(expItem);
  listItem.appendChild(buttonContainer);

  const expAddedDiv = document.querySelector(".exp-added");
  const ul = expAddedDiv.querySelector("ul");

  ul.appendChild(listItem);

  editBtn.addEventListener("click", () => {
    expItem.setAttribute("contenteditable", "true");
  });

  deleteBtn.addEventListener("click", () => {
    ul.removeChild(listItem);
  });
});
