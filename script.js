document.addEventListener("DOMContentLoaded", function() {
    // Array of background image URLs
    const backgrounds = [
        'background1.jpg',
        'background2.jpg',
        'background3.jpg',
        'background4.jpg',
        'background5.jpg',
        'background6.jpg',
        'background7.jpg',
        'background8.jpg',
        'background9.jpg',
        'backgrounda.jpg',
        'backgroundb.jpg',
        'backgroundc.jpg',
        // Add more image URLs as needed
    ];

    // Get a random index from the backgrounds array
    const randomIndex = Math.floor(Math.random() * backgrounds.length);

    // Set the background image
    document.body.style.backgroundImage = `url('${backgrounds[randomIndex]}')`;
});

