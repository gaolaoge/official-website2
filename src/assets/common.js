class common {
  constructor(dom) {
    this.dom = dom
    this.domText = dom.innerText
    this.color = window.getComputedStyle(dom).color
    this.addHelpDom()
  }
  addHelpDom(){
    let newDom = document.createElement("DIV"),
      newTex = document.createTextNode(this.domText),
      newFatherDom = document.createElement("DIV"),
      oldFatherDom = this.dom.parentNode
    newFatherDom.style.overflow = 'hidden'
    newFatherDom.style.display = 'inline-block'
    newFatherDom.style.width = '100px'
    newFatherDom.style.verticalAlign = 'middle'
    newFatherDom.style.height = window.getComputedStyle(this.dom).height
    newFatherDom.classList.add('dad')
    newFatherDom.append(this.dom)
    oldFatherDom.append(newFatherDom)
    newDom.style.position = 'absolute'
    newDom.style.top = '-' + window.getComputedStyle(this.dom).height
    newDom.style.width = window.getComputedStyle(this.dom).width
    // newDom.style.fontWeight = '700'
    newDom.style.color = this.color
    newDom.appendChild(newTex)
    this.dom.style.position = 'relative'
    this.dom.classList.add('btnnn')
    this.dom.style.color = this.color
    this.dom.append(newDom)
    newFatherDom.addEventListener('mouseenter',() => {
      this.dom.classList.add('active')
    })
    newFatherDom.addEventListener('mouseleave',() => {
      this.dom.classList.remove('active')
    })
  }
}

// 时间戳
function computeDate(time) {
  var date = new Date()
  date.setTime(time)
  var y = date.getFullYear(),
      m = date.getMonth() + 1
  m = m < 10 ? ('0' + m) : m
  var d = date.getDate()
  d = d < 10 ? ('0' + d) : d
  var h = date.getHours()
  h = h < 10 ? ('0' + h) : h
  var minute = date.getMinutes(),
    second = date.getSeconds()
  minute = minute < 10 ? ('0' + minute) : minute
  second = second < 10 ? ('0' + second) : second

  return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second
}

export {
  computeDate,
  common
}
