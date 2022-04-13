const navigationRectangle = document.querySelector(
  ".ListNavigation-ellipsis-rectangle"
);
const navigationButton = document.querySelector(".ListNavigation-ellipsis");
let intervalid;
const navigation = document.querySelector(".ListNavigation-items");

navigationButton.addEventListener("click", function () {
  if (!navigation.classList.contains("open")) {
    navigation.classList.add("menu-active");
    setTimeout(() => {
      navigation.classList.add("open");
      navigationRectangle.classList.add(
        "ListNavigation-ellipsis-rectangle-shadow"
      );
    }, 0);
  }

  if (navigation.classList.contains("open")) {
    clearTimeout(intervalid);
    navigation.classList.remove("menu-active");
    intervalid = setTimeout(() => {
      navigation.classList.remove("open");
      navigationRectangle.classList.remove(
        "ListNavigation-ellipsis-rectangle-shadow"
      );
    }, 0);
  }
});
