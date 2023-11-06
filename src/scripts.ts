console.log('Ready for coding');

document.querySelector('.ham-button').addEventListener('click', function () {
    const navLinks = document.querySelector('.nav-links') as HTMLElement;
    if (navLinks) {
        navLinks.style.display = (navLinks.style.display === 'none') ? 'block' : 'none';
    }
});