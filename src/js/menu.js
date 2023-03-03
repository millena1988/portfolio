const siteMenu = () => {

    // Get elements from DOM
    const menuButton = document.querySelector('.menu-button')
    const menu = document.querySelector('.site-menu')
    const bookButton = document.querySelector('.site-header__button')

    // Toogle Menu
    const toggleMenu = () => {
        menu.classList.toggle('site-menu--visible')
        menuButton.classList.toggle('menu-button--close')
        bookButtonButton.classList.toggle('site-header__button--menu-opened')
    }

    // Create Event
    menuButton.addEventListener('click', toggleMenu)

}

siteMenu ()