const observer = new IntersectionObserver((entries) => {
   for(const e of entries) {
     const button = document.getElementById('toTop')
      if(e.isIntersecting) {   
        button.classList.remove('view');
      } else {     
        button.classList.add('view');
      }
    }
  });
  observer.observe(document.getElementById('first'))