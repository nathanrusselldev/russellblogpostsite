const newBlogPost = async (e) => {
    e.preventDefault();

    const blog_title = document.querySelector('#postTitle').value.trim()
    const blog_content = document.querySelector('#postContent').value.trim()
     
    if (blog_title && blog_content) {
        const response = await fetch('/api/posts/newpost', {
            method:'POST',
            body: JSON.stringify({blog_title, blog_content}),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log(response)
    if(response.ok) {
        document.location.replace('/')
    } else {
        alert('fail')
    }}
};

document.addEventListener('submit', newBlogPost)