const popularMoviesList = document.getElementById('popular-movies')
popularMoviesList.style.display = 'grid';
popularMoviesList.style.gridTemplateColumns = 'repeat(4, 1fr)'; // Genau 4 nebeneinander
popularMoviesList.style.gap = '20px';                         // Abstand zwischen den Karten
popularMoviesList.style.listStyle = 'none';                    // Entfernt den Punkt (Bullet point)
popularMoviesList.style.padding = '0';


const storeItem = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
}

const getItem = (key) => {
    return JSON.parse(localStorage.getItem(key));
}

const API_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YWY5ZDg4MmMyYTQxODVmYTE2MmVkZGRhODY0MjkyMiIsIm5iZiI6MTc4NTQ5MDIzNC40MTIsInN1YiI6IjZhNmM2YjNhZWE1MmU5ZWQxZjZiNGY0MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lFCOS88XWkcsi1fGG-krZaNe8Iensay4apyg9qQuEKY'
const API_URL = 'https://api.themoviedb.org/3/movie/popular'

function loadTop10Movies() {
    fetch(API_URL, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${API_TOKEN}`,
            accept: 'application/json'
        }
    })
        .then((res) => {

            if (!res.ok) throw new Error(`Something went wrong with the API (Status: ${res.status})`);
            
            return res.json();
        })
        .then((data) => {

        const top10Movies = data.results.slice(0,10);

        popularMoviesList.innerHTML = '';

        top10Movies.forEach((movie) => {
            const li = document.createElement('li')
            const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

            li.style.backgroundColor = '#2c2c38'; // Grauer Rahmen / Hintergrund
            li.style.borderRadius = '10px';
            li.style.padding = '15px';
            li.style.display = 'flex';
            li.style.flexDirection = 'column';
            li.style.justifyContent = 'space-between';


            li.innerHTML = `
            
                    <p>
                        <p>    

                            <img src="${posterUrl}" alt="${movie.title}" style="width: 200px; height: auto"/>
                         </p>
                        <p>
                        <span>${movie.title}
                        </p>
                        <p>
                        'Release Date: ${movie.release_date}</span>
                        </p>
                </li>
            </ul>
            `;
            const addToJournalButton = document.createElement('button');
            addToJournalButton.textContent = 'Add this movie to my journal';
            addToJournalButton.className = "cursor-pointer rounded bg-indigo-600 px-3 py-1 text-sm font-semibold text-white hover:bg-indigo-500 active:scale-95 transition";
            
            addToJournalButton.addEventListener('click', () => {
                let journal = getItem("journal") || [];
                journal.push(movie);
                storeItem("journal", journal);
                alert(`"${movie.title}" wurde zum Journal hinzugefügt!`);
        })
            li.appendChild(addToJournalButton)
            popularMoviesList.append(li);
        })
        
    })

    .catch((error) => {
        console.error('Failure while fetiching movies: ', error);
    });
}

    document.addEventListener('DOMContentLoaded', loadTop10Movies);


const element = document.querySelector('#popular-movies');

// DOM Manupilating to Style the Page

