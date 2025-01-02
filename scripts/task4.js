const colorPicker = document.getElementById('colorPicker');

window.onload = () => {
  const savedColor = localStorage.getItem('div5TextColor'); 
  if (savedColor) {
    div5.querySelector('span').style.color = savedColor; 
    colorPicker.value = savedColor; 
  }
};

colorPicker.addEventListener('change', (event) => {
  const selectedColor = event.target.value; 
  div5.querySelector('span').style.color = selectedColor; 
  localStorage.setItem('div5TextColor', selectedColor); 
});