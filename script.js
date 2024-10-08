// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add a simple interactive feature
    const headers = document.querySelectorAll('h2');
    
    headers.forEach(header => {
        header.addEventListener('click', function() {
            this.nextElementSibling.style.display = 
                this.nextElementSibling.style.display === 'none' ? 'block' : 'none';
        });
    });

    // Add a last updated date to the footer
    const footer = document.querySelector('footer');
    const lastUpdated = document.createElement('p');
    lastUpdated.textContent = 'Last updated: ' + new Date().toLocaleDateString();
    footer.appendChild(lastUpdated);
});