let currentGuidebook = null;
let currentPage = 0;
let totalPages = 0;

// Listen for messages from the game client
window.addEventListener('message', function(event) {
    const data = event.data;
    
    if (data.action === 'openGuidebook') {
        currentGuidebook = data.guidebook;
        totalPages = currentGuidebook.pages.length;
        currentPage = 0;
        
        // Apply UI settings
        const settings = data.settings;
        document.documentElement.style.setProperty('--background-color', settings.backgroundColor);
        document.documentElement.style.setProperty('--text-color', settings.textColor);
        document.documentElement.style.setProperty('--accent-color', settings.accentColor);
        document.documentElement.style.setProperty('--font-family', settings.fontFamily);
        
        if (settings.coverImage) {
            document.getElementById('cover-image').src = settings.coverImage;
        }
        
        // Set up the guidebook
        document.getElementById('cover-title').textContent = currentGuidebook.title;
        document.getElementById('total-pages').textContent = totalPages;
        
        // Create pages
        const bookPagesElement = document.getElementById('book-pages');
        bookPagesElement.innerHTML = '';
        
        currentGuidebook.pages.forEach((page, index) => {
            const pageElement = document.createElement('div');
            pageElement.className = 'page' + (index === 0 ? ' active' : '');
            pageElement.innerHTML = page.content;
            bookPagesElement.appendChild(pageElement);
        });
        
        // Show the guidebook
        document.getElementById('guidebook-container').style.display = 'flex';
        document.getElementById('book-cover').style.display = 'flex';
        document.getElementById('book-content').style.display = 'none';
    } else if (data.action === 'closeGuidebook') {
        closeGuidebook();
    }
});

// Open the book when clicking on the cover
document.getElementById('book-cover').addEventListener('click', function() {
    this.style.display = 'none';
    document.getElementById('book-content').style.display = 'flex';
    updatePageDisplay();
});

// Navigate to previous page
document.getElementById('prev-page').addEventListener('click', function() {
    if (currentPage > 0) {
        document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
        currentPage--;
        document.querySelectorAll('.page')[currentPage].classList.add('active');
        updatePageDisplay();
        playPageFlipSound();
    }
});

// Navigate to next page
document.getElementById('next-page').addEventListener('click', function() {
    if (currentPage < totalPages - 1) {
        document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
        currentPage++;
        document.querySelectorAll('.page')[currentPage].classList.add('active');
        updatePageDisplay();
        playPageFlipSound();
    }
});

// Close the guidebook
document.getElementById('close-book').addEventListener('click', function() {
    closeGuidebook();
});

// Update page number display
function updatePageDisplay() {
    document.getElementById('current-page').textContent = currentPage + 1;
}

// Play page flip sound
function playPageFlipSound() {
    // You can add a sound effect here if desired
}

// Close the guidebook and send message back to client
function closeGuidebook() {
    document.getElementById('guidebook-container').style.display = 'none';
// Update this line in the closeGuidebook function
fetch('https://ml187-guidebooks/closeGuidebook', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({})
});
}

// Add keyboard event listener for Escape key
document.addEventListener('keyup', function(event) {
    if (event.key === 'Escape') {
        closeGuidebook();
    }
});
