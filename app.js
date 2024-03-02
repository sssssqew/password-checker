const text = document.querySelector('.text')
const main = document.querySelector('main')
const sections = main.querySelectorAll('section')


function showSlides(e){
  if(e.deltaY > 0){
    text.innerText = ''
    for(let section of sections){
      section.classList.add('show')
    }
  }
}
function expandSlide(e){
  console.log(e.target)
  if(e.target.className === 'show'){
    for(let section of sections){
      if(section !== e.target){
        section.style.width = '0'
        setTimeout(function(){
          section.innerHTML = ''
        }, 1000)
      }
    }
    e.target.classList.add('expand')
  }
}

main.addEventListener('click', expandSlide)
window.addEventListener('wheel', showSlides)