// Function to hide a single suggested card
function hideSuggestedCard(card) {
    // Look for the header text that says "Suggested"
    const header = card.querySelector('.update-components-header__text-view');
    
    // Only hide if it's a suggested post (has the header text "Suggested")
    if (header && header.textContent.trim() === 'Suggested') {
        card.closest('.feed-shared-update-v2__control-menu-container').setAttribute('style', 'display: none !important');
    }
}

// Function to hide all suggested cards
function hideSuggestedCards() {
    const cards = document.querySelectorAll('.feed-shared-update-v2__control-menu-container');
    cards.forEach(hideSuggestedCard);
}

// MutationObserver to watch for new cards added to the DOM
const mutationObserver = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
            if (node.nodeType === 1 && node.matches('.feed-shared-update-v2__control-menu-container')) {
                hideSuggestedCard(node);
            }
        });
    });
});

// IntersectionObserver to watch for cards as they come into view while scrolling
const intersectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            hideSuggestedCard(entry.target);
        }
    });
}, {
    root: null, // Use the viewport as the root
    rootMargin: '0px',
    threshold: 0.1 // Trigger when 10% of the element is visible
});

// Start observing the document body for changes
mutationObserver.observe(document.body, {
    childList: true,
    subtree: true
});

// Observe all existing suggested cards
const suggestedCards = document.querySelectorAll('.feed-shared-update-v2__control-menu-container');
suggestedCards.forEach(card => {
    intersectionObserver.observe(card);
});

// Run the function immediately to hide existing cards
hideSuggestedCards();