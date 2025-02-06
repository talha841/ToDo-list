let btn1 = document.querySelector('button')
let inp = document.querySelector('#text')
let ol = document.querySelector('ol')
// ol.style.listStyleType = 'upper-roman'


btn1.onclick=()=>{
      let li = document.createElement('li')
      if (inp.value == '') {
            alert('please enter something')
      } else {
            li.textContent = inp.value
            let btn2 = document.createElement('button')
            li.style.display = 'flex'
            li.style.justifyContent = 'center'
            li.style.marginTop = '10px'
      btn2.textContent = 'delete'
       btn2.style.marginLeft = '30px'
            li.appendChild(btn2)
            ol.appendChild(li)
           ol.style.listStyleType = 'upper-roman'
            btn2.addEventListener('click', ()=>{
                  li.remove()
                  
            })
            inp.value = ''
      }      
}
btn1.addEventListener('click', (e)=>{
      e.preventDefault()
})
