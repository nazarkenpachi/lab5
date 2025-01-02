let arthur = document.querySelector(".div-1");
let john = document.querySelector(".div-2");

let div4 = document.querySelector(".div-4-img");
let div5 = document.querySelector(".div-5");

let text_wrapper = document.querySelector(".text-wrapper");
let span_1 = document.querySelector("span-1")

let panels = [arthur, john];
let timeoutId;

// text_wrapper.remove('span-1');
div5.innerHTML = div5.innerHTML + '<span>Read Dead Redemption 2</span>';
div5.style.opacity = '1';


panels.forEach((panel) => {
   panel.addEventListener('mouseover', () => {
      clearTimeout(timeoutId);
      if (panel === arthur) {
         div4.classList.add('arthur-poster')
         text_wrapper.innerHTML = '<p class="arthur-text">"We`re thieves in a world that don`t want us no more"</p>';
      }
      else {
         div4.classList.add('john-poster')
         text_wrapper.innerHTML = '<p class="john-text">"Guess about all I got left now is doubts. Doubts and scars"</p>';
      }
      div4.style.opacity = '1';
      text_wrapper.style.opacity = '1';
   })
   panel.addEventListener('mouseout', () => {
      if (panel === arthur) {
         div4.classList.remove('arthur-poster')
      }
      else {
         div4.classList.remove('john-poster')
      }
      text_wrapper.style.opacity = '0';

      timeoutId = setTimeout(() => {
         text_wrapper.innerHTML = ''; 
      }, 500); 
   })
})

