document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.form-one');

    const inputs = [
        {
            input: document.getElementById('fname'),
            errorBox: document.querySelector('.error-box-name')
        },
        {
            input: document.getElementById('flast'),
            errorBox: document.querySelector('.error-box-last')
        },
        {
            input: document.getElementById('femail'),
            errorBox: document.querySelector('.error-box-email')
        },
        {
            input: document.getElementById('fpass'),
            errorBox: document.querySelector('.error-box-pass')
        }
    ];

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        inputs.forEach(({input, errorBox}) => {
            if(input.value.trim() === '') {
                errorBox.style.display = 'flex';
                input.style.borderColor = 'red';
            } else {
                errorBox.style.display = 'none';
                input.style.borderColor = '';  
            }
        });
    });
});