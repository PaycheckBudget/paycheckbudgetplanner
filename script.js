// Function to toggle theme and save preference
function toggleTheme() {
    const container = document.querySelector('.container');
    const body = document.getElementById('body');
    let isDarkTheme = container.classList.contains('dark-theme');

    isDarkTheme = !isDarkTheme;
    if (isDarkTheme) {
        container.classList.add('dark-theme');
        body.style.backgroundColor = "#F7E9EC";
    } else {
        container.classList.remove('dark-theme');
        body.style.backgroundColor = "#fff";
    }

    // Save theme preference in local storage
    localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
}

// Function to apply theme on page load
function applyTheme() {
    const theme = localStorage.getItem('theme');
    const container = document.querySelector('.container');
    const body = document.getElementById('body');

    if (theme === 'dark') {
        container.classList.add('dark-theme');
        body.style.backgroundColor = "#F7E9EC";
    } else {
        container.classList.remove('dark-theme');
        body.style.backgroundColor = "#fff";
    }
}

// Attach event listener to theme button
document.getElementById('theme-button').addEventListener('click', toggleTheme);

// Apply theme on document load
document.addEventListener('DOMContentLoaded', applyTheme);
