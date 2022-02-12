//deposit calculation 
document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositValue = document.getElementById('deposit-value');
    const depositOutput = document.getElementById('deposit-output');
    depositOutput.innerText = parseFloat(depositOutput.innerText) + parseFloat(depositValue.value);
    //balance output calculation
    const balanceOutput = document.getElementById('balance-output');
    balanceOutput.innerText = parseFloat(balanceOutput.innerText) + parseFloat(depositValue.value);

    depositValue.value = '';
})

// withdraw calculation 
document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawValue = document.getElementById('withdraw-value');
    const withdrawOutput = document.getElementById('withdraw-output');
    withdrawOutput.innerText = parseFloat(withdrawOutput.innerText) + parseFloat(withdrawValue.value);

    //balance output calculation 
    const balanceOutput = document.getElementById('balance-output');
    balanceOutput.innerText = parseFloat(balanceOutput.innerText) - parseFloat(withdrawOutput.innerText);

    withdrawValue.value = ''

})