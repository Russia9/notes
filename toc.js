// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><a href="docker/index.html"><strong aria-hidden="true">1.</strong> Docker</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="docker/dockerfile/index.html"><strong aria-hidden="true">1.1.</strong> Dockerfile</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="docker/dockerfile/golang.html"><strong aria-hidden="true">1.1.1.</strong> Golang</a></li><li class="chapter-item expanded "><a href="docker/dockerfile/node.html"><strong aria-hidden="true">1.1.2.</strong> NodeJS</a></li><li class="chapter-item expanded "><a href="docker/dockerfile/python.html"><strong aria-hidden="true">1.1.3.</strong> Python</a></li><li class="chapter-item expanded "><a href="docker/dockerfile/flutter.html"><strong aria-hidden="true">1.1.4.</strong> Flutter</a></li></ol></li><li class="chapter-item expanded "><a href="docker/docker-compose/index.html"><strong aria-hidden="true">1.2.</strong> Docker Compose</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="docker/docker-compose/postgres.html"><strong aria-hidden="true">1.2.1.</strong> PostgreSQL</a></li><li class="chapter-item expanded "><a href="docker/docker-compose/mongo.html"><strong aria-hidden="true">1.2.2.</strong> MongoDB</a></li><li class="chapter-item expanded "><a href="docker/docker-compose/redis.html"><strong aria-hidden="true">1.2.3.</strong> Redis</a></li><li class="chapter-item expanded "><a href="docker/docker-compose/gitlab.html"><strong aria-hidden="true">1.2.4.</strong> Gitlab Runner</a></li><li class="chapter-item expanded "><a href="docker/docker-compose/drone.html"><strong aria-hidden="true">1.2.5.</strong> Drone CI</a></li></ol></li></ol></li><li class="chapter-item expanded "><a href="gitlab/index.html"><strong aria-hidden="true">2.</strong> GitLab CI</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="gitlab/docker.html"><strong aria-hidden="true">2.1.</strong> Build Docker Image</a></li><li class="chapter-item expanded "><a href="gitlab/ssh.html"><strong aria-hidden="true">2.2.</strong> Run SSH command</a></li><li class="chapter-item expanded "><a href="gitlab/helm.html"><strong aria-hidden="true">2.3.</strong> Deploy to K8s via Helm</a></li></ol></li><li class="chapter-item expanded "><a href="drone/index.html"><strong aria-hidden="true">3.</strong> Drone CI</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="drone/docker.html"><strong aria-hidden="true">3.1.</strong> Build Docker Image</a></li><li class="chapter-item expanded "><a href="drone/ssh.html"><strong aria-hidden="true">3.2.</strong> Run SSH command</a></li><li class="chapter-item expanded "><a href="drone/ansible.html"><strong aria-hidden="true">3.3.</strong> Run Ansible playbook</a></li></ol></li><li class="chapter-item expanded "><a href="bitbucket/index.html"><strong aria-hidden="true">4.</strong> Bitbucket</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="bitbucket/ssh.html"><strong aria-hidden="true">4.1.</strong> Run SSH command</a></li></ol></li><li class="chapter-item expanded "><a href="github/index.html"><strong aria-hidden="true">5.</strong> GitHub Actions</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="github/docker.html"><strong aria-hidden="true">5.1.</strong> Build Docker Image</a></li><li class="chapter-item expanded "><a href="github/ssh.html"><strong aria-hidden="true">5.2.</strong> Run SSH command</a></li><li class="chapter-item expanded "><a href="github/pages.html"><strong aria-hidden="true">5.3.</strong> Deploy to Pages</a></li></ol></li><li class="chapter-item expanded "><a href="miscellaneous/index.html"><strong aria-hidden="true">6.</strong> Miscellaneous</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="miscellaneous/bitrix-password.html"><strong aria-hidden="true">6.1.</strong> Bitrix admin without password</a></li></ol></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString();
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);