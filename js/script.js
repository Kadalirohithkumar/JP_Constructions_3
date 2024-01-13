const navToggler = document.querySelector(".nav-toggler");
const nav = document.querySelector(".nav");

navToggler.addEventListener("click", navToggle);

function navToggle() {
    navToggler.classList.toggle("active");
    nav.classList.toggle("open");
}

// Close navigation when a link is clicked
const navLinks = document.querySelectorAll(".nav ul li a");
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navToggler.classList.remove("active");
        nav.classList.remove("open");
    });
});

function changeBg()
{
  var Top_sec = document.getElementById('nav-top-section');
  var navbar = document.getElementById('Navigation_bar');
  var scrollValue = window.scrollY;
  console.log(scrollValue);
  var page_width = window.innerWidth;
  console.log(page_width);
  if(scrollValue < 70){
    navbar.classList.remove('bgcolornav');
    if(page_width >= 768){
        Top_sec.style.display = 'flex';
        Top_sec.setAttribute('src','./img');
    }
  }
  else{
    navbar.classList.add('bgcolornav');
    Top_sec.style.display = 'none';
  }
  
}

window.addEventListener('scroll', changeBg);



//------------Projects counter----------->
const counts = document.querySelectorAll('.count')
const speed = 97

counts.forEach((counter) => {
    function upDate(){
        const target = Number(counter.getAttribute('data-target'))
        const count = Number(counter.innerText)
        const inc = target / speed        
        if(count < target){
            counter.innerText = Math.floor(inc + count) 
            setTimeout(upDate, 15)
        }else{
            counter.innerText = target
        }
    }
    upDate()
}) 

