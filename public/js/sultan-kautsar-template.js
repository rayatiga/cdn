let nav = document.getElementsByTagName('nav')[0]
if (nav) {
  let active = ' active'
  let aria = ' aria-current="page"'
  let path = window.location.pathname
  nav.outerHTML = `<nav class="navbar navbar-expand-lg bg-body border-bottom fixed-top">
                      <div class="container py-2">
                        <a class="navbar-brand fw-bold" href="/index.html">Sultan Kautsar</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                          <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                          <ul class="navbar-nav">
                            <li class="nav-item"><a class="nav-link${path == '/index.html' ? (state = active) : (state = '')}"${path == '/index.html' ? (state = aria) : (state = '')} href="/index.html">Home</a></li>
                            <li class="nav-item"><a class="nav-link${path == '/achievement.html' ? (state = active) : (state = '')}"${path == '/achievement.html' ? (state = aria) : (state = '')} href="/achievement.html">Achievement</a></li>
                            <li class="nav-item"><a class="nav-link${path == '/link.html' ? (state = active) : (state = '')}"${path == '/link.html' ? (state = aria) : (state = '')} href="/link.html">Link</a></li>
                            <li class="nav-item"><a class="nav-link${path == '/contact.html' ? (state = active) : (state = '')}"${path == '/contact.html' ? (state = aria) : (state = '')} href="/contact.html">Contact</a></li>
                            <li class="nav-item"><a class="nav-link${path == '/project.html' ? (state = active) : (state = '')}"${path == '/project.html' ? (state = aria) : (state = '')} href="/project.html">Project</a></li>
                            <li class="nav-item d-lg-none"><a class="nav-link${path == '/resume.html' ? (state = active) : (state = '')}"${path == '/resume.html' ? (state = aria) : (state = '')} href="/resume.html">Resume</a></li>
                            <li class="nav-item d-none d-lg-block"><a href="/resume.html" class="btn btn-dark border ms-2${path == '/resume.html' ? (state = active) : (state = '')}"${path == '/resume.html' ? (state = aria) : (state = '')}>Resume</a></li>
                          </ul>
                        </div>
                      </div>
                    </nav>`
}
let footer = document.getElementsByTagName('footer')[0]
if (footer) {
  footer.outerHTML = `<footer>
                        <div class="d-flex justify-content-center align-items-center bg-body border-top h-73px">
                          <p class="text-center m-0">Copyright © Sultan Kautsar 2020-2023. All Rights Reserved.</p>
                        </div>
                      </footer>`
}
