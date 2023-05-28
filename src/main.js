// Theme Switcher =================================================
//Icons
const lightIcon =  document.querySelector('#theme-light')
const darkIcon =  document.querySelector('#theme-dark')
const themeBtn = document.querySelector('#theme-switch')

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

themeBtn.addEventListener('click', () => {
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

// Sidebar ============================================

elementsPageScrollTopLib = [
    {
        page: 1,
        top: document.querySelector('#page1').offsetTop
    },
    {
        page: 2,
        top: document.querySelector('#page2').offsetTop
    },
    {
        page: 3,
        top: document.querySelector('#page3').offsetTop
    },
    {
        page: 4,
        top: document.querySelector('#page4').offsetTop
    },
    
]

const pageUpBtn = document.querySelector('#page-up')
const pageDownBtn = document.querySelector('#page-down')

pageDownBtn.addEventListener('click', () => {
    pageDownHandler()
})
pageUpBtn.addEventListener('click', () => {
    pageUpHandler()
})

const pageDownHandler = () => {
    const current = currentPage()+1
    
    if (current > elementsPageScrollTopLib.length) {
        return
    }

    //if it hits bottom, remove arrow bottom
    if (current === elementsPageScrollTopLib.length) {
        if (!pageDownBtn.classList.contains('scale-0')){
            removeSideArrow('page-down')
        }
    } else { //if its going outside top, then add arrow top
        if (pageUpBtn.classList.contains('scale-0')){
            removeSideArrow('page-up')
        }
    }
    
    
    const nextPage = '#page'+(current)
    document.querySelector(nextPage).scrollIntoView({behavior: "smooth", block: "center", inline: "center"})
}

const pageUpHandler = () => {
    const current = currentPage()-1
    
    if (current < 1) {
        return
    }

    //if it hits top, remove arrow top
    if (current === 1) {
        if (!pageUpBtn.classList.contains('scale-0')){
            removeSideArrow('page-up')
        }
    } else { //if its going outside bottom, then add arrow bottom
        if (pageDownBtn.classList.contains('scale-0')){
            removeSideArrow('page-down')
        }
    }

    const prevPage = '#page'+(current)
    document.querySelector(prevPage).scrollIntoView({behavior: "smooth", block: "center", inline: "center"})
}

const currentPage = () => {
    const fromTop = window.pageYOffset

    let currentTop = 9999999
    let currentPage = 0

    for (var x = 0; x < elementsPageScrollTopLib.length; x++) {
        selisih = elementsPageScrollTopLib[x].top - fromTop
        if (selisih < 0) {
            selisih = selisih * -1
        }
        if (selisih < currentTop) {
            currentTop = selisih
            currentPage = elementsPageScrollTopLib[x].page
        } 
    }
    return currentPage
    
}

const removeSideArrow = (el) => {
    document.querySelector('#'+el).classList.toggle('scale-0')
}
// Sidebar ============================================