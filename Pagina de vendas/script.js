document.addEventListener("DOMContentLoaded", function() {
    const espacos = document.querySelectorAll(".espaco");

    espacos.forEach(function(espaco) {
        espaco.addEventListener("mouseover", function() {
            espaco.style.transform = "scale(1.1) translateY(-10px)"; // Aumenta o tamanho e "salta" para cima
            espaco.style.width = "330px"; // Aumenta a largura
            espaco.style.height = "330px"; // Aumenta a altura
        });

        espaco.addEventListener("mouseout", function() {
            espaco.style.transform = "scale(1) translateY(0)"; // Volta ao tamanho original
            espaco.style.width = "300px"; // Volta à largura original
            espaco.style.height = "300px"; // Volta à altura original
        });
    });
});
