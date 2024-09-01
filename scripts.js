document.addEventListener('DOMContentLoaded', () => {
    const farmerLoginForm = document.getElementById('farmerLoginForm');
    const customerLoginForm = document.getElementById('customerLoginForm');

    // Handle Farmer Login Form Submission
    if (farmerLoginForm) {
        farmerLoginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const farmerEmail = document.getElementById('farmerEmail').value;
            const farmerPassword = document.getElementById('farmerPassword').value;
            
            // Normally, you would validate credentials here
            // For demo purposes, we'll just redirect to the registration page
            alert('Farmer Login functionality is not implemented. Redirecting to registration page.');
            window.location.href = 'farmer-register.html';
        });
    }

    // Handle Customer Login Form Submission
    if (customerLoginForm) {
        customerLoginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const customerEmail = document.getElementById('customerEmail').value;
            const customerPassword = document.getElementById('customerPassword').value;
            
            // Normally, you would validate credentials here
            // For demo purposes, we'll just redirect to the registration page
            alert('Customer Login functionality is not implemented. Redirecting to registration page.');
            window.location.href = 'customer-register.html';
        });
    }
});
