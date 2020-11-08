function includes(to,from) {
    var theFrom = from.toLowerCase();
    switch (theFrom) {
        case 'header':
        var input = iheader;
            break;
        case 'sidebar':
        var input = isidebar;
            break;
        case 'footer':
        var input = ifooter;
            break;
        default:
        var input = 'Page Not Found!';
            break;
    }
    $(to).prepend(input);

}

var iheader = `
    <!--MenuIcon--> 
        <span id="menuIcon" onclick="menuClose(this)"><div class="bar1"></div><div class="bar2"></div><div class="bar3"></div></span>
        <!--Logo-->
        <h1 id="logo">EasyDownloading</h1>
        <!-- Main Navbar -->
        <nav id="mainMenu">
            <div class="menu"><button onclick="page('Wpages/news.html');include()">Novidades</button>
            </div>
            <div class="menu mdrop"><button onclick="page('Wpages/flexw3page.html')">Downloads</button><input class="Obtn" type="button" name="OpenMenu">
                <nav class="submenu">
                    <a href="#pes6">Pes6</a>
                    <a href="#slide">Games</a>
                </nav>
            </div>
            <div class="menu"><button onclick="page('Wpages/web3page.html')">Sobre Nós</button>
            </div>
            <div class="menu mdrop"><button onclick="page('Wpages/examples.html')">Mais</button><input class="Obtn" type="button" name="Mais">
                <nav class="submenu">
                    <a href="#" onclick="page('Wpages/slide.html')">Slide</a>
                    <a href="#" onclick="page('Wpages/teste.html')">Teste</a>
                    <a href="#" onclick="page('Wpages/faq.htm')">FAQ</a>
                </nav>
            </div>
            <div class="menu"><button onclick="page('Wpages/pes6.html')">PES6</button>
            </div>
        </nav>
        <!-- Social -->
        <div id="social">
            <a href="https://web.facebook.com/groups/easydown.pes6" target="_blank" title="Nosso grupo no Facebook">
                <img class="media" src="ico/facebook-square.svg" alt="Facebook" align="center" accesskey="F">
            </a>
        </div>
        <!-- Dark Mode -->
        <div id="darkmode" title="Mudar Tema" onclick="darkMode('#light')" draggble="false"> 
            <img id="light" src="ico/light.svg" alt="&#128262;"> 
            <span>Light Mode</span> 
        </div> 

`// END OF

var ifooter = `
    <div class='fLogo'> 
    <img src='img/logo.jpg' alt='EasyDownloading' name='EasyDownloading'> 
    </div> 
    <div class='fText'> 
    EasyDownloading é um mini-projeto desenvolido por Eril Tavares ® 2019-2020 EasyDownloading. All rights reserved. 
    </div> 
    <div class='fContact'> 
    <span class='caption'> 
    Contact me 
    </span> 
    <span class='links'> 
    <a href='mailto:erilandocarvalho@gmail.com' style='background-image:url(ico/mail.svg);' title='Gmail'>Gmail</a> 
     <a href='' style='background-image:url(ico/ssenger.svg);' title='Messenger'>Messenger</a> 
    </span> 
    </div> 

`// END OF

var isidebar = `
        <div class="topsidebar" style="position: relative;">
            <form action="http://www.google.com/" target="_blank" method="GET">
                <input class="searchTxt" name="q" type="seacrh" placeholder="Pesquisar..." autocomplete="true">
                <button class="searchBtn" type="submit" autofocus="true"></button>
            </form>
        </div>

`// END OF