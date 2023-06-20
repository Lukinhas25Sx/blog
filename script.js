/* eslint-disable no-undef */
document.addEventListener('DOMContentLoaded', function () {
    const navbarLinks = document.querySelectorAll('.navbar a');

    navbarLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            navbarLinks.forEach(function (navLink) {
                navLink.classList.remove('active');
            });
            this.classList.add('active');
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    var btnTopo = document.getElementById('btnTopo');

    window.onscroll = function () {
        mostrarOcultarBotao();
    };

    function mostrarOcultarBotao() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            btnTopo.style.display = 'block';
        } else {
            btnTopo.style.display = 'none';
        }
    }

    btnTopo.addEventListener('click', function () {
        scrollToTop(1000); // Valor em milissegundos para controlar a velocidade da rolagem
    });

    function scrollToTop(scrollDuration) {
        var scrollStep = -window.scrollY / (scrollDuration / 15);
        var scrollInterval = setInterval(function () {
            if (window.scrollY !== 0) {
                window.scrollBy(0, scrollStep);
            } else {
                clearInterval(scrollInterval);
            }
        }, 15);
    }
});

document.addEventListener('DOMContentLoaded', function () {
    var titulo = document.querySelector('.titulo');

    function verificarPosicaoScroll() {
        if (window.pageYOffset === 0) {
            titulo.classList.add('topo');
        } else {
            titulo.classList.remove('topo');
        }
    }

    window.addEventListener('scroll', verificarPosicaoScroll);
});
