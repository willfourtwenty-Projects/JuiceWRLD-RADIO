        const audioPlayer = document.getElementById("audio-player");
        const playPauseButton = document.getElementById("play-pause-button");
        const nextSongButton = document.getElementById("next-song-button");
        const songName = document.getElementById("song-name");
        const songArtwork = document.getElementById("song-artwork");
        const lyrics = document.getElementById("lyrics");

        /*
        Completed Albums: 
        Future & Juice WRLD Present... WLRD ON DRUGS
        Goodbye & Good Riddance
        Death Race For Love
        */ 
        const songs = [
             {
                name: "Juice WRLD - Lucid Dreams",
                src: "/songs/Lucid_Dreams.mp3",
                artwork: "/images/artwork/6.gif",
                lyricsFile: "Lucid_Dreams.txt"  
            },
            {
                name: "Juice WRLD - All Girls Are The Same",
                src: "/songs/All_Girls_Are_The_Same.mp3",
                artwork: "/images/artwork/6.gif",
                lyricsFile: "All_Girls_Are_The_Same.txt"
            }, 
            {
                name: "Juice WRLD - Armed And Dangerous",
                src: "/songs/Armed_And_Dangerous.mp3",
                artwork: "/images/artwork/6.gif",
                lyricsFile: "Armed_And_Dangerous.txt"
            }, 
            {
                name: "Juice WRLD - Betrayal - Skit",
                src: "/songs/Betrayal_Skit.mp3",
                artwork: "/images/artwork/6.gif",
                lyricsFile: "Betrayal_Skit.txt"
            }, 
            {
                name: "Juice WRLD - Black & White",
                src: "/songs/Black_And_White.mp3",
                artwork: "/images/artwork/6.gif",
                lyricsFile: "Black_And_White.txt"
            }, 
            {
                name: "Juice WRLD - Candles",
                src: "/songs/Candles.mp3",
                artwork: "/images/artwork/6.gif",
                lyricsFile: "Candles.txt"
            },  
            {
                name: "Juice WRLD - End Of The Road",
                src: "/songs/End_Of_The_Road.mp3",
                artwork: "/images/artwork/6.gif",
                lyricsFile: "End_Of_The_Road.txt"
            }, 
            {
                name: "Juice WRLD - Hurt Me",
                src: "/songs/Hurt_Me.mp3",
                artwork: "/images/artwork/6.gif",
                lyricsFile: "Hurt_Me.txt"
            }, 
            {
                name: "Juice WRLD - I'll Be Fine",
                src: "/songs/Ill_Be_Fine.mp3",
                artwork: "/images/artwork/6.gif",
                lyricsFile: "I'll_Be_Fine.txt"
            }, 
            {
                name: "Juice WRLD - I'm Still",
                src: "/songs/Im_Still.mp3",
                artwork: "/images/artwork/6.gif",
                lyricsFile: "I'm_Still.txt"
            }, 
            {
                name: "Juice WRLD - Intro",
                src: "/songs/Intro.mp3",
                artwork: "/images/artwork/6.gif",
                lyricsFile: "Intro.txt"
            }, 
            {
                name: "Juice WRLD - Karma - Skit",
                src: "/songs/Karma_Skit.mp3",
                artwork: "/images/artwork/6.gif",
                lyricsFile: "Karma_Skit.txt"
            },  
            {
                name: "Juice WRLD - Lean Wit Me",
                src: "/songs/Lean_Wit_Me.mp3",
                artwork: "/images/artwork/6.gif",
                lyricsFile: "Lean_Wit_Me.txt"
            },
            {
                name: "Juice WRLD - Long Gone",
                src: "/songs/Long_Gone.mp3",
                artwork: "/images/artwork/6.gif",
                lyricsFile: "Long_Gone.txt"
            },
            {
                name: "Juice WRLD - Scared Of Love (with instrumental by Ghost Loft)",
                src: "/songs/Scared_Of_Love_(with instrumental by Ghost Loft).mp3",
                artwork: "/images/artwork/6.gif",
                lyricsFile: "Scared_Of_Love.txt"
            },
            {
                name: "Juice WRLD - Used To",
                src: "/songs/Used_To.mp3",
                artwork: "/images/artwork/6.gif",
                lyricsFile: "Used_To.txt"
            },
            {
                name: "Juice WRLD - Wasted (feat. Lil Uzi Vert)",
                src: "/songs/Wasted_(feat. Lil Uzi Vert).mp3",
                artwork: "/images/artwork/6.gif",
                lyricsFile: "Wasted.txt"
            }, 
            {
                name: "Juice WRLD - 7 Am FreeStyle",
                src: "/songs/7_Am_Freestyle.mp3",
                artwork: "/images/artwork/7.jpg",
                lyricsFile: "1_sample.txt"
            },
            {
                name: "Juice WRLD - Afterlife",
                src: "/songs/Afterlife.mp3",
                artwork: "/images/artwork/7.jpg",
                lyricsFile: "1_sample.txt"
            },
            {
                name: "Juice WRLD - Ain't Livin Right (feat. Gunna)",
                src: "/songs/Ain't_Livin_Right_(feat. Gunna).mp3",
                artwork: "/images/artwork/7.jpg",
                lyricsFile: "1_sample.txt"
            },
            {
                name: "Juice WRLD - Astronauts",
                src: "/songs/Astronauts.mp3",
                artwork: "/images/artwork/7.jpg",
                lyricsFile: "1_sample.txt"
            },
            {
                name: "Juice WRLD - Different (feat. Yung Bans)",
                src: "/songs/Different_(feat. Yung Bans).mp3",
                artwork: "/images/artwork/7.jpg",
                lyricsFile: "1_sample.txt"
            },
            {
                name: "Juice WRLD - Fine China",
                src: "/songs/Fine_China.mp3",
                artwork: "/images/artwork/7.jpg",
                lyricsFile: "1_sample.txt"
            },
            {
                name: "Juice WRLD - Hard Work Pays Off",
                src: "/songs/Hard_Work_Pays_Off.mp3",
                artwork: "/images/artwork/7.jpg",
                lyricsFile: "1_sample.txt"
            },
            {
                name: "Juice WRLD - Jet Lag (feat. Young Scooter)",
                src: "/songs/Jet_Lag_(feat. Young Scooter).mp3",
                artwork: "/images/artwork/7.jpg",
                lyricsFile: "1_sample.txt"
            },
            {
                name: "Juice WRLD - Make It Back",
                src: "/songs/Make_It_Back.mp3",
                artwork: "/images/artwork/7.jpg",
                lyricsFile: "1_sample.txt"
            },
            {
                name: "Juice WRLD - No Issue",
                src: "/songs/No_Issue.mp3",
                artwork: "/images/artwork/7.jpg",
                lyricsFile: "1_sample.txt"
            },
            {
                name: "Juice WRLD - Oxy (feat. Lil Wayne)",
                src: "/songs/Oxy_(feat. Lil Wayne).mp3",
                artwork: "/images/artwork/7.jpg",
                lyricsFile: "1_sample.txt"
            },
            {
                name: "Juice WRLD - Realer N Realer",
                src: "/songs/Realer_N_Realer.mp3",
                artwork: "/images/artwork/7.jpg",
                lyricsFile: "1_sample.txt"
            },
            {
                name: "Juice WRLD - Red Bentley (feat. Young Thug)",
                src: "/songs/Red_Bentley_(feat. Young Thug).mp3",
                artwork: "/images/artwork/7.jpg",
                lyricsFile: "1_sample.txt"
            },
            {
                name: "Juice WRLD - Shorty",
                src: "/songs/Shorty.mp3",
                artwork: "/images/artwork/7.jpg",
                lyricsFile: "1_sample.txt"
            },
            {
                name: "Juice WRLD - Transformer (feat. Nicki Minaj)",
                src: "/songs/Transformer_(feat. Nicki Minaj).mp3",
                artwork: "/images/artwork/7.jpg",
                lyricsFile: "1_sample.txt"
            },
            {
                name: "Juice WRLD - WRLD On Drugs",
                src: "/songs/WRLD_On_Drugs.mp3",
                artwork: "/images/artwork/7.jpg",
                lyricsFile: "1_sample.txt"
            },
            {
                name: "Juice WRLD - 10 Feet",
                src: "/songs/10_Feet.mp3",
                artwork: "/images/artwork/5.jpg",
                lyricsFile: "1_sample.txt"
            },
            {
                name: "Juice WRLD - Bandit (with YoungBoy Never Broke Again)",
                src: "/songs/Bandit_(with YoungBoy Never Broke Again).mp3",
                artwork: "/images/artwork/5.jpg",
                lyricsFile: "1_sample.txt"
            },
            {
                name: "Juice WRLD - Big",
                src: "/songs/Big.mp3",
                artwork: "/images/artwork/5.jpg",
                lyricsFile: "1_sample.txt"
            },
            {
                name: "Juice WRLD - Demonz (feat. Brent Faiyaz) - Interlude",
                src: "/songs/Demonz_(feat. Brent Faiyaz)_Interlude.mp3",
                artwork: "/images/artwork/5.jpg",
                lyricsFile: "1_sample.txt"
            },
            {
                name: "Juice WRLD - Desire",
                src: "/songs/Desire.mp3",
                artwork: "/images/artwork/5.jpg",
                lyricsFile: "1_sample.txt"
            },
            {
                name: "Juice WRLD - Empty",
                src: "/songs/Empty.mp3",
                artwork: "/images/artwork/5.jpg",
                lyricsFile: "1_sample.txt"
            },
            {
                name: "Juice WRLD - Fast",
                src: "/songs/Fast.mp3",
                artwork: "/images/artwork/5.jpg",
                lyricsFile: "1_sample.txt"
            },
            {
                name: "Juice WRLD - Feeling",
                src: "/songs/Feelng.mp3",
                artwork: "/images/artwork/5.jpg",
                lyricsFile: "1_sample.txt"
            },
            {
                name: "Juice WRLD - Flaws And Sins",
                src: "/songs/Flaws_And_Sins.mp3",
                artwork: "/images/artwork/5.jpg",
                lyricsFile: "1_sample.txt"
            },
            {
                name: "Juice WRLD - Hear Me Calling",
                src: "/songs/Hear_Me_Calling.mp3",
                artwork: "/images/artwork/5.jpg",
                lyricsFile: "1_sample.txt"
            },
            {
                name: "Juice WRLD - HeMotions",
                src: "/songs/HeMotions.mp3",
                artwork: "/images/artwork/5.jpg",
                lyricsFile: "1_sample.txt"
            },
            {
                name: "Juice WRLD - Make Believe",
                src: "/songs/Make_Believe.mp3",
                artwork: "/images/artwork/5.jpg",
                lyricsFile: "1_sample.txt"
            },
            {
                name: "Juice WRLD - Maze",
                src: "/songs/Maze.mp3",
                artwork: "/images/artwork/5.jpg",
                lyricsFile: "1_sample.txt"
            },
            {
                name: "Juice WRLD - ON GOD (feat. Young Thug)",
                src: "/songs/ON_GOD_(feat. Young Thug).mp3",
                artwork: "/images/artwork/5.jpg",
                lyricsFile: "1_sample.txt"
            },
            {
                name: "Juice WRLD - Out My Way",
                src: "/songs/Out_My_Way.mp3",
                artwork: "/images/artwork/5.jpg",
                lyricsFile: "1_sample.txt"
            },
            {
                name: "Juice WRLD - Rider",
                src: "/songs/Rider.mp3",
                artwork: "/images/artwork/5.jpg",
                lyricsFile: "1_sample.txt"
            },
            {
                name: "Juice WRLD - Ring Ring (with Rvssian feat. Clever)",
                src: "/songs/Ring_Ring_(with Rvssian feat. Clever).mp3",
                artwork: "/images/artwork/5.jpg",
                lyricsFile: "1_sample.txt"
            },
            {
                name: "Juice WRLD - Robbery",
                src: "/songs/Robbery.mp3",
                artwork: "/images/artwork/5.jpg",
                lyricsFile: "1_sample.txt"
            },
            {
                name: "Juice WRLD - She’s The One",
                src: "/songs/She’s_The_One.mp3",
                artwork: "/images/artwork/5.jpg",
                lyricsFile: "1_sample.txt"
            },
            {
                name: "Juice WRLD - Syphilis",
                src: "/songs/Syphilis.mp3",
                artwork: "/images/artwork/5.jpg",
                lyricsFile: "1_sample.txt"
            },
            {
                name: "Juice WRLD - The Bees Knees",
                src: "/songs/The_Bees_Knees.mp3",
                artwork: "/images/artwork/5.jpg",
                lyricsFile: "1_sample.txt"
            },
            {
                name: "Juice WRLD - Who Shot Cupid",
                src: "/songs/Who_Shot_Cupid.mp3",
                artwork: "/images/artwork/5.jpg",
                lyricsFile: "1_sample.txt"
            },
            {
                name: "Juice WRLD - Won’t Let Go",
                src: "/songs/Won’t_Let_Go.mp3",
                artwork: "/images/artwork/5.jpg",
                lyricsFile: "1_sample.txt"
            },
        ];

        let currentSongIndex = -1;

        function loadRandomSong() {
            const randomIndex = Math.floor(Math.random() * songs.length);
            currentSongIndex = randomIndex;
            const randomSong = songs[randomIndex];

            audioPlayer.src = randomSong.src;
            songName.textContent = randomSong.name;
            songArtwork.src = randomSong.artwork;
            
            fetch(`/lyrics/${randomSong.lyricsFile}`)
                .then(response => response.text())
                .then(data => {
                    lyrics.innerHTML = `<h3>Lyrics:</h3><div id="highlighted-lyrics">${data}</div>`;
                })
                .catch(error => {
                    lyrics.innerHTML = `<h3>Lyrics:</h3>Lyrics not found for this song.`;
                });
                
            document.title = randomSong.name;
        }

        loadRandomSong();

        // Keyboard event listener for the "Z" key
        document.addEventListener("keydown", event => {
            if (event.key === "Z" || event.key === "z") {
                loadRandomSong();
                audioPlayer.play();
                playPauseButton.textContent = "Pause";
            }
        });

        audioPlayer.addEventListener("timeupdate", () => {
            const currentTime = audioPlayer.currentTime;
            const lyricsContainer = document.getElementById("highlighted-lyrics");
            
            const lines = lyricsContainer.querySelectorAll("p");
            for (const line of lines) {
                const start = parseFloat(line.dataset.start);
                const end = parseFloat(line.dataset.end);
                if (!isNaN(start) && !isNaN(end) && currentTime >= start && currentTime < end) {
                    line.classList.add("highlight");
                } else {
                    line.classList.remove("highlight");
                }
            }
        });

        audioPlayer.addEventListener("ended", () => {
            loadRandomSong();
            audioPlayer.play();
            playPauseButton.textContent = "Pause";
        });

        playPauseButton.addEventListener("click", () => {
            if (audioPlayer.paused) {
                audioPlayer.play();
                playPauseButton.textContent = "Pause";
            } else {
                audioPlayer.pause();
                playPauseButton.textContent = "Play";
            }
        });

        nextSongButton.addEventListener("click", () => {
            loadRandomSong();
            audioPlayer.play();
            playPauseButton.textContent = "Pause";
        }); 
// Define a function to display search results
function displaySearchResults(results) {
    const searchResultsList = document.getElementById("search-results-list");
    searchResultsList.innerHTML = ""; // Clear previous results

    if (results.length === 0) {
        searchResultsList.innerHTML = "<p>No matching songs found.</p>";
        return;
    }

    // Loop through the search results and create clickable items
    results.forEach((result, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = result.name;
        listItem.classList.add("search-result-item");
        
        // Add a click event listener to change the song when clicked
        listItem.addEventListener("click", () => {
            currentSongIndex = result.index;
            const matchedSong = songs[result.index];

            audioPlayer.src = matchedSong.src;
            songName.textContent = matchedSong.name;
            songArtwork.src = matchedSong.artwork;
            
            fetch(`/lyrics/${matchedSong.lyricsFile}`)
                .then(response => response.text())
                .then(data => {
                    lyrics.innerHTML = `<h3>Lyrics:</h3><div id="highlighted-lyrics">${data}</div>`;
                })
                .catch(error => {
                    lyrics.innerHTML = `<h3>Lyrics:</h3>Lyrics not found for this song.`;
                });

            document.title = matchedSong.name;
            audioPlayer.play();
            playPauseButton.textContent = "Pause";

            // Clear the search results after selecting a song
            searchResultsList.innerHTML = "";
        });

        searchResultsList.appendChild(listItem);
    });
}

// Update the search functionality to filter songs based on the query
function searchForSong(query) {
    query = query.toLowerCase(); // Convert the query to lowercase for case-insensitive search
    const results = [];

    // Loop through the songs array to find matching songs
    for (let i = 0; i < songs.length; i++) {
        const song = songs[i];
        const songNameLower = song.name.toLowerCase();
        
        // Check if the song name contains the query
        if (songNameLower.includes(query)) {
            results.push({ name: song.name, index: i });
        }
    }

    displaySearchResults(results);
}

// Add an event listener to the search button
const searchButton = document.getElementById("search-button");
const searchBar = document.getElementById("search-bar");

searchButton.addEventListener("click", () => {
    const query = searchBar.value;
    if (query.trim() !== "") {
        searchForSong(query);
    }
});

// Add an event listener to the search bar for pressing Enter
searchBar.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        const query = searchBar.value;
        if (query.trim() !== "") {
            searchForSong(query);
        }
    }
});

// DISABLES THE STEALING OF THE CODE GOD THANK YOU FOR MAKING THIS POSSIBLE
 // disable right click
document.oncontextmenu = function (e) {
    e.preventDefault()
    return false;
}
// disable somme additional key
document.onkeydown = function (e) {
    // disable f12
    if (event.keyCode == 123) {
        return false;
    }
    // disable ctrl+shift+I
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    // disable ctrl+shift+C
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
        return false;
    }
    // disable ctrl+shift+j
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    // disable ctrl+shift+U
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
} 
// DISABLES THE STEALING OF THE CODE GOD THANK YOU FOR MAKING THIS POSSIBLE