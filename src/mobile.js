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
    const addClass = ['justify-center', 'gap-8', 'top-28']
    const delClass = ['justify-between', 'h-screen', 'top-0']
    const side = document.querySelector('#side-fixed')
    side.classList.remove(...delClass)
    side.classList.add(...addClass)

    document.querySelector('#sidenav-dot').classList.remove('flex-grow')
    document.querySelector('#page-down').children[0].classList.add('-mb-20')
    document.querySelector('#page-up').children[0].classList.add('mb-4')
}

//run if its mobile
if (detectMob()) {
    alert('using Mobile view')
    initMobileView_sidenav()
}