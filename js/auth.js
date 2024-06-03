
const submit = document.querySelector('#submit')

submit.addEventListener('click', () => {
            
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username === 'admin' && password === 'password') {
        window.location.href = 'Home.html';

        localStorage.setItem('user', username)
    } 
})