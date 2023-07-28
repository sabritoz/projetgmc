let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn')
window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    formClose.classList.remove('active')
}
searchBtn.addEventListener('click', ()=>{
    searchBtn.classList.toggle('fa-times')
    searchBar.classList.toggle('active');
})
menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});
formBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');
});
formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active');
});
videoBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
      document.querySelector('.controls .active').classList.remove('active');
      btn.classList.add('active');
      let src = btn.getAttribute('data-src');
      document.querySelector('#video-slider').src = src;

        
     
    });
});

// resonable work
// Function to handle booking button click
function handleBooking(event) {
    const package = event.target.dataset.package;
    alert(`You have booked the ${package} package. Have a great trip!`);
}

// Add event listener to all book buttons
const bookButtons = document.querySelectorAll('.book-btn');
bookButtons.forEach(button => {
    button.addEventListener('click', handleBooking);
});