var logo = 0;

    setInterval(animacao, 800);

    function animacao() {

    if(logo<1) {

        logo++;
        document.getElementById('logo').style.opacity = '1';

    } else {

        logo = 0; 
        document.getElementById('logo').style.opacity = '0';

    }};

    $ = function(id) {
        return document.getElementById(id);
    }
      
      var show = function(id) {
          $(id).style.display ='block';
    }
      var hide = function(id) {
          $(id).style.display ='none';
    }

      var countDownDate = new Date("April 25, 2022 12:00:00").getTime();

      var x = setInterval(function() {
      
        var now = new Date().getTime();
      
        var distance = countDownDate - now;
      
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
        document.getElementById("dday").innerHTML = days + " ";
        document.getElementById("hhours").innerHTML = hours + " ";
        document.getElementById("mminutes").innerHTML = minutes + " ";
        document.getElementById("sseconds").innerHTML = seconds + " ";
      
        if (distance < 0) {
          clearInterval(x);
          document.getElementById("dday").innerHTML = "HIRING CODERDS";
    }
    }, 1000);