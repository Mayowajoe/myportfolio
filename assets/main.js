// Year in footer
document.querySelectorAll('#year').forEach(el=> el.textContent = new Date().getFullYear());

// Theme toggle with persistence
const toggle = document.querySelector('.theme-toggle');
const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
const saved = localStorage.getItem('theme');
if(saved === 'light') document.documentElement.classList.add('light');
if(saved === 'dark') document.documentElement.classList.remove('light');
if(!saved && prefersLight) document.documentElement.classList.add('light');

toggle?.addEventListener('click', ()=>{
  document.documentElement.classList.toggle('light');
  const isLight = document.documentElement.classList.contains('light');
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
});
