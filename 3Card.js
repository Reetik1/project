const checkboxItems = document.querySelectorAll('.checkbox-item');
let checkedItem = null;

checkboxItems.forEach(item => {
  const checkbox = item.querySelector('.checkbox');
  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      if (checkedItem !== null && checkedItem !== item) {
        checkedItem.classList.remove('active');
      }
      item.classList.add('active');
      checkedItem = item;
      updateEndSection();
    } else {
      item.classList.remove('active');
      checkedItem = null;
      updateEndSection();
    }
  });
});

function updateEndSection() {
  const endTextSection = document.querySelector('.end-text-section');
  const endText = endTextSection.querySelector('.end-text');
  const endButton = endTextSection.querySelector('.end-button');


  if (checkedItem) {
    endText.style.display = 'block';
   
    endButton.style.opacity = '1';
    endButton.addEventListener('click', () => {
      // Redirect to next page
      window.location.href = '/last.html';
    });
  } else {
    endText.style.display = 'none';
    endButton.style.opacity = '0.5';
    }
  }

  const backButton = document.querySelector('.back-button');

  backButton.addEventListener('click', () => {
    
    window.history.back();
  });
  
  
