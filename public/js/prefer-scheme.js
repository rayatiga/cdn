document.getElementById('url').innerHTML = window.location.origin + '/'
let prefer = window.matchMedia('(prefers-color-scheme: dark)').matches
const darkScheme = () => {
  document.body.style.color = '#f8f9fa'
  document.body.style.backgroundColor = '#181b1f'
  document.getElementsByTagName('hr')[0].style.borderTopColor = '#f8f9fa'
}
const lightScheme = () => {
  document.body.style.color = '#181b1f'
  document.body.style.backgroundColor = '#f8f9fa'
  document.getElementsByTagName('hr')[0].style.borderTopColor = '#181b1f'
}
if (prefer) {
  darkScheme()
} else {
  lightScheme()
}
