const buttonToMarkAllAsRead = document.getElementById(
    "button-to-mark-all-as-read"
  ),
  notificationCounter = document.getElementById("notification-counter"),
  unreadNotifications = document.querySelectorAll(".notification--unread");

buttonToMarkAllAsRead.addEventListener("click", (e) => {
  notificationCounter.textContent = "0";
  unreadNotifications.forEach((notify) => {
    notify.classList.remove("notification--unread");
    notify.classList.add("notification--read");
    const smallRedCircle = notify.querySelector(".small-red-circle");
    smallRedCircle.style.display = "none";
  });
});
