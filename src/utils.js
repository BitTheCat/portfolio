const scrollButton = window.document.getElementById('scrollButton')

window.onscroll = function () { scrollFunction() }

function scrollFunction () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollButton.style = 'block'
  } else {
    scrollButton.style.display = 'none'
  }
}

function topFunction () {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
}
