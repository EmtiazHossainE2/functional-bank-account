//deposit
const depositValue = document.getElementById('deposit-value');
const depositOutput = document.getElementById('deposit-output');

// withdraw 
const withdrawValue = document.getElementById('withdraw-value');
const withdrawOutput = document.getElementById('withdraw-output');

//balance 
const balanceOutput = document.getElementById('balance-output');

// addition 
function addMoney(currentAmount, inputAmount) {
    return parseFloat(currentAmount) + parseFloat(inputAmount)
}
// subtraction 
function getMoney(currentAmount, inputAmount) {
    return parseFloat(currentAmount) - parseFloat(inputAmount)
}

//deposit calculation 
document.getElementById('deposit-btn').addEventListener('click', function () {
    if (depositValue.value > 0) {
        const totalDeposit = addMoney(depositOutput.innerText, depositValue.value);
        depositOutput.innerText = totalDeposit;
    }
    else {
        alert('Enter Positive Value')

    }
    //balance output calculation
    const totalBalance = addMoney(balanceOutput.innerText, depositOutput.innerText);
    balanceOutput.innerText = totalBalance;

    depositValue.value = '';
})

// withdraw calculation 
document.getElementById('withdraw-btn').addEventListener('click', function () {
    if (withdrawValue.value > 0) {
        const totalWithdraw = addMoney(withdrawOutput.innerText, withdrawValue.value);
        withdrawOutput.innerText = totalWithdraw;
    }
    else {
        alert('Enter Positive Number')
    }
    //balance output calculation 
    const totalBalance = getMoney(balanceOutput.innerText, withdrawOutput.innerText)
    balanceOutput.innerText = totalBalance

    withdrawValue.value = ''

})