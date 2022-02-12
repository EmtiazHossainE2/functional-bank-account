// reduce repeated code using function deposit & withdraw value 
function getInputValue(inputValue) {
    const inputAmount = document.getElementById(inputValue);
    const inputAmountText = inputAmount.value;
    const amountValue = parseFloat(inputAmountText);

    //remove value 
    inputAmount.value = '';
    return amountValue;
}

// total deposit & withdraw calculation using  function 
function totalCashInOut(totalCashField, inputAmount) {
    const totalInput = document.getElementById(totalCashField);
    const totalInputText = totalInput.innerText;
    const previousInputAmount = parseFloat(totalInputText)

    const newInputAmount = previousInputAmount + inputAmount;
    totalInput.innerText = newInputAmount;
}

//total balance 
function totalbalance(amount, isAdition) {
    const totalBalance = document.getElementById('total-balance');
    const previousBalance = totalBalance.innerText;
    const newTotalBanlance = parseFloat(previousBalance) + amount;
    if (isAdition == true) {
        totalBalance.innerText = newTotalBanlance;
    }
    else {
        totalBalance.innerText = parseFloat(previousBalance) - amount;
    }
}

// get deposit-btn 
document.getElementById('deposit-btn').addEventListener('click', function () {

    //total deposit calculation 
    /* const totalDeposit = document.getElementById('total-deposit');
    const previousDepositAmount = totalDeposit.innerText;
    const newDepositAmount = parseFloat(previousDepositAmount) + depositAmount;

    totalDeposit.innerText = newDepositAmount; */

    // total balance calculation 
    /* const totalBalance = document.getElementById('total-balance');
    const previousBalance = totalBalance.innerText;
    const newTotalBanlance = parseFloat(previousBalance) + depositAmount;
    totalBalance.innerText = newTotalBanlance; */
    const depositAmount = getInputValue('deposit-input');
    totalCashInOut('total-deposit', depositAmount)
    totalbalance(depositAmount, true)

})

// get withdraw btn 
document.getElementById('withdraw-btn').addEventListener('click', function () {
    //totalWithdraw 
    /* const totalWithdraw = document.getElementById('total-withdraw');
    const previousWithdraw = totalWithdraw.innerText;
    const newTotalWithdraw = parseFloat(previousWithdraw) + withdrawAmount;
    totalWithdraw.innerText = newTotalWithdraw; */

    // total balance calculation after withdraw  
    /* const totalBalance = document.getElementById('total-balance');
    const previousBalance = totalBalance.innerText;
    const newTotalBanlance = parseFloat(previousBalance) - withdrawAmount;
    totalBalance.innerText = newTotalBanlance; */

    const withdrawAmount = getInputValue('withdraw-input');
    totalCashInOut('total-withdraw', withdrawAmount)
    totalbalance(withdrawAmount, false)

})


/* 
// Recap Module 26  
// get deposit-btn 
document.getElementById('deposit-btn').addEventListener('click', function () {
    const inputAmount = document.getElementById('deposit-input');
    const depositAmount = inputAmount.value;
    // console.log(depositAmount)

    //total deposit calculation 
    const totalDeposit = document.getElementById('total-deposit');
    const previousDepositAmount = totalDeposit.innerText;
    const newDepositAmount = parseFloat(previousDepositAmount) + parseFloat(depositAmount);

    totalDeposit.innerText = newDepositAmount;

    // total balance calculation 
    const totalBalance = document.getElementById('total-balance');
    const previousBalance = totalBalance.innerText;
    const newTotalBanlance = parseFloat(previousBalance) + parseFloat(depositAmount);
    totalBalance.innerText = newTotalBanlance;

    //remove value 
    inputAmount.value = '';
})

// get withdraw btn 
document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmount = withdrawInput.value;
    // console.log(withdrawAmount);

    //totalWithdraw 
    const totalWithdraw = document.getElementById('total-withdraw');
    const previousWithdraw = totalWithdraw.innerText;
    const newTotalWithdraw = parseFloat(previousWithdraw) + parseFloat(withdrawAmount);
    totalWithdraw.innerText = newTotalWithdraw;

    // total balance calculation after withdraw  
    const totalBalance = document.getElementById('total-balance');
    const previousBalance = totalBalance.innerText;
    const newTotalBanlance = parseFloat(previousBalance) - parseFloat(withdrawAmount);
    totalBalance.innerText = newTotalBanlance;

    withdrawInput.value = ''
})


*/