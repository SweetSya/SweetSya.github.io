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
    side.classList.remove(['justify-between', 'h-screen'])
    side.classList.add('justify-center')

    document.querySelector('#sidenav-dot').classList.remvoe('flex-grow')
    document.querySelector('#page-down').children[0].classList.add('-mb-10')
}

//run if its mobile
if (detectMob()) {
    alert('using Mobile view')
    initMobileView_sidenav()
}