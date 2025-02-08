const apiKey = config.apiKey;
const user = config.user;

const url = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${user}&api_key=${apiKey}&format=json`;

const defaultImage = "assets/solid gray.jpg"; 


const PreloadedIMG = new Image();
PreloadedIMG.src = defaultImage;

let lastTrack = {
    songName: "",
    artist: "",
    image: "",
};

function getSongImage(track) {
    if (track.image && track.image[2]['#text'] && track.image[2]['#text'] !== "" && !track.image[2]['#text'].includes('2a96cbd8b46e442fc41c2b86b821562f')) {
        return track.image[2]['#text'];
    }
    return defaultImage;
}

function truncateText(texto, maxCaracteres) {
    return texto.length > maxCaracteres ? texto.slice(0, maxCaracteres) + '...' : texto;
}

function refreshContent() {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.recenttracks && data.recenttracks.track.length > 0) {
                const track = data.recenttracks.track[0];
                const songName = truncateText(track.name, 24);
                const artist = truncateText(track.artist['#text'], 24);
                const albumImage = getSongImage(track);

                if (
                    songName !== lastTrack.songName ||
                    artist !== lastTrack.artist ||
                    albumImage !== lastTrack.image
                ) {
                    lastTrack = { songName: songName, artist: artist, image: albumImage };

                    document.getElementById('artist').innerText = artist;
                    document.getElementById('album').innerText = songName;

                    const imgElemento = document.getElementById('image');
                    if (albumImage !== imgElemento.src) {
                        imgElemento.src = albumImage;
                    }
                }
            } else {
                document.getElementById('artist').innerText = "Couldn't get recent scrobbles.";
                document.getElementById('album').innerText = "";
                document.getElementById('image').src = defaultImage;
            }
        })
        .catch(error => {
            console.error('Error al obtener los scrobbles:', error);
            document.getElementById('artist').innerText = "Couldn't get recent scrobbles.";
            document.getElementById('album').innerText = "";
            document.getElementById('image').src = defaultImage;
        });
}


setInterval(refreshContent, 3000);
refreshContent();
