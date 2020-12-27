const themeRef = document.querySelector('#theme-switch-toggle');

const bodyRef = document.querySelector('body');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

themeRef.addEventListener('change', HandlerSwitchChange);

function HandlerSwitchChange(event) {
  bodyRef.classList.toggle(Theme.LIGHT);
  bodyRef.classList.toggle(Theme.DARK);
  if (event.target.checked) {
    localStorage.setItem('theme', Theme.DARK);
  } else {
    localStorage.setItem('theme', Theme.LIGHT);
  }
}

checkTheme();

function checkTheme() {
  if (localStorage.theme === 'dark-theme') {
    bodyRef.classList.add(Theme.DARK);
    themeRef.checked = true;
  } else {
    bodyRef.classList.add(Theme.LIGHT);
  }
}
