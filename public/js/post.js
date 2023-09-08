// Posting a new post
const newPost = async (event) => {
    event.preventDefault();

    // Grab inputted title and content
    const title = document.querySelector('#post-title').value.trim();
    const text = document.querySelector('#post-context').value.trim();

    // When both exist, fetch to api to run post method
    if (title && text) {
        const response = await fetch(`/api/posts`, {
            method: 'POST',
            body: JSON.stringify({ title, text}),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        // If response is okay, direct to dashboard, if not give alert
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to create post!');
        };
    };
};

document
    .querySelector('#create-post')
    .addEventListener('submit', newPost);
