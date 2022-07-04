function form() {
    try {
        const forms = document.querySelectorAll('form');

        async function postData(url, data) {
            let res = await fetch(url, {
                method: "POST",
                body: data
            });
        
            return await res.text();
        }

        forms.forEach(item => {
            item.addEventListener('submit', (e) => {
                e.preventDefault();
                
                const formData = new FormData(item);

                postData('mail.php', formData)
                .then(() => {
                    window.location.href = '/';
                });
            });
        });
    } catch(e) {
        console.log(e.stack);
    }
}

export default form;