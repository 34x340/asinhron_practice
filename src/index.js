// const refs = {
//     notification: document.querySelector('.js-alert'),
//     };
    
//     // const notification = document.querySelector('.js-alert')

//     refs.notification.addEventListener('click', onNotificationClick);
    
//     showNotification();

//     const timeoutId = setTimeout(hideNotification, 3000)
    
  
//     // Функції
   
//     function onNotificationClick() {
//     hideNotification();
//     clearTimeout(timeoutId);
//     }
    
//     function showNotification() {
//     refs.notification.classList.add('is-visible');
    
//     }
    
//     function hideNotification() {
//     refs.notification.classList.remove('is-visible');
//     }


//     setTimeout(() => {
//         confirm('Підпишіться');
//     }, 5000)

// // !!!
// let confrimCount = 0;
// const timeOutId = setInterval(() => {
//     confirm('Subscribe')
//     confirmCount++;
//     if (confirmCount === 5) {
//         clearInterval(confirmCount)
//     }
// }, 3000)

// 21312312

function findDate () {
    const actualDate = new Date()
    const actualYear = actualDate.getFullYear()
    const actualMonth = actualDate.getMonth() + 1
    const actualDay = actualDate.getDate()
    console.log(actualYear, actualMonth, actualDay)
}
findDate()