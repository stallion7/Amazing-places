/* alert("Toto pochází z externího souboru"); */
/* var nadpis - starší deklarace proměnné v JS */
// proměnná v nových verzích JS
let nadpis = document.getElementById('nadpis');
nadpis.addEventListener('click', function(){
nadpis.innerHTML = 'Užasná místa';
nadpis.classList.add('text-center');
}); 

let bomba = document.getElementById('canyon');
canyon.addEventListener('click', function(){
canyon.innerText = 'antilopí kaňon';
});

// let footer = document.getElementById('footer');
// footer.addEventListener('mouseover', function(){
    
let img = document.getElementById('img');
img.addEventListener('click', function(){
img.src = 'js/img/waterfall_n.jpg';
});

let fall = document.getElementById('fall');
fall.addEventListener('click', function(){
fall.innerText = 'vodopád prodané země';
});

let canyon_img = document.getElementById('canyon_img');
canyon_img.addEventListener('click', function(){
canyon_img.src = 'js/img/canyon_l.jpg';
});

let salt = document.getElementById('salt');
salt.addEventListener('click', function(){
salt.src = 'js/img/salt_night.jpg';
});

let salt_nadpis = document.getElementById('salt_nadpis');
salt_nadpis.addEventListener('click', function(){
salt_nadpis.innerText = 'salar de tunupa';
});

let lake = document.getElementById('lake');
lake.addEventListener('click', function(){
lake.src = 'js/img/lake_n.jpg';
});
    
let jezero = document.getElementById('jezero');
jezero.addEventListener('click', function(){
jezero.innerText = 'morénové jezero';
});

const options = {
  bottom: '13px', // default: '32px'
  right: '32px', // default: '32px'
  left: 'unset', // default: 'unset'
  time: '0.3s', // default: '0.3s'
  mixColor: '#fff', // default: '#fff'
  backgroundColor: '#fff',  // default: '#fff'
  buttonColorDark: '#100f2c',  // default: '#100f2c'
  buttonColorLight: '#fff', // default: '#fff'
  saveInCookies: true, // default: true,
  label: '🌓', // default: ''
  autoMatchOsTheme: true // default: true
}

const darkmode = new Darkmode(options);
darkmode.showWidget();

  function myFunction() {
    let dots = document.getElementById("dots");
    let moreText = document.getElementById("more");
    let btnText = document.getElementById("myBtn");
  
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
  function myFunction2() {
    let dots2 = document.getElementById("dots2");
    let moreText2 = document.getElementById("more2");
    let btnText2 = document.getElementById("myBtn2");
  
    if (dots2.style.display === "none") {
      dots2.style.display = "inline";
      btnText2.innerHTML = "Read more";
      moreText2.style.display = "none";
    } else {
      dots2.style.display = "none";
      btnText2.innerHTML = "Read less";
      moreText2.style.display = "inline";
    }
  }
  function myFunction3() {
    let dots3 = document.getElementById("dots3");
    let moreText3 = document.getElementById("more3");
    let btnText3 = document.getElementById("myBtn3");
  
    if (dots3.style.display === "none") {
      dots3.style.display = "inline";
      btnText3.innerHTML = "Read more";
      moreText3.style.display = "none";
    } else {
      dots3.style.display = "none";
      btnText3.innerHTML = "Read less";
      moreText3.style.display = "inline";
    }
  }
  function myFunction4() {
    let dots4 = document.getElementById("dots4");
    let moreText4 = document.getElementById("more4");
    let btnText4 = document.getElementById("myBtn4");
  
    if (dots4.style.display === "none") {
      dots4.style.display = "inline";
      btnText4.innerHTML = "Read more";
      moreText4.style.display = "none";
    } else {
      dots4.style.display = "none";
      btnText4.innerHTML = "Read less";
      moreText4.style.display = "inline";
    }
  }