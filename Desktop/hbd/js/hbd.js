function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }

  function myFunction_2() {
    var stod = document.getElementById("dots_2");
    var moreTextss = document.getElementById("more_2");
    var btnTextss = document.getElementById("myBtn_2");
  
    if (dots_2.style.display === "none") {
      dots_2.style.display = "inline";
      btnTextss.innerHTML = "Read more";
      moreTextss.style.display = "none";
    } else {
      dots_2.style.display = "none";
      btnTextss.innerHTML = "Read less";
      moreTextss.style.display = "inline";
    }
  }

  function myFunction_3() {
    var stodss = document.getElementById("dots_3");
    var moreTextsszz = document.getElementById("more_3");
    var btnTextsszz = document.getElementById("myBtn_3");
  
    if (dots_3.style.display === "none") {
      dots_3.style.display = "inline";
      btnTextsszz.innerHTML = "Read more";
      moreTextsszz.style.display = "none";
    } else {
      dots_3.style.display = "none";
      btnTextsszz.innerHTML = "Read less";
      moreTextsszz.style.display = "inline";
    }
  }