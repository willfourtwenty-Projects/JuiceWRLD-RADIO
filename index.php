<!DOCTYPE html>
<html>
<head>
    <title>JuiceWRLD Radio</title>
    <link rel="icon" type="image/gif" href="/images/icon.gif">
    <link rel="stylesheet" type="text/css" href="obfuscated.css">
</head>
<body>
    <div class="container">
        <h1>JuiceWRLD Radio</h1> 
        <div id="song-info">
            <h2 id="song-name"></h2>
            <img id="song-artwork" src="" alt="Song Artwork" width="200">
        </div>
        <audio id="audio-player" controls controlsList="nodownload">
    <source src="" type="audio/mpeg">
    Your browser does not support the audio element.
</audio>
        <button id="play-pause-button">Play</button>
        <button id="next-song-button">Click For Next Song<br>or<br>(Press Z)</button>
        <div class="lyrics-container"> 
            <p id="lyrics"> 
                Version 3.0 Holy Fucking Smokes
            </p>
        </div> 
        <input type="text" id="search-bar" placeholder="Search for a song">
<button id="search-button">Search</button>  
        <div class="footer">
        <p class="footer-text">Project made by <a class="footer-link" href="https://discordapp.com/users/1134609942083539025" target="_blank">willfourtwenty</a></p>
    </div>
        </div>  
        <div id="search-results" class="lyrics-container">
    <h3>Search Results:</h3>
    <ul id="search-results-list"> 
    </ul>  
</div> 
    <script src="/not_obfuscated.js"></script>
    
</body>
</html>
