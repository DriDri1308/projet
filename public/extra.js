document.addEventListener('DOMContentLoaded', function() {
    const images = [
        "/images/foto11.jpg",
        "/images/foto53.jpg",
        "/images/fot18.jpg",
        "/images/foto3.jpg",
        "/images/foto8.jpeg",
        "/images/foto15.jpg",
        "/images/foto20.jpg",
        "/images/foto21.jpg",
        "/images/foto22.jpg",
        "/images/foto23.jpg",
        "/images/foto24.jpg",
        "/images/foto27.jpg",
        "/images/foto30.jpg",
        "/images/foto31.jpg",
        "/images/foto32.jpg",
        "/images/foto33.jpg",
        "/images/foto35.jpg",
        "/images/foto38.jpg",
        "/images/foto39.jpg",
        "/images/foto40.jpg",
        "/images/foto51.jpg",
        "/images/foto52.jpg",
        "/images/foto55.jpg",
        "/images/foto57.jpg",
        "/images/foto58.jpg",
        "/images/foto59.jpg",
        "/images/foto61.jpg",
        "/images/foto%202.jpg",
        "/images/GAME.png",
        "/images/game_of_thrones_beric_dondarrion_the_long_night.0.jpg",
        "/images/GoT-4k.jpg",
        "/images/images.jpeg",
        "/images/images (1).jpeg",
        "/images/images (2).jpeg",
        "/images/images (3).jpeg",
        "/images/images (4).jpeg",
        "/images/images (5).jpeg",
        "/images/images (6).jpeg",
        "/images/images (7).jpeg",
        "/images/unnamed.jpg",
        "/images/0e95bb0257e408483e86610b192577e1.jpeg",
        "/images/91eXHA-8K9L._AC_UF1000,1000_QL80_.jpg",
        "/images/775df46c87df59eca37b44299a80604f.jpg",
        "/images/5999e1064dcf3537008b4a5d.webp",
        "/images/47337.jpg",
        "/images/579624-hbo-0-0726fabfa31b762ff86e60ae203eee57.webp",
        "/images/1031262.jpg",
        "/images/21170911-10207440841657762-1026600012-o-og.webp",
        "/images/BwNNCXZA_P4-png__700.jpg",
        "/images/captura_de_tela_2019-05-09_as_10.06.33.webp",
        "/images/desktop-wallpaper-game-of-thrones-robb-stark.jpg",
        "/images/download.jpeg",
        "/images/download (1).jpeg",
        "/images/download (2).jpeg",
        "/images/fot17.jpeg",
        "/images/fot18.jpg",
        "/images/fot19.jpeg",
        "/images/foto3.jpg",
        "/images/foto4.jpg",
        "/images/foto5.jpg",
        "/images/foto6.jpg",
        "/images/foto8.jpeg",
        "/images/foto10.jpg",
        "/images/foto11.jpg",
        "/images/foto12.jpeg",
        "/images/foto13.jpg",
        "/images/foto15.jpg",
        "/images/foto16.jpeg",
        "/images/foto20.jpg",
        "/images/foto21.jpg",
        "/images/foto22.jpg",
        "/images/foto23.jpg",
        "/images/foto24.jpg",
        "/images/foto25.jpg",
        "/images/foto26.jpg",
        "/images/foto27.jpg",
        "/images/foto28.jpg",
        "/images/foto29.jpg",
        "/images/foto30.jpg",
        "/images/foto31.jpg",
        "/images/foto32.jpg",
        "/images/foto33.jpg",
        "/images/foto34.jpeg",
        "/images/foto35.jpeg",
        "/images/foto35.jpg",
        "/images/foto36.jpeg",
        "/images/foto37.jpg",
        "/images/foto38.jpg",
        "/images/foto39.jpg",
        "/images/foto40.jpg",
        "/images/foto50.webp",
        "/images/foto51.jpg",
        "/images/foto52.jpg",
        "/images/foto53.jpg",
        "/images/foto55.jpg",
        "/images/foto57.jpg",
        "/images/foto58.jpg",
        "/images/foto59.jpg",
        "/images/foto61.jpg",
        "/images/foto63.jpg",
        "/images/foto 2.jpg",
        "/images/GAME.png",
        "/images/game-of-thrones-4k-hd-high-definition-wallpaper-preview.jpg",
        "/images/game-of-thrones---bastidores-1541440249100_v2_768x512.jpg",
        "/images/game-of-thrones-behind-the-scenes-got-8-5cc6e2ae32ad8__700-359x356.webp",
        "/images/game_of_thrones_beric_dondarrion_the_long_night.0.jpg",
        "/images/game-of-thrones-daenerys-targaryen-dragon-fire-wallpaper-preview.jpg",
        "/images/game-of-thrones-daenerys-targaryen-wallpaper-preview.jpg",
        "/images/game-of-thrones-horse-nikolaj-coster-jaime-lannister-wallpaper-preview.jpg",
        "/images/game-of-thrones-tv-series-2011-poster-kit-harington-game-of-thrones-wallpaper-preview.jpg",
        "/images/game-of-thrones-tv-shows-wallpaper-preview.jpg",
        "/images/game-of-thrones-tv-tyrion-lannister-cersei-lannister-wallpaper-preview.jpg",
        "/images/gameofthrones_whitewalker1_1020.0.jpg",
        "/images/GoT-4k.jpg",
        "/images/HD-wallpaper-game-of-thrones-game-thrones-characters-of.jpg",
        "/images/images.jpeg",
        "/images/images (1).jpeg",
        "/images/images (2).jpeg",
        "/images/images (3).jpeg",
        "/images/images (4).jpeg",
        "/images/images (5).jpeg",
        "/images/images (6).jpeg",
        "/images/images (7).jpeg",
        "/images/preview_game-of-thrones-characters.jpg",
        "/images/terceira-temporada-bastidores-14set2012.jpg",
        "/images/tv-show-game-of-thrones-daenerys-targaryen-drogon-game-of-thrones-emilia-clarke-hd-wallpaper-c14fdba42ae50dc3672a1cda5e8c1678.jpg",
        "/images/tv-show-game-of-thrones-rory-mccann-sandor-clegane-wallpaper-preview.jpg",
        "/images/unnamed.jpg"
    ];

    const imageContainer = document.getElementById('image-container');
    const prevButton = document.getElementById('prevPage');
    const nextButton = document.getElementById('nextPage');
    const backButton = document.getElementById('backToHome');
    let currentPage = 0;

    function renderPage() {
        const start = currentPage * 1; // Apenas uma imagem por página
        const end = Math.min(start + 1, images.length);
        let html = '';
        for (let i = start; i < end; i++) {
            html += `<div class="image-wrapper"><img class="current-image" src="${images[i]}" alt="Imagem ${i + 1}" onclick="expandImage(this.src)"></div>`;
        }
        imageContainer.innerHTML = html;
    }

    function updateButtonStates() {
        prevButton.disabled = currentPage === 0;
        nextButton.disabled = currentPage === Math.ceil(images.length / 1) - 1; // Apenas uma imagem por página
    }

    function goToPage(page) {
        currentPage = page;
        renderPage();
        updateButtonStates();
    }

    prevButton.addEventListener('click', function() {
        if (currentPage > 0) {
            goToPage(currentPage - 1);
        }
    });

    nextButton.addEventListener('click', function() {
        if (currentPage < Math.ceil(images.length / 1) - 1) { // Apenas uma imagem por página
            goToPage(currentPage + 1);
        }
    });

    backButton.addEventListener('click', function() {
        // Redireciona para a página principal
        window.location.href = '/home'; // Substitua '/home' pela URL da sua página principal
    });

    renderPage();
    updateButtonStates();
});

function expandImage(src) {
    const expandedImage = document.createElement('div');
    expandedImage.style.position = 'fixed';
    expandedImage.style.top = '0';
    expandedImage.style.left = '0';
    expandedImage.style.width = '100%';
    expandedImage.style.height = '100%';
    expandedImage.style.display = 'flex';
    expandedImage.style.justifyContent = 'center';
    expandedImage.style.alignItems = 'center';
    expandedImage.style.zIndex = '9999';
    expandedImage.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    expandedImage.style.cursor = 'pointer';
    expandedImage.onclick = function() {
        document.body.removeChild(expandedImage);
    };
    const img = document.createElement('img');
    img.src = src;
    img.style.maxWidth = '90%';
    img.style.maxHeight = '90%';
    img.style.objectFit = 'contain'; // Redimensiona para caber na tela sem distorcer
    expandedImage.appendChild(img);
    document.body.appendChild(expandedImage);
}