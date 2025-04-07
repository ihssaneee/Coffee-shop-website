document.addEventListener('DOMContentLoaded',function(){
    const mobileToggle=document.querySelector('.mobile-toggle');
    const navigationLinks=document.querySelector('nav');
    mobileToggle.addEventListener('click',function(){
        if(navigationLinks.style.display==='block'){
            navigationLinks.style.display='none';
           
        }
        else{
            navigationLinks.style.display='block';
        }
    });


    var slideIndex=0;
    showSlides();
    function showSlides(){
        var slides=document.getElementsByClassName('mySlides');
        for (let i=0;i<slides.length;i++){
            slides[i].style.display='none';
            
        }
        slideIndex++;
        if(slideIndex>slides.length){
            slideIndex=1;
        }
        slides[slideIndex-1].style.display='block';
        setTimeout(showSlides,3000);

    };

    const aboutSection = document.getElementById('about');
    const featuredSection = document.getElementById('featured');
    const gallerySection = document.getElementById('mygallery');
    
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-on-scroll');
        }
      });
    }, {
      threshold: 0,
    });
    
    observer.observe(aboutSection);
    observer.observe(featuredSection);
    observer.observe(gallerySection);
}
);
console.log('script is working');