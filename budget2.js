let totalAmount = document.getElementById ("totalamount");
let userAmount = document.getElementById ("totalamount");
const checkAmountButton = document.getElementById ("checkamount");
const totalAmountButton = document.getElementById ("checkamount");
const productTitle = document.getElementById ("checkamount");
const errorMessage = document.getElementById ("checkamount");
const productTitileError = document.getElementById ("checkamount");
const productCostError = document.getElementById ("checkamount");
const amount = document.getElementById ("checkamount");
const expenditureValue = document.getElementById ("checkamount");
const balanceValue = document.getElementById ("checkamount");
const list = document.getElementById ("checkamount");
let temAmount = 0;

//budget part

totalAmountButton.addEventListener("click", () => {
tempAmount = totalAmount.value;
if (tempAmount === "" || tempAmount < 0){
    errorMessage.classList.remove("hide");
    amount.innerHTML = tempAmount;
    balanceValue.innerText = tempAmount - expenditureValue.innerText;
    totalAmount.value = "";
}

});

//edit delete button

const disableButtons = (bool) => {
let editButtons = document.getElementsByClassName (edit);
Array.from (editButtons).forEach(element => {
    element.disable = bool;
});
};

// list element modify

const modifyElement = (element, edit = flase) => {
let parentDiv = element.parentElement;
let currentBalance = balance.Value.innerText;
let currentExpense = expenditureValue.innerText:
let parentAmount = parentDiv.qureySelector(".amount").innerText;
if(edit){
let parentText = parentDiv.qureySelector(".product").innerText;
productTitle.value = parentText;
userAmount.value = parentAmount;
disableButtons(true);
}

balanceValue.innerText = parseInt (currentBalance) + parseInt(parentAmount);
expenditureValue.innerText = parseInt(currentExpense) - parseInt (parentAmount);
parentDiv.remove();
};

//list creating function

const listCreator = (expenseName, expenseValue) => {
    let sublistContent = document.createElement ("div");
    sublistContent.classList.add("sublist-content", "flex-space");
    list.appendChild(sublistContent);
    sublistContent.innerHTML = `<p class="product"> $ {expenseName}</p>
    <p class="amount"> $
    {expenseValue}</p>`;
let editButton = document.createElement("button");
editButton.classList.add("fa-solid" , "fa-pen-to-sqaure", "edit");
  
editButton.style.fontSize = "22px";
editButton.addEventListener ("click", () => {
    modifyElement(editButton, true);
});

let deleteButton = document.createElement ("button");

deleteButton.classList.add ("fa-solid", "fa-trash-can" , "delete");

deleteButton.style.fontSize = "22px";
deleteButton.addEventListener ("click", () => {
    modifyElement (deleteButton);
});
sublistContent.appendChild(editButton);
sublistContent.appendChild(deleteButton);
document.getElementById("list").appendChild (sublistContent);
};

//expense  function

checkAmountButton.addEventListener ("click" () => {
if (!userAmount.value || !productTitle.value) {
    productTitileError.classList.remove("hide");
    return false;    
}
disableButtons (false);
let expenditure = parseInt(userAmount.value);
let sum = parseInt(expenditureValue.innerText) + expenditure;
expenditureValue.innerText = sum;

const totalBalance = tempAmount - sum;
balanceValue.innerText = totalBalance;
listCreator(productTitle.value, userAmount.value);
productTitle.value= ""; userAmount.value="";
});

