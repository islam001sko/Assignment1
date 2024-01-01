function validateForm() {
    var inputName = document.getElementById('inputEmail3').value;
    var inputWeight = document.getElementById('inputWeight').value;
    var inputHeight = document.getElementById('inputHeight').value;

    if (inputName === '' || inputWeight === '' || inputHeight === '') {
        alert('Please fill in all fields.');
        return false;
    }

    return true;
}

const params = new URLSearchParams(window.location.search);
const message = decodeURIComponent(params.get('message'));

const resultDiv = document.getElementById('result');
resultDiv.textContent = message;