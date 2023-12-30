const checkbox = document.getElementById('test');
const textInput = document.getElementById('text');

function toggleVisibility() {
  if (checkbox.checked) {
    textInput.style.display = 'block';
  } else {
    textInput.style.display = 'none';
  }
}

checkbox.addEventListener('change', toggleVisibility);

toggleVisibility();
