const specialChars = "~!@#$%^&*_-+=`|\(){}[]:;\"'<>,.?/"
const numbers = '1234567890'
const alphabetsLower = 'abcdefghijklmnopqrstuvwxyz'
const alphabetsUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

const input = document.querySelector('input')
const button = document.querySelector('button')
const progressbar = document.querySelector('.progress-bar')

function login(e){
  console.log(input.value)
  const flags = {'sc': false, 'number': false, 'al': false, 'au': false}

  outer: for(let char of input.value){
    if(!flags['sc']){
      for(let sc of specialChars){
        if(char === sc){
          flags['sc'] = true 
          continue outer; 
        }
      }
    }
    if(!flags['number']){
      for(let n of numbers){
        if(char === n){
          flags['number'] = true 
          continue outer;
        }
      }
    }
    if(!flags['al']){
      for(let en of alphabetsLower){
        if(char === en){
          flags['al'] = true 
          continue outer;
        }
      }
    }
    if(!flags['au']){
      for(let en of alphabetsUpper){
        if(char === en){
          flags['au'] = true 
          continue outer;
        }
      }
    }
  }
  
  if(flags['sc'] && flags['number'] && flags['al'] && flags['au']){
    console.log('비밀번호 조건을 만족합니다.')
  }else{
    alert('비밀번호가 안전하지 않습니다.')
  }
  
  let count = 0
  for(let key in flags){
    if(flags[key]) count++
  }
  if(count === 1){
    progressbar.style.width = '200px'
    progressbar.style.backgroundColor = 'red'
  }else if(count === 2 || count === 3){
    progressbar.style.width = '400px'
    progressbar.style.backgroundColor = 'orange'
  }else if(count === 4){
    progressbar.style.width = '600px'
    progressbar.style.backgroundColor = 'green'
  }
}

button.addEventListener('click', login)