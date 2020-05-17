var map;
function initMap() {
    const loc={lat:26.218287,lng:78.182831};
    map = new google.maps.Map(document.querySelector('.map'), {
      center: loc,
      zoom: 14
    });
    const marker=new google.maps.Marker({position:loc,map:map});
  }
  window.addEventListener('scroll',function(){
      if(window.scrollY > 150){
        this.document.querySelector('#navbar').style.opacity= 0.9;
      }
      else{
        this.document.querySelector('#navbar').style.opacity = 1;
      }
  });

  $('#navbar a').on('click',function(event){
      if(this.hash !==''){
          event.preventDefault();
          const hash =this.hash;
          $('html,body').animate(
              {
                  scrollTop: $(hash).offset().top - 100
              },
              800
          );
      }
  });