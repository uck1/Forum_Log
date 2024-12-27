document.addEventListener('DOMContentLoaded', () => {
    // Ефект плавної появи контенту
    const mainContent = document.querySelector('main');
    mainContent.style.opacity = 0;

    setTimeout(() => {
        mainContent.style.transition = 'opacity 1s';
        mainContent.style.opacity = 1;
    }, 100);

    // Перехід з затемненням
    const links = document.querySelectorAll('a');

    links.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault(); 

            const href = link.getAttribute('href');

            document.body.style.transition = 'opacity 0.5s';
            document.body.style.opacity = 0;

            setTimeout(() => {
                window.location.href = href;
            }, 500); 
        });
    });

    // Ефект при наведенні на кнопки та категорії
    document.querySelectorAll('button, .category').forEach(element => {
        element.addEventListener('mouseover', () => {
            element.classList.add('hover-effect');
        });

        element.addEventListener('mouseout', () => {
            element.classList.remove('hover-effect');
        });
    });
});
