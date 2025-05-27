let currentGuidebook = null;
let currentPage = 0;
let totalPages = 0;


window.addEventListener('message', function(event) {
    const data = event.data;
    
    if (data.action === 'openGuidebook') {
        currentGuidebook = data.guidebook;
        totalPages = currentGuidebook.pages.length;
        currentPage = 0;
        

        const settings = data.settings;
        document.documentElement.style.setProperty('--background-color', settings.backgroundColor);
        document.documentElement.style.setProperty('--text-color', settings.textColor);
        document.documentElement.style.setProperty('--accent-color', settings.accentColor);
        document.documentElement.style.setProperty('--font-family', settings.fontFamily);
        
        if (settings.coverImage) {
            document.getElementById('cover-image').src = settings.coverImage;
        }
        

        document.getElementById('cover-title').textContent = currentGuidebook.title;
        document.getElementById('total-pages').textContent = totalPages;
        

        const bookPagesElement = document.getElementById('book-pages');
        bookPagesElement.innerHTML = '';
        
        currentGuidebook.pages.forEach((page, index) => {
            const pageElement = document.createElement('div');
            pageElement.className = 'page' + (index === 0 ? ' active' : '');
            pageElement.innerHTML = page.content;
            bookPagesElement.appendChild(pageElement);
        });
        

        document.getElementById('guidebook-container').style.display = 'flex';
        document.getElementById('book-cover').style.display = 'flex';
        document.getElementById('book-content').style.display = 'none';
    } else if (data.action === 'closeGuidebook') {
        closeGuidebook();
    }
});


document.getElementById('book-cover').addEventListener('click', function() {
    this.style.display = 'none';
    document.getElementById('book-content').style.display = 'flex';
    updatePageDisplay();
});


document.getElementById('prev-page').addEventListener('click', function() {
    if (currentPage > 0) {
        document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
        currentPage--;
        document.querySelectorAll('.page')[currentPage].classList.add('active');
        updatePageDisplay();
        playPageFlipSound();
    }
});

document.getElementById('next-page').addEventListener('click', function() {
    if (currentPage < totalPages - 1) {
        document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
        currentPage++;
        document.querySelectorAll('.page')[currentPage].classList.add('active');
        updatePageDisplay();
        playPageFlipSound();
    }
});


document.getElementById('close-book').addEventListener('click', function() {
    closeGuidebook();
});


function updatePageDisplay() {
    document.getElementById('current-page').textContent = currentPage + 1;
}


function playPageFlipSound() {
    // You can add a sound effect here if desired
}

t
function closeGuidebook() {
    document.getElementById('guidebook-container').style.display = 'none';

fetch('https://ml187-guidebooks/closeGuidebook', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({})
});
}


document.addEventListener('keyup', function(event) {
    if (event.key === 'Escape') {
        closeGuidebook();
    }
});
