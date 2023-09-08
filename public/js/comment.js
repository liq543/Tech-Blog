const showCommentFormBtn = document.querySelector('#show-comment-form');
const submitCommentBtn = document.querySelector('#submit-comment');

const commentFormHandler = async (event) => {
    event.preventDefault();

    const text = document.querySelector('#comment-text').value.trim();

    const post_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    console.log(post_id);

    if (text && post_id) {
        const response = await fetch (`/api/comments`,
        {
            method: 'POST',
            body: JSON.stringify({ post_id, text}),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert('Failed to add comment');
        }
    }
};


document
    .querySelector('#comment-form')
    .addEventListener('submit', commentFormHandler);