document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('responseForm');
    
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        // const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Create form data for submission
        const formData = new FormData();
        formData.append('name', name);
        // formData.append('email', email);
        formData.append('message', message);
        formData.append('access_key', '33d44239-b74e-45c4-be8a-5c9f3feaab1d');
        formData.append('subject', 'Response to Apology');

        try {
            // Submit to Web3Forms API
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                document.getElementById('userResponse').innerHTML = '✅ Thank you for your response! Your message has been sent.';
                form.reset();
            } else {
                document.getElementById('userResponse').innerHTML = '❌ Something went wrong. Please try again.';
            }
        } catch (error) {
            document.getElementById('userResponse').innerHTML = '⚠️ An error occurred. Please try again later.';
        }
    });
    
    // Add animation to form inputs
    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('active');
        });
        
        input.addEventListener('blur', function() {
            if (this.value === '') {
                this.parentElement.classList.remove('active');
            }
        });
    });
}); 