function detectMob() {
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];
    
    return toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem);
    });
}

const initMobileView_sidenav = () => {
    const side = document.querySelector('#side-fixed')
    side.classList.remove('justify-between')
    side.classList.remove('h-screen')
    side.classList.add('justify-center')
    side.classList.add('gap-8')

    document.querySelector('#sidenav-dot').classList.remove('flex-grow')
    console.log(document.querySelector('#page-down').children[0])
    document.querySelector('#page-down').children[0].classList.add('-mb-20')
    document.querySelector('#page-up').children[0].classList.add('mb-4')
}

//run if its mobile
if (!detectMob()) {
    alert('using Mobile view')
    initMobileView_sidenav()
}