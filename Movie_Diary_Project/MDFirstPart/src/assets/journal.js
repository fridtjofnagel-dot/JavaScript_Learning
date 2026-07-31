const getItem = (key) => {
    const value = JSON.parse(localStorage.getItem(key));
    if(Array.isArray(value)) {
    return value || []
    }
    return []
}

let journal = getItem("journal")

const ul = document.getElementById('myJournal')

ul.innerHTML = '';

if (journal.length === 0) {
    ul.innerHTML = '<li>Noch keine Filme im Journal.</li>';
} else {
    journal.forEach((movie) => {
        const li = document.createElement("li")
        const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
        
        li.innerHTML = `
            <img src="${posterUrl}" alt="${movie.title}" />
            <span>${movie.title} (${movie.release_date})</span>`;

        ul.appendChild(li)
    })
}




