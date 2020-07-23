document.addEventListener('DOMContentLoaded', function () {

// 
 function showTime() {
   let date = new Date();
   let hours = date.getHours();
   let minutes = date.getMinutes();
   let seconds = date.getSeconds()

   let formatHours = convertFormat(hours);
   hours = checkTime(hours);

   hours = addZero(hours);
   minutes = addZero(minutes)
   seconds = addZero(seconds)

   document.getElementById('clock').innerHTML = `${hours} : ${minutes} : ${seconds} ${formatHours}`;
 }
 
 //Конвертим в формат AM или PM
 function convertFormat(time) {
   let format = 'AM';
   if(time >= 12) {
     format = 'PM';
   }
   return format;
 };

 //Проверяем время, если больше 12, то обнуляем
 function checkTime(time) {
   if(time > 12) {
     time = time - 12;
   }
   else if(time === 0) {
     time = 12;
   }
   return time;
 };

//  Добавляем ноль перед числами менее 10
 function addZero(time) {
   if(time < 10) {
     time = "0" + time;
   }
   return time;
 };

//  запускаем обновление через 1 сек
 setInterval(showTime, 1000);
});