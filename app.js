// menu button for navbar
const bars = document.querySelector('#bars');
const closeBars = document.querySelector('#close-bars')
const navItems = document.querySelector('#navbar');

bars.addEventListener('click', function(){
   navItems.classList.add('showNav');
   bars.style.display = 'none';
   closeBars.style.display = 'inline-block';
})

closeBars.addEventListener('click', function(){
   navItems.classList.remove('showNav');
   bars.style.display = 'inline-block';
   closeBars.style.display = 'none';
});



// active class for navbar
const active = document.querySelectorAll('.nav-link');

active.forEach(aktive =>{
   aktive.addEventListener('click', function(){
      document.querySelector('.active')?.classList.remove('active');

      aktive.classList.add('active');
   })
})



// faqs toggle
const faq = document.querySelectorAll('.faq');

faq.forEach( faqs => {
   faqs.addEventListener('click', function() {
      faqs.classList.toggle('open');

      const icon = faqs.querySelector('.faq-icon i');
      if (icon.className === 'uil uil-plus') {
         icon.className = 'uil uil-minus';
      } else {
         icon.className = 'uil uil-plus';
      }
   })
})


// date
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();