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