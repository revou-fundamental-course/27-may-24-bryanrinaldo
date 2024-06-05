//This is javascript

function validateForm() {
    const nama = document.forms['message-form']['name-input'].value
    if (nama == ''){
        document.getElementById("error-name").innerHTML = "Tidak boleh kosong!"
        return false
    }
}

// menggunakan get elemen
function formValidation() {
    let nameInput = document.getElementById('name-input').value;
    console.log(nameInput);
}

// menggunakan query selector
// function formValidation() {
//     let nameInput = document.querySelector('#name-input');
//     console.log(nameInput);
// }

