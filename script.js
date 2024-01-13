let balance = 0;

function deposit() {
  const depositAmount = parseFloat(document.getElementById('depositAmount').value);
  if ( depositAmount > 0) {
    balance += depositAmount;
    alert(`Deposited ₹${depositAmount} successfully.`);
  } else {
    alert('Please enter a valid deposit amount.');
  }
}

function withdraw() {
  const withdrawAmount = parseFloat(document.getElementById('withdrawAmount').value);
  if (withdrawAmount > 0 && withdrawAmount <= balance) {
    balance -= withdrawAmount;
    alert(`Withdrawn ₹${withdrawAmount} successfully.`);
  } else if (withdrawAmount > balance) {
    alert('Insufficient balance.');
  } else {
    alert('Please enter a valid withdrawal amount.');
  }
}

function showBalance() {
   document.getElementById('balanceDisplay').innerText = `Current Balance: ₹${balance}`;
}
