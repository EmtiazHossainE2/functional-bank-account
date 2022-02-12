//add button click handler
document.getElementById('submit-btn').addEventListener('click', function () {
    //get user email 
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // console.log(userEmail);
    //get user password 
    const userPassword = document.getElementById('user-password').value;
    // console.log(userPassword);

    if (userEmail == 'emtiazhossainrzs@gmail.com' && userPassword == '123456') {
        window.location.href = 'bank.html'
    }
    else {
        alert('Enter valid info')
    }

})




const nameOfOrganization = document.getElementById("name").value;

console.log(nameOfOrganization);
