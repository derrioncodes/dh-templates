const openMobileBtn = document.querySelector('.open-mobile-menu-btn');
const closeMobileBtn = document.querySelector('.close-mobile-menu-btn');
const mobileContainer = document.querySelector('.mobile-nav_container');

openMobileBtn.addEventListener('click', () => {
 mobileContainer.classList.add('active');
})


closeMobileBtn.addEventListener('click', () => {
    mobileContainer.classList.remove('active');
})

window.addEventListener("resize", function(event) {
    if(document.body.clientWidth > 600 ){
        mobileContainer.classList.remove('active');
    }
    // console.log(document.body.clientWidth + ' wide by ' + document.body.clientHeight+' high');
})