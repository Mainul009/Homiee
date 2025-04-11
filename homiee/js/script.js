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
