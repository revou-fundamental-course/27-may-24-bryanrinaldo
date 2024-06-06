//This is javascript


function getName() {
    let name = prompt("Nama anda?", "")

    if(!name) {
        name = "Guest"
    }

    document.getElementById("guest-name").innerText = name
}

getName()

function formValidation() {
    let nameInput = document.getElementById('name-input').value;
    if (nameInput == null||nameInput == '') {
        alert('Tolong isi nama anda');
    } else {
        console.log(nameInput);   
    }

    let birthdateInput = document.getElementById('tgl_lahir').value;
    if (birthdateInput == null||birthdateInput == '') {
        alert('Tolong isi tanggal lahir');
    } else {
        console.log(birthdateInput);   
    }
   
    if(document.getElementById('laki-laki').checked) {   
                document.getElementById("disp").innerHTML   
        = document.getElementById("laki-laki").value;   
        }   
        else if(document.getElementById('perempuan').checked) {   
         document.getElementById("disp").innerHTML   
         = document.getElementById("perempuan").value;           
        }   
    console.log(genderInput);  
    }

    let messageInput = document.getElementById('message').value;
    if (messageInput == null||messageInput == '') {
        alert('Tolong tulis pesan anda');
    } else {
        console.log(messageInput);   
}   

function setFormResult(name, birthDate, gender, pesan) {
    document.getElementById("name-input").innerText = name
    document.getElementById("birth-dateinput").innerText = birthDate.split("-").reverse().join("/")
    document.getElementById("jenis_kelamin").innerText = gender === "male" ? "Laki-laki" : "Perempuan"
    document.getElementById("message").innerText = pesan
}


let indexSlide = 1;
showBanner(1);


function nextSlide(n) {
    showBanner(indexSlide += n);
}

function showBanner(indexBanner) {
    let listImage = document.getElementsByClassName('banner-img');
    if (indexBanner > listImage.length) indexSlide = 1;

    let index = 0;
    while (index < listImage.length) {
        listImage[index].style.display = 'none';
        index++;
    }

    listImage[indexSlide - 1].style.display = 'block';
    console.log('Index' + (indexSlide - 1) + 'Adalah Index Image yang ditampilkan');
}

// Jeda waktu antar slide
setInterval(() => nextSlide(1), 3000);  