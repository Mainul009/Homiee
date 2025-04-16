// Mainul (30% contribution)
// DOM Ready
document.addEventListener('DOMContentLoaded', function() {
    // Initialize date/time
    updateDateTime();
    setInterval(updateDateTime, 1000);

    // Initialize properties from LocalStorage
    loadFeaturedProperties();

    // Navigation active state
    $('.nav-link').on('click', function() {
        $('.nav-link').removeClass('active');
        $(this).addClass('active');
    });

    // University search functionality
    $('#search-btn').on('click', searchUniversities);

    // Favorite button functionality
    $(document).on('click', '.favorite-btn', function() {
        const propertyId = $(this).data('id');
        let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        
        if (!favorites.includes(propertyId)) {
            favorites.push(propertyId);
            $(this).addClass('favorited').html('<i class="fas fa-heart"></i>');
        } else {
            favorites = favorites.filter(id => id !== propertyId);
            $(this).removeClass('favorited').html('<i class="far fa-heart"></i>');
        }
        
        localStorage.setItem('favorites', JSON.stringify(favorites));

// Saima (30% contribution)
    });

    // Smooth scrolling
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500);
    });
});

function updateDateTime() {
    const now = new Date();
    $('#current-date').text(now.toLocaleDateString());
    $('#current-time').text(now.toLocaleTimeString());
}

function loadFeaturedProperties() {
    const properties = [
        {
            id: 1,
            title: "City View Apartments",
            university: "ulster",
            price: "£750/month",
            image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
            distance: "0.3mi from Ulster University"
        },
        // Add more properties...
    ];

    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
            
// Anisha (30% contribution)
    const propertiesHTML = properties.map(prop => `
        <div class="property-card" data-university="${prop.university}">
            <div class="property-image">
                <img src="${prop.image}" alt="${prop.title}">
                <button class="favorite-btn" data-id="${prop.id}">
                    <i class="${favorites.includes(prop.id) ? 'fas' : 'far'} fa-heart"></i>
                </button>
            </div>
            <div class="property-info">
                <h3>${prop.title}</h3>
                <p><i class="fas fa-map-marker-alt"></i> ${prop.distance}</p>
                <p class="price">${prop.price}</p>
                <a href="booking.html" class="cta-button book-btn">Book Viewing</a>
            </div>
        </div>
    `).join('');

    $('.properties').html(propertiesHTML);
}
function searchUniversities() {
    const searchTerm = $('#university-search').val().toLowerCase();
    
    if (searchTerm.includes('ulster')) {
        window.location.href = "universities.html#ulster";
    } else if (searchTerm.includes('metropolitan') || searchTerm.includes('met')) {
        window.location.href = "universities.html#london-met";
    } else if (searchTerm.includes('south bank') || searchTerm.includes('southbank')) {
        window.location.href = "universities.html#south-bank";
    } else {
        alert('Please search for: Ulster, Metropolitan, or South Bank');
    }
}
