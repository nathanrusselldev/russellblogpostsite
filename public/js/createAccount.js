const newAccount = async (e) => {
    e.preventDefault();

    const name = document.querySelector('#formUserName').value.trim();
    const email = document.querySelector('#formEmail').value.trim();
    const password = document.querySelector('#formPassword').value.trim();

    if (name && email && password) {
        const response = await fetch ('/api/users/register', {
            method: 'POST',
            body: JSON.stringify({name, email, password}),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        if (response.ok) {
            document.location.replace('/')
        } else {
            alert('fail')
        }
    }
}

document.addEventListener('submit', newAccount)