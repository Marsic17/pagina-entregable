document.addEventListener('DOMContentLoaded', function() {
    const commentForm = document.getElementById('comment-form');
    const commentInput = document.getElementById('comment-input');
    const commentsList = document.getElementById('comments-list');

    commentForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const commentText = commentInput.value.trim();
        if (commentText !== '') {
            const commentElement = document.createElement('div');
            commentElement.classList.add('mainOpiniones__comment');
            commentElement.textContent = commentText;
            commentsList.appendChild(commentElement);
            commentInput.value = '';
        }
    });
});
