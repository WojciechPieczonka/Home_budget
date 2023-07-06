const revInputNam = document.querySelector("#rev-name");

const balance = () => {
  const summary = document.querySelector(".summary");
  summary.innerHTML = "";
  if (totalRev === totalExp) {
    const balanceZero = document.createElement("h2");
    balanceZero.textContent = "The balance is 0 zł";
    const zero = document.querySelector(".summary");
    zero.appendChild(balanceZero);
  } else if (totalRev > totalExp) {
    const remainingAmount = totalRev - totalExp;
    const balancePositive = document.createElement("h2");
    balancePositive.textContent = `You can still spend ${remainingAmount} zł`;
    const positive = document.querySelector(".summary");
    positive.appendChild(balancePositive);
  } else if (totalRev < totalExp) {
    const remainingAmount = totalExp - totalRev;
    const balanceNegative = document.createElement("h2");
    balanceNegative.textContent = `The balance is negative. You're at a disadvantage ${remainingAmount} zł`;
    const negative = document.querySelector(".summary");
    negative.appendChild(balanceNegative);
  }
};

let revInputNameE = " ";
let expInputNameE = " ";
let revSum = [];
let expSum = [];
let totalRev = 0;
let totalExp = 0;

const revInputAmo = document.querySelector("#rev-amo");
let revInputAmoE = 0;

revInputAmo.addEventListener("change", (event) => {
  if (event.target.value <= 0) {
    alert("Podaj wartość większą od 0");
    event.target.value = 0;
  } else revInputAmoE = event.target.value;
});

const addRevBtn = document.querySelector("#rev-add");

addRevBtn.addEventListener("click", () => {
  const listItem = document.createElement("li");
  listItem.setAttribute("contenteditable", "false");
  listItem.classList.add("addedLi");
  revSum.push(Number(revInputAmoE));
  totalRev = revSumCount(revSum);
  const totalRevElement = document.querySelector("#r");
  totalRevElement.textContent = `Total revenue: ${totalRev} zł`;
  balance();

  const revItemName = document.createElement("span");
  revItemName.classList.add("span-margin");
  const revItemAmount = document.createElement("span");
  revItemName.innerHTML = revInputNam.value;
  revItemAmount.innerHTML = revInputAmo.value;

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.classList.add("edit-btn");
  editBtn.id = "edit-btn";

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.id = "delete-btn";

  const buttonContainer = document.createElement("span");
  buttonContainer.id = "btnContainer";
  buttonContainer.appendChild(editBtn);
  buttonContainer.appendChild(deleteBtn);

  listItem.appendChild(revItemName);
  listItem.appendChild(revItemAmount);
  listItem.appendChild(buttonContainer);

  const revAddedDiv = document.querySelector(".rev-added");
  const ul = revAddedDiv.querySelector("ul");

  ul.appendChild(listItem);

  editBtn.addEventListener("click", () => {
    const currentAmmount = Number(revItemAmount.textContent);
    revItemName.setAttribute("contenteditable", "true");
    revItemName.classList.add("editing", "blink");
    revItemAmount.setAttribute("contenteditable", "true");
    revItemAmount.classList.add("editing", "blink");

    const saveBtn = document.createElement("button");
    saveBtn.textContent = "Save";
    saveBtn.classList.add("save-btn");
    saveBtn.id = "save-btn";

    saveBtn.addEventListener("click", () => {
      revItemName.setAttribute("contenteditable", "false");
      revItemName.classList.remove("editing", "blink");
      revItemAmount.setAttribute("contenteditable", "false");
      revItemAmount.classList.remove("editing", "blink");
      const indexToRemove = revSum.indexOf(currentAmmount);
      revSum.splice(indexToRemove, 1);
      revSum.push(Number(revItemAmount.textContent));
      totalRev = revSumCount();
      const totalRevElement = document.querySelector("#r");
      totalRevElement.textContent = `Total revenue: ${totalRev} zł`;
      balance();
      saveBtn.remove();
    });
    buttonContainer.appendChild(saveBtn);
  });

  deleteBtn.addEventListener("click", () => {
    const indexToRemove = revSum.indexOf(Number(revItemAmount.textContent));
    if (indexToRemove !== -1) {
      revSum.splice(indexToRemove, 1);
      totalRev = revSumCount();
      const totalRevElement = document.querySelector("#r");
      totalRevElement.textContent = `Total revenue: ${totalRev} zł`;
      balance();
    }
    ul.removeChild(listItem);
  });
});

const revSumCount = () => {
  const sum = revSum.reduce((accumulator, currentvalue) => {
    return accumulator + currentvalue;
  }, 0);
  return sum;
};
balance();

//Expenses//

const expInputNam = document.querySelector("#exp-name");

const expInputAmo = document.querySelector("#exp-amo");
let sumInputAmoE = 0;

expInputAmo.addEventListener("change", (event) => {
  if (event.target.value <= 0) {
    alert("Podaj wartość większą od 0");
    event.target.value = 0;
  } else {
    sumInputAmoE = event.target.value;
  }
});

const addExpBtn = document.querySelector("#exp-add");

addExpBtn.addEventListener("click", () => {
  const listItem = document.createElement("li");
  listItem.setAttribute("contenteditable", "false");
  listItem.classList.add("addedLi");

  expSum.push(Number(sumInputAmoE));
  totalExp = expSumCount(expSum);
  const totalExpElement = document.querySelector("#e");
  totalExpElement.textContent = `Total expenses: ${totalExp} zł`;
  balance();

  const expItem = document.createElement("span"); /////////////////
  expItem.innerHTML = `${expInputNam.value} - ${expInputAmo.value} zł`;

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.classList.add("edit-btn");

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");

  const buttonContainer = document.createElement("span");
  buttonContainer.appendChild(editBtn);
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
const expSumCount = () => {
  let sum = expSum.reduce((accumulator, currentvalue) => {
    return accumulator + currentvalue;
  }, 0);
  return sum;
};

balance();
