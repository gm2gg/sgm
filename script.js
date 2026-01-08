const themeBtn = document.querySelector('.theme-btn');
const langBtns = document.querySelectorAll('.lang-btn');

if(!localStorage.getItem('theme')) localStorage.setItem('theme','light');
document.documentElement.setAttribute('data-theme', localStorage.getItem('theme'));

themeBtn.addEventListener('click', () => {
    let current = document.documentElement.getAttribute('data-theme');
    let newTheme = current === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    themeBtn.textContent = newTheme === 'light' ? '⬜️' : '⬛️';
});

langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        let selectedLang = btn.dataset.lang;
        localStorage.setItem('lang', selectedLang);
        updateLanguage();
    });
});

function updateLanguage() {
    let lang = localStorage.getItem('lang') || 'en';
    document.querySelectorAll('[data-text]').forEach(el => {
        el.textContent = el.dataset[lang];
    });
}

if(!localStorage.getItem('lang')) localStorage.setItem('lang','en');
updateLanguage();

themeBtn.textContent = localStorage.getItem('theme') === 'light' ? '⬜️' : '⬛️';
