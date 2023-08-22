let nav = document.getElementsByTagName('nav')[0]
if (nav) {
  let active = ' active'
  let aria = ' aria-current="page"'
  let path = window.location.pathname
  nav.outerHTML = `<nav class="navbar navbar-expand-lg bg-body border-bottom fixed-top">
                      <div class="container py-2">
                        <a class="navbar-brand fw-bold" href="/old/">Sultan Kautsar</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                          <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                          <ul class="navbar-nav">
                            <li class="nav-item"><a class="nav-link${path == '/old/' ? (state = active) : (state = '')}"${path == '/old/' ? (state = aria) : (state = '')} href="/old/">Home</a></li>
                            <li class="nav-item"><a class="nav-link${path == '/old/achievement.html' ? (state = active) : (state = '')}"${path == '/old/achievement.html' ? (state = aria) : (state = '')} href="/old/achievement.html">Achievement</a></li>
                            <li class="nav-item"><a class="nav-link${path == '/old/link.html' ? (state = active) : (state = '')}"${path == '/old/link.html' ? (state = aria) : (state = '')} href="/old/link.html">Link</a></li>
                            <li class="nav-item"><a class="nav-link${path == '/old/contact.html' ? (state = active) : (state = '')}"${path == '/old/contact.html' ? (state = aria) : (state = '')} href="/old/contact.html">Contact</a></li>
                            <li class="nav-item"><a class="nav-link${path == '/old/project.html' ? (state = active) : (state = '')}"${path == '/old/project.html' ? (state = aria) : (state = '')} href="/old/project.html">Project</a></li>
                            <li class="nav-item d-lg-none"><a class="nav-link${path == '/old/resume.html' ? (state = active) : (state = '')}"${path == '/old/resume.html' ? (state = aria) : (state = '')} href="/old/resume.html">Resume</a></li>
                            <li class="nav-item d-none d-lg-block"><a href="/old/resume.html" class="btn btn-dark border ms-2${path == '/old/resume.html' ? (state = active) : (state = '')}"${path == '/old/resume.html' ? (state = aria) : (state = '')}>Resume</a></li>
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
