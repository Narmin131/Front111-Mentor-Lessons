

let darkMode = localStorage.getItem('darkMode');

const toggleBtn = document.querySelector('toggleBtn');

const enableDarkMode = () => {
    document.body.classList.add('darkMode');
    localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
    document.body.classList.remove('darkMode');
    localStorage.setItem('darkMode', null)
}

if (darkMode === 'enabled') {
    enableDarkMode()
}

const changeMode = () => {
    let darkMode = localStorage.getItem("darkMode");

    if (darkMode !== 'enabled') {
        enableDarkMode()
    }
    else {
        disableDarkMode()
    }
}

