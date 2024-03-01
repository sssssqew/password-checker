const main = document.querySelector('main')
const sections = main.querySelectorAll('section')

function slideSection(e){
  console.log(e.target)
  if(e.target.innerText === '<'){
    main.style.marginLeft = '-100vw'
  }else if(e.target.innerText === '>'){
    main.style.marginLeft = '0'
  }
}


main.addEventListener('click', slideSection)