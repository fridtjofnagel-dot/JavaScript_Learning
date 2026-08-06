const getItem = (key) => {
    const value = JSON.parse(localStorage.getItem(key));
    if(Array.isArray(value)) {
    return value || []
    }
    return []
}

let journal = getItem("journal")


const ul = document.getElementById('myJournal')
ul.style.display = 'grid';
ul.style.gridTemplateColumns = 'repeat(3, 1fr)';
ul.style.gap = '140px';                        
ul.style.listStyle = 'none';
ul.style.padding = '0';
ul.innerHTML = '';

if (journal.length === 0) {
    ul.innerHTML = '<li>Noch keine Filme im Journal.</li>';
} else {
    journal.forEach((movie) => {
        const li = document.createElement("li")
        const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
            li.style.backgroundColor = '#2c2c38';
            li.style.borderRadius = '10px';
            li.style.padding = '15px';
            li.style.display = 'flex';
            li.style.flexDirection = 'column';
            li.style.justifyContent = 'space-between';
        li.innerHTML = `
            <img src="${posterUrl}" alt="${movie.title}" style="width: 200px; height: auto" />
            <p>
            <span>${movie.title}
            </p>
            <p>
            Release Date: (${movie.release_date})
            </p>
            </span>`;

        ul.appendChild(li)

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'delete';
        deleteBtn.addEventListener('click', () => {
        li.remove()
        journal = journal.filter((movie) => journal.id !== item.id);
        
        storeItem("journal", journal)    
        li.appendChild(deleteBtn);
    })


    });


}




