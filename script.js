window.onload = function() {
    alert("Bienvenue sur le site Premier projet !");
    const p = document.querySelector('main p');
    p.addEventListener('click', function() {
        p.textContent = "Merci d'avoir cliqué ! 🚀";
    });
};