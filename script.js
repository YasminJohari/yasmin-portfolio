// Custom Cursor Movement
const cursor = document.querySelector('.custom-cursor');

document.addEventListener('mousemove', (e) => {
    if (cursor) {
        cursor.style.left = e.clientX - 10 + 'px';
        cursor.style.top = e.clientY - 10 + 'px';
    }
});

// Cursor enlargement over interactive elements
document.querySelectorAll('a, .project-card, .brutalist-btn').forEach(element => {
    element.addEventListener('mouseenter', () => {
        if (cursor) cursor.style.transform = 'scale(2.2)';
    });
    element.addEventListener('mouseleave', () => {
        if (cursor) cursor.style.transform = 'scale(1)';
    });
});