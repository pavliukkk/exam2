const checkbox = document.getElementById('test');
const textElement = document.getElementById('text');
let previousTextValue = textElement.value;
checkbox.addEventListener('change', function () {
    if (this.checked) {
        textElement.value = previousTextValue;
    } else {
        previousTextValue = textElement.value;
        textElement.value = "";
    }
    textElement.readOnly = !this.checked;
});