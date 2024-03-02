const paragraph = document.querySelector('pre')
const text = paragraph.innerText
const scrollbarWidth = 50
const maxFontSize = 30
const widthOfBrowser = document.documentElement.clientWidth - (scrollbarWidth + maxFontSize) // 브라우저 높이 - (스크롤바 너비 + 글자너비)
let isStarted = false // 스크롤시 애니메이션을 한번만 실행하는 플래그 변수 
let timer

function pickRandomNumber(n){
  return Math.floor(Math.random() * n)
}

function pickRandomLetter(text){ // 문자열에서 랜덤글자를 선택하는 함수
  const randomIndex = pickRandomNumber(text.length)
  return text[randomIndex]
}
function createLetter(text, left, top){ // 문자열, 위치(x, y) 좌표를 입력으로 받아서 글자를 생성하는 함수
  console.log('creating letter...')
  const span = document.createElement('span')
  span.className = 'letter'
  span.style.left = left + 'px'
  span.style.fontSize = pickRandomNumber(maxFontSize) + 'px' // 최대 폰트크기보다 작은 글자 생성
  span.innerText = pickRandomLetter(text) 
  if(top) span.style.top = top + 'px' 
  return span 
}

function displayLetter(){ // 랜덤글자를 생성하고 화면에 보여주기 위한 타이머 설정
  if(timer) clearTimeout(timer)

  // const randomLetter = pickRandomLetter(text) 
  const letter = createLetter(text , pickRandomNumber(widthOfBrowser)) // 랜덤한 위치에 랜덤한 글자 생성 (브라우저 너비를 벗어나지 않는 범위에서)
  document.body.appendChild(letter) // 화면에 랜덤글자 디스플레이 
  setInterval(function(){ // 생성한 랜덤글자를 Y축으로 이동시키기 위한 타이머 설정 
    letter.style.top = letter.offsetTop + 10 + 'px' // 생성한 랜덤글자를 아래방향으로 이동
    const cloneLetter = createLetter(text, letter.offsetLeft, letter.offsetTop) // 처음에 생성한 랜덤글자와 동일한 글자를 현재 Y측 위치에 복제
    document.body.appendChild(cloneLetter) // 복제된 랜덤글자를 화면에 디스플레이 
  }, 30)
  timer = setTimeout(displayLetter, 100)
}

function startTextAnimation(){
  if(!isStarted){
    paragraph.innerText = '' // 브라우저 화면 초기화 
    setTimeout(displayLetter, 100)

    isStarted = true 
  }
}

window.addEventListener('wheel', startTextAnimation)