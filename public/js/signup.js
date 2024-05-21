document.getElementById('openInstructions').addEventListener('click', async function(event) {
    event.preventDefault(); // Prevent the default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('psw').value;
    // const confirmPassword = document.getElementById('confirmPassword').value;

    try {
        const response = await fetch('/api/sign-up', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password }) //confirmpassword
        });

        const result = await response.json();
        if (response.ok) {
            alert(result.message);
        } else {
            alert(result);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Signup failed');
    }
});