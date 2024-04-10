let photoUploaded = false;
let locationEntered = false;

function loadPhoto(event) {
  toggleNextButton();
  const reader = new FileReader();
  reader.onload = function() {
    const photo = document.getElementById('profilePhoto');
    document.getElementById('profilePhoto').style.border = 'none';
    photo.src = reader.result;
    photoUploaded = true;
  };
  reader.readAsDataURL(event.target.files[0]);
}


function openFileDialog() {
  const input = document.getElementById('photoInput');
  input.click();
}


function toggleNextButton() {
  const nextButton = document.getElementById('nextButton');
  if (photoUploaded && locationEntered) {
    nextButton.disabled = false;
  } else {
    nextButton.disabled = true;
  }
}


const locationInput = document.getElementById('locationInput');
locationInput.addEventListener('input', function() {
  locationEntered = (this.value.trim() !== '');
  toggleNextButton();
});


const nextButton = document.getElementById('nextButton');
nextButton.addEventListener('click', function() {
  window.location.href = '/3Card.html';
});