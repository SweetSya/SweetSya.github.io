// Theme Switcher =================================================
//Icons
const lightIcon =  document.querySelector('#theme-light')
const darkIcon =  document.querySelector('#theme-dark')

//Theme
const userTheme = localStorage.getItem('theme')
const systemTheme = window.matchMedia('(prefers-colo-scheme: dark)').matches

//Icon Toggle
const iconToggle = () => {
    lightIcon.classList.toggle('display-none')
    darkIcon.classList.toggle('display-none')   
}

// Initial Theme Check
const themeCheck = () => {
    if (userTheme === 'dark' || (!userTheme && systemTheme)) {
        document.documentElement.classList.add('dark')
        darkIcon.classList.add('display-none')
        return
    }
    lightIcon.classList.add('display-none')
}
themeCheck()

// Manual Theme Switch
const themeSwitch = () => {
    if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('theme', 'light')
        iconToggle()
        return
    }
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
    iconToggle()
}

lightIcon.addEventListener('click', () => {
    console.log('light click')
    themeSwitch()
})
darkIcon.addEventListener('click', () => {
    console.log('dark click')
    themeSwitch()
})

// Theme Switcher =================================================

// Nvbar =================================================

const navOpenBtn = document.querySelector('#open-sm-nav')
const navCloseBtn = document.querySelector('#close-sm-nav')
const smNav = document.querySelector('#sm-nav')

navOpenBtn.addEventListener('click', () => {
    smNavHandler()
})
navCloseBtn.addEventListener('click', () => {
    smNavHandler()
})

const smNavHandler = () => {
    smNav.classList.toggle('w-full')
}


// Nvbar =================================================