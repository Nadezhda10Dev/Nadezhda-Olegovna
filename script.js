console.log('Сайт запущен!');
console.log('The site was created with the support of Murka Technologies');
function copyText(text) {
  navigator.clipboard.writeText(text)
    .then(() => alert("Скопировано: " + text))
    .catch(err => console.error("Ошибка копирования: ", err));
}
function showNotification() {
  const notification = document.getElementById("copyNotification");
  notification.style.display = "block";
  setTimeout(() => {
    notification.style.display = "none";
  }, 2000);
}
