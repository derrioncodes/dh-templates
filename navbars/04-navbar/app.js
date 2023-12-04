const openMobileBtn = document.querySelector('.open-mobile-menu-btn');
const closeMobileBtn = document.querySelector('.close-mobile-menu-btn');
const mobileContainer = document.querySelector('.mobile-nav_container');

openMobileBtn.addEventListener('click', () => {
 mobileContainer.classList.add('active');
})


closeMobileBtn.addEventListener('click', () => {
    mobileContainer.classList.remove('active');
})



// START OF SUBMENU
import sublinks from './data.js';
const headerContainer = document.querySelector('header');
const hero = document.querySelector('.hero');
const submenu = document.querySelector('.submenu');
const menuLinkBtns = [...document.querySelectorAll('.menu-links')];

menuLinkBtns.forEach((btn) => {
    btn.addEventListener('mouseover', (e) => {
        const page = e.currentTarget.textContent;
        const tempPage = sublinks.find((link) => link.page === page);
        

        if(tempPage.hasSublinks == true){
            submenu.classList.add('show');  
        } else if(tempPage.hasSublinks == false){
            submenu.classList.remove('show');
        }
    })
})





headerContainer.addEventListener('mouseover', function (e) {
    if (!e.target.classList.contains('menu-links')) {
      submenu.classList.remove('show');
    }
});

hero.addEventListener('mouseover', function (e) {
    if (!e.target.classList.contains('menu-links')) {
      submenu.classList.remove('show');
    }
});

window.addEventListener("resize", function(event) {
    if(document.body.clientWidth > 900 ){
        mobileContainer.classList.remove('active');
    }
    if(document.body.clientWidth < 900 ){
        submenu.classList.remove('show');
    }
    // console.log(document.body.clientWidth + ' wide by ' + document.body.clientHeight+' high');
})