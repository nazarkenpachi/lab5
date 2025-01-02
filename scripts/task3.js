window.onload = function () {
   const savedData = getCookie("minDigitData");
 
   if (savedData) {
     const confirmRestore = confirm(`Ви хочете використати дані із cookies? Збережена інформація: ${savedData}`);
 
     if (confirmRestore) {
       alert("Cookies завантажені. Оновіть сторінку для повторного використання.");
       document.querySelector(".form-wrapper").innerHTML = ""; 
     } else {
       deleteCookie("minDigitData");
       location.reload(); 
     }
   }
 };

 document.getElementById("numberForm").addEventListener("submit", function (event) {
   event.preventDefault();
 
   const numberInput = document.getElementById("numberInput").value;

   if (isNaN(numberInput) || numberInput <= 0) {
     alert("Будь ласка, введіть натуральне число.");
     return;
   }

   const minDigit = findMinDigit(numberInput);
   alert(`Мінімальна цифра у числі ${numberInput}: ${minDigit}`);

   setCookie("minDigitData", `Число: ${numberInput}, Мінімальна цифра: ${minDigit}`, 7);
 });

 function findMinDigit(number) {
   const digits = number.toString().split("").map(Number);
   return Math.min(...digits);
 }

 function setCookie(name, value, days) {
   const date = new Date();
   date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
   document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
   console.log(`Cookie set: ${name}=${value}`);
 }

 function getCookie(name) {
   const cookies = document.cookie.split("; ");
   for (let cookie of cookies) {
     const [key, value] = cookie.split("=");
     if (key === name) return value;
   }
   return null;
 }

 function deleteCookie(name) {
   document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/`;
 }
 