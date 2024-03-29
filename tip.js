const bill = document.getElementById("Bill");
const numOfPeople = document.getElementById("Popleamount");
const result = document.getElementById("Result");

let serviceQual = document.getElementById("ServiceQual");

console.log(bill, numOfPeople, result);
result.style.display = "none";

const calculator = document.getElementById("Calculate");

calculator.addEventListener("click", calculateTip);

// Calculate Tip

function calculateTip() {
  if (bill.value === "" || serviceQual.value === 0) {
    alert("Please enter a value");
    return;
  }
  if (numOfPeople.value === "" || numOfPeople.value <= 1) {
    numOfPeople.value = 1;
    result.style.display = "none";
  } else {
    result.style.display = "block";
  }

  let totalTip = bill.value * serviceQual.value;

  let divTip = totalTip / numOfPeople.value;

  let totalBill = totalTip + parseInt(bill.value);
  console.log(typeof totalBill);

  let divBillTip = totalBill / numOfPeople.value;
  document.getElementById("Result").style.display = "block";
  document.getElementById("Tip").innerText = "$" + totalTip;
  document.getElementById("Total_Bill_Tip").innerHTML =
    "$" + totalBill.toFixed(2);
  document.getElementById("Div_Tip").innerHTML = "$" + divTip.toFixed(2);
  document.getElementById("Div_Tip-Person").innerHTML =
    "$" + divBillTip.toFixed(2);
}
