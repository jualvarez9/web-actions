function showAlert() {
    alert('¡Funciona! 🎉 Tu página está desplegada con GitHub Actions');
}

// Mostrar fecha de última actualización
document.addEventListener('DOMContentLoaded', function() {
    const now = new Date();
    const footer = document.createElement('div');
    footer.style.marginTop = '2rem';
    footer.style.fontSize = '0.9rem';
    footer.style.color = '#999';
    footer.innerHTML = `Última actualización: ${now.toLocaleString()}`;
    document.querySelector('.container').appendChild(footer);
});