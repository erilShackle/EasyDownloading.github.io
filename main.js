function docTitle(title) {
            document.title = 'EasyDown | ' + iframe.title;
        }

        var checkSB;

        function menuClose(icon) {
            icon.classList.toggle('close');
            if (window.innerWidth > 800) {
                sidebarDesktop();
            } else {
                sidebarMobile()
            }
        }

        function sidebarDesktop() {
            var sbar = document.getElementById('mainSidebar');
            var container = document.getElementById('main');
            if (sbar.style.width == "300px") {
                sbar.style.width = "0px";
                sbar.style.padding = "5px 0px";
                container.style.filter = "brightness(100%)blur(0px)";
                // container.style.marginLeft = '0px';    -> Off-canvas turned off
            } else {
                sbar.style.width = "300px";
                sbar.style.padding = "5px";
                container.style.filter = "brightness(50%)blur(0px)";
                // container.style.marginLeft = '310px'; -> Off-canvas turned off

            }

        }

        function sidebarMobile() {
            var sbar = document.getElementById('mainSidebar');
            var container = document.getElementById('main');
            if (sbar.style.width == "100%") {
                sbar.style.width = "0px";
                sbar.style.padding = "5px 0px";
                container.style.filter = "blur(0px)brightness(100%)";
                // container.style.marginLeft = '0px';    -> Off-canvas turned off
            } else {
                sbar.style.width = "100%";
                sbar.style.padding = "5px";
                container.style.filter = "blur(2px)brightness(100%)";
                // container.style.marginLeft = '310px'; -> Off-canvas turned off

            }
        }

        function page(reference) {
            var cont = document.getElementById('mainContent');var titl = document.getElementById('mainContent').title;
            cont.src = reference;
            sessionStorage.setItem('pageID', reference);
            docTitle(titl)
        }