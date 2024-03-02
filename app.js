const main = document.querySelector('main')
const sections = main.querySelectorAll('section')
const clientHeight = document.documentElement.clientHeight // 브라우저 높이
const scrollHeight = Math.max(
  document.body.scrollHeight, document.documentElement.scrollHeight,
  document.body.offsetHeight, document.documentElement.offsetHeight,
  document.body.clientHeight, document.documentElement.clientHeight
)
let index = 0, timer

// 1초동안 이벤트 금지하기 (자연스러운 슬라이드 효과 연출)
function trotthling(handler, e){
  if(!timer){
    timer = setTimeout(function(){
      handler(e)
      timer = null 
    }, 1000)
  }
}

function changeSlide(e){
  console.log('scroll', e.deltaY)
  
  if(e.deltaY > 0){ // 스크롤 내린 경우
    index++
  }
  if(index < sections.length){ // 섹션 이동하기
    main.style.marginLeft = -1 * index * 100 + 'vw'
  }
  
}

document.addEventListener('wheel', (e) => trotthling(changeSlide, e))