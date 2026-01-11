// 1. Плавная прокрутка
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 2. Анимация появления блоков
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
});

document.querySelectorAll('#txt1, #txt2, #txt3').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.8s ease-out';
    observer.observe(el);
});

// 3. Смена цвета шапки при скролле
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if(window.scrollY > 50) {
        header.style.backgroundColor = 'rgba(128, 90, 213, 0.9)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.backgroundColor = '#805AD5';
        header.style.backdropFilter = 'none';
    }
});

// 4. Секретный клик
let clickCount = 0;
const secretTrigger = document.querySelector('footer p');
if(secretTrigger) {
    secretTrigger.addEventListener('click', () => {
        clickCount++;
        if(clickCount === 5) {
            document.body.style.background = 'linear-gradient(45deg, #ff00ff, #00ffff, #ff00ff)';
            setTimeout(() => {
                document.body.style.background = '#0F172A';
            }, 2000);
            clickCount = 0;
        }
    });
}

// 5. Текущая дата в футере
const now = new Date();
const footer = document.querySelector('footer');
if(footer) {
    const dateElement = document.createElement('p');
    dateElement.textContent = `Today: ${now.toLocaleDateString('en-EN', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    })}`;
    dateElement.style.textAlign = 'center';
    dateElement.style.marginTop = '20px';
    dateElement.style.color = '#A78BFA';
    footer.appendChild(dateElement);
}