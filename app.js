;(function () {
  const button_inner = document.querySelector('.button_inner')
  const button_outer = document.querySelector('.button_outer')

  if (button_inner && button_outer) {
    button_inner.addEventListener('mouseenter', function (e) {
      const parentOffset = this.offsetParent

      const distanceX = e.pageX - parentOffset.offsetLeft
      const distanceY = e.pageY - parentOffset.offsetTop

      button_outer.style.left = `${distanceX}px`
      button_outer.style.top = `${distanceY}px`
      button_outer.classList.remove('collapse-circle')
      button_outer.classList.add('expand-circle')
    })
    button_inner.addEventListener('mouseleave', function (e) {
      const parentOffset = this.offsetParent

      const distanceX = e.pageX - parentOffset.offsetLeft
      const distanceY = e.pageY - parentOffset.offsetTop

      button_outer.style.left = `${distanceX}px`
      button_outer.style.top = `${distanceY}px`
      button_outer.classList.remove('expand-circle')
      button_outer.classList.add('collapse-circle')
    })
  }
})()
