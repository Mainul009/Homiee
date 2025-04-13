// Mainul (30% contribution)
$(document).ready(function() {
    // Form validation
    $('#booking-form').on('submit', function(e) {
        e.preventDefault();
        if (validateForm()) {
            saveBookingData();
            alert('Booking submitted successfully!');
            this.reset();
        }
    });

    // Real-time validation
    $('#booking-form input, #booking-form select').on('input change', function() {
        validateField($(this));
    });

    function validateForm() {
        let isValid = true;
        $('#booking-form [required]').each(function() {
            if (!validateField($(this))) {
                isValid = false;
            }
        });
// Anisha (30% contribution)
            error.text('Please select a future date');
            return false;
        }
        
        return true;
    }

    function saveBookingData() {
        const bookingData = {
            name: $('#fullname').val(),
            email: $('#email').val(),
            phone: $('#phone').val(),
            university: $('#university').val(),
            moveDate: $('#move-date').val(),
            requests: $('#special-requests').val(),
            timestamp: new Date().toISOString()
        };
        
        // Save to LocalStorage
        let bookings = JSON.parse(localStorage.getItem('bookings')) || [];
        bookings.push(bookingData);
        localStorage.setItem('bookings', JSON.stringify(bookings));
    }
});
