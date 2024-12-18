function toggleDropdown(button) {
  const dropdown = button.parentElement;
  const content = dropdown.querySelector('.dropdown-content');
  const icon = button.querySelector('span');
  
  dropdown.classList.toggle('active');
  icon.textContent = dropdown.classList.contains('active') ? '-' : '+';

  if (dropdown.classList.contains('active')) {
    content.style.maxHeight = content.scrollHeight + "px";
  } else {
    content.style.maxHeight = "0";
  }
}

document.querySelector('.button2').addEventListener('click', function() {
  document.querySelector('.button3').scrollIntoView({ behavior: 'smooth', block: 'center' });
});

window.addEventListener('scroll', function() {
  const scrollButton = document.querySelector('.scroll-button');
  const button3 = document.querySelector('.button3');
  const button3Position = button3.getBoundingClientRect().top + window.scrollY;

  if (window.scrollY > button3Position) {
    scrollButton.style.display = 'block';
  } else {
    scrollButton.style.display = 'none';
  }
});


document.querySelector('.button2').addEventListener('mouseover', function() {
  document.querySelector('.button3').style.transition = 'transform 1s ease, background-color 1s ease';
});