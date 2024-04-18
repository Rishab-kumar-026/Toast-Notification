let notificationBox = document.querySelector(".notification-box");
let successMsg = ' <i class="fa-solid fa-circle-check"></i> Successfully Submitted';
let errorMsg = ' <i class="fa-solid fa-circle-xmark"></i> Please fix the Error';
let invalidMsg = ' <i class="fa-solid fa-circle-exclamation"></i> Invalid input , check again';

function showNotification(msg) {
    let notification = document.createElement('div');
    notification.classList.add("toast");
    notification.innerHTML = msg;

    notificationBox.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 6000);


    if (msg.includes('Error')) {
        notification.classList.add("error");
    }
    if (msg.includes('Invalid')) {
        notification.classList.add("invalid");
    }
}