document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Lógica do Scroll Reveal (Animação ao rolar) ---
    const reveals = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 100; 

        reveals.forEach((reveal) => {
            const elementTop = reveal.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            }
        });
    };
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Chama ao iniciar


    // --- 2. Lógica do Modal (Janela Pop-up) ---
    
    const modal = document.getElementById('modal-overlay');
    const closeBtn = document.querySelector('.close-btn');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const modalImg = document.getElementById('modal-img');
    const openButtons = document.querySelectorAll('.link-more'); 

    // Ao clicar em "Saiba mais"
    openButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault(); 

            // Pega os dados escondidos no HTML do botão
            const title = button.getAttribute('data-title');
            const desc = button.getAttribute('data-desc');
            const img = button.getAttribute('data-img');

            // Preenche a janela
            modalTitle.textContent = title;
            modalDesc.textContent = desc;
            modalImg.src = img;

            // Mostra a janela
            modal.classList.add('open');
        });
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') modal.classList.remove('open');
    });

    // Fechar ao clicar no X
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('open');
    });

    // Fechar ao clicar fora da janela
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('open');
        }
    });

});
