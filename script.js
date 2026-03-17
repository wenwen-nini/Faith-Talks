const elements = document.querySelectorAll('.animate-on-scroll');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('visible'); 
        } else {
            entry.target.classList.remove('visible');
        }
    });
}, {
    threshold: 0.1
});

elements.forEach(el => observer.observe(el));

const buttons = document.querySelectorAll('.read-more-btn');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        const card = btn.closest('.topic-card');
        const moreText = card.querySelector('.more-text');
        
        if(card.classList.contains('expanded')){
            moreText.style.display = 'none';
            card.classList.remove('expanded');
            btn.textContent = 'Read More';
        } else {
            moreText.style.display = 'inline';
            card.classList.add('expanded');
            btn.textContent = 'Read Less';
        }
    });
});