const numberOfUnreadNotifications = document.querySelector(".count");
const readButton = document.querySelector(".read-button");
const unreadNotifications = document.querySelectorAll(".unread");

readButton.addEventListener("click", () => {
  unreadNotifications.forEach((notification) => {
    const unreadSymbol =
      notification.children[1].children[
        notification.children[1].children.length - 2
      ];
    unreadSymbol.style.display = "none";
    notification.classList.remove("unread");
    notification.classList.remove("bg-very-light-grayish-blue");
  });
  numberOfUnreadNotifications.textContent = 0;
});
