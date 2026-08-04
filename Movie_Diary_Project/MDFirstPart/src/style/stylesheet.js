// styleing via DOM-manipulation
const background = '#d41a65';
document.body.style.backgroundColor = background;

const link = document.querySelectorAll('.link')
link.forEach(link => {
    link.style.backgroundColor = '#0ee34a'
})

const popular = document.getElementById('popular-movies');
popular.style.backgroundColor = '#164739'


