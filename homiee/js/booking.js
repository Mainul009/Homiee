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
// Saima (30% contribution)
        return isValid;
    }

    function validateField(field) {
        const error = field.next('.error-message');
        error.text('');
        
        if (field.prop('required') && !field.val()) {
            error.text('This field is required');
            return false;
        }
        
        if (field.attr('type') === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.val())) {
            error.text('Please enter a valid email');
            return false;
        }
        
        if (field.attr('type') === 'tel' && !/^[0-9]{10,15}$/.test(field.val())) {
            error.text('Please enter a valid phone number');
            return false;
        }
        
        if (field.attr('type') === 'date' && new Date(field.val()) < new Date()) {
        
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
