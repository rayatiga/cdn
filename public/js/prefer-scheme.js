document.getElementById('url').innerHTML = window.location.origin + '/'
let prefer = window.matchMedia('(prefers-color-scheme: dark)').matches
const darkScheme = () => {
  document.body.style.color = '#ffffff'
  document.body.style.backgroundColor = '#000000'
  document.getElementsByTagName('hr')[0].style.borderTopColor = '#ffffff'
}
const lightScheme = () => {
  document.body.style.color = '#000000'
  document.body.style.backgroundColor = '#ffffff'
  document.getElementsByTagName('hr')[0].style.borderTopColor = '#000000'
}
if (prefer) {
  darkScheme()
} else {
  lightScheme()
}
