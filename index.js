const toggleMenu = () => {
    const navigation = document.querySelector(".navigation");

    const burgerMenu = document.querySelector(".menu-icon");
    const src = burgerMenu.getAttribute("src");

    const isBurger = src === "images/burger-menu.svg";
    const iconName = isBurger ? "images/close.svg" : "images/burger-menu.svg";

    burgerMenu.setAttribute("src", iconName);

    if (!isBurger) {
    navigation.classList.add("navigation--mobile--fadeout");
    setTimeout(() => {
        navigation.classList.toggle("navigation--mobile");
    }, 300);
    } else {
    navigation.classList.remove("navigation--mobile--fadeout");
    navigation.classList.toggle("navigation--mobile");
    }
};