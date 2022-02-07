const form = document.getElementById('form');

form.addEventListener('submit', formSend);

async function formSend(e) {
    e.preventDefault();
    let error = formValidate(form);

    let formData = new FormData(form);
    formData.append('image', formImage.files[0]);

    if (error === 0) {
        form.classList.add('is-sending');
        /*let response = await fetch('sendmail.php', {
            method: 'POST',
            body: formData
        });
        if (response.ok) {
            let result = await response.json();
            alert(result.message);
            formPreview.innerHTML = '';
            form.reset();
            form.classList.remove('is-sending');
        } else {
            alert('Error');
            form.classList.remove('is-sending');
        }*/
    } else {
        alert('Please fill out all required fields before continuing.');
    }
}

function formValidate(form) {
    let error = 0;
    let formReq = document.querySelectorAll('.is-req');

    for (let index = 0; index < formReq.length; index++) {
        const input = formReq[index];
        formRemoveError(input);
        
        if (input.classList.contains('email')) {
            if (emailTest(input)) {
                formAddError(input);
                error++;
            }
        }
        else if (input.getAttribute('type') === 'checkbox' && input.checked === false) {
            formAddError(input);
            error++;
        } else {
            if (input.value === '') {
                formAddError(input);
                error++;
            }
        }
    }
    return error;
}
function formAddError(input) {
    input.classList.add('is-error');
}
function formRemoveError(input) {
    input.classList.remove('is-error');
}
function emailTest(input) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.value);
}


const formImage = document.getElementById('formImage');
const formPreview = document.getElementById('formPreview');

formImage.addEventListener('change', () => {
    uploadFile(formImage.files[0]);
});

function uploadFile(file) {
    if (!['image/jpeg', 'image/png', 'image/gif'].includes(file.type)) {
        alert('Only images');
        formImage.value = '';
        return;
    }
    if (file.size > 2 * 1024 * 1024) {
        alert('Max file size 2Mb');
        return;
    }
    var reader = new FileReader();
    reader.onload = function(e) {
        formPreview.innerHTML = `<img src='${e.target.result}' alt="Photo">`;
    };
    reader.onerror = function(e) {
        alert('Error');
    };
    reader.readAsDataURL(file);
}