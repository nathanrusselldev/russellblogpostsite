const newComment = async(e) => {
    e.preventDefault();

    const comment_body = document.querySelector('#commentContent').value.trim()
    const postId = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    if (comment_body) {
        const response = await fetch('/api/comment/', {
            method: 'POST',
            body: JSON.stringify({comment_body, postId}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        console.log(response)
        if (response.ok) {
        window.location.reload()
    } else {
        alert('fail')
    }} 
};

document.addEventListener('submit', newComment)