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
