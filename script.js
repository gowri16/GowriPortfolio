var typed = new Typed(".typing",{
    strings:["","UI/UX Designer","Developer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true 
  })
  
  let menuIcon = document.querySelector('#menu-icon');
  let navbar = document.querySelector('.navbar');
  
  menuIcon.onclick = () =>{
   menuIcon.classList.toggle('bx-x');
   navbar.classList.toggle('active');
  }
  
  let sections = document.querySelectorAll('section');
  let navLinks = document.querySelectorAll('header nav a');
  
  window.onscroll = () =>{
   sections.forEach(sec => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');
  
      if(top >= offset && top < offset + height){
         navLinks.forEach(links =>{
            links.classList.remove('active');
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
         });
      };
   });
   
  let header = document.querySelector('.header');
  
  header.classList.toggle('sticky', window.scrollY >100);
  
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
  } 
  const modalViews = document.querySelectorAll('.services-modal'),
      modelBtns = document.querySelectorAll('.services-button'),
      modalCloses = document.querySelectorAll('.services-modal-close')
  
  let modal = function(modalClick){
   modalViews[modalClick].classList.add('active-modal')
  }     
  
  modelBtns.forEach((modelBtn, i) => {
   modelBtn.addEventListener('click', () =>{ 
      modal(i)
   })
  })
  
  modalCloses.forEach((modalClose) => {
   modalClose.addEventListener("click", () => {
      modalViews.forEach((modalView) => {
         modalView.classList.remove('active-modal')
      })
   })
  })
  
  let mixerportfolio = mixitup('.work-container', {
   selectors:{
      target: '.work-card'
   },
   animation:{
      duration: 300
   }
  });
  
  const linkWork = document.querySelectorAll('.work-item')
  
  function activeWork(){
   linkWork.forEach(x=> x.classList.remove('active-work'))
   this.classList.add('active-work')
  }
  
  linkWork.forEach(x=> x.addEventListener("click", activeWork))
  
  document.addEventListener("click", (e) =>{
   if(e.target.classList.contains("work-button")){
      togglePortfolioPopup();
      portfolioItemDetails(e.target.parentElement);
   }
  })
  
  function togglePortfolioPopup(){
   document.querySelector(".portfolio-popup").classList.toggle("open");
  }
  
  document.querySelector(".portfolio-popup-close").addEventListener("click", togglePortfolioPopup)
  
  function portfolioItemDetails(portfolioItem){
   document.querySelector(".pp-thumbnail img").src = portfolioItem.querySelector(".work-img").src;
   document.querySelector(".portfolio-popup-subtitle span").innerHTML = portfolioItem.querySelector(".work-title").innerHTML;
   document.querySelector(".portfolio-popup-body").innerHTML = portfolioItem.querySelector(".portfolio-item-details").innerHTML;
  }
  
  let darkModeIcon = document.querySelector('#darkMode-icon');
  
  darkModeIcon.onclick = () =>{
   darkModeIcon.classList.toggle('bx-sun');
   document.body.classList.toggle('dark-mode');
  }
  
  /*ScrollReveal({ 
   reset: true,
   distance: '80px',
   duration: 2000,
   delay: 200
  });
  
  ScrollReveal().reveal('.home-content h1, .home-content h3, .home-content p, .social-icons, .btn-group,  .heading', { origin: 'top'});
  ScrollReveal().reveal('.home-img img, .skills-container, .contact-container',  { origin: 'bottom'});
  ScrollReveal().reveal('.about-img img', { origin: 'left'});
  ScrollReveal().reveal('.about-content', { origin: 'right'});*/