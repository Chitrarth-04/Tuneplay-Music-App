const music = new Audio('audio/1.mp3');
//  music.play();

const songs = [
    {
        id: '1',
        songname: 'Starboy <br> <div class="subtitle">The Weeknd</div>',
        poster: 'img/1.jpeg'
    },
    {
        id: '2',
        songname: 'Sunflower <br> <div class="subtitle">Post Malone</div>',
        poster: 'img/2.jpeg'
    },
    {
        id: '3',
        songname: 'Waiting for Love <br> <div class="subtitle">Avicii</div>',
        poster: 'img/3.jpeg'
    },
    {
        id: '4',
        songname: 'Sicko Mode <br> <div class="subtitle">Travis Scott</div>',
        poster: 'img/4.jpeg'
    },
    {
        id: '5',
        songname: 'Lucid Dreams <br> <div class="subtitle">Juice Wrld</div>',
        poster: 'img/5.jpeg'
    },
    {
        id: '6',
        songname: 'Gods Plan <br> <div class="subtitle">Drake</div>',
        poster: 'img/6.jpeg'
    },
    {
        id: '7',
        songname: 'Love Yourself <br> <div class="subtitle">Justin Bieber</div>',
        poster: 'img/7.jpeg'
    },
    {
        id: '8',
        songname: 'The Color Violet <br> <div class="subtitle">Tony Loren</div>',
        poster: 'img/8.jpeg'
    },
    {
        id: '9',
        songname: 'Desi Kalakar <br> <div class="subtitle">Yo Yo Honey Singh</div>',
        poster: 'img/9.jpeg'
    },
    {
        id: '10',
        songname: 'Self Love <br> <div class="subtitle">Metro Booming</div>',
        poster: 'img/10.jpeg'
    },
    {
        id: '11',
        songname: 'Raindrops <br> <div class="subtitle">Future</div>',
        poster: 'img/11.jpeg'
    },
    {
        id: '12',
        songname: 'Heartless <br> <div class="subtitle">The Weeknd</div>',
        poster: 'img/12.jpeg'
    },
    {
        id: '13',
        songname: 'Shape Of You <br> <div class="subtitle">Ed Sheeran</div>',
        poster: 'img/13.jpeg'
    },
    {
        id: '14',
        songname: 'Downers at Dusk <br> <div class="subtitle">Talha Anjum</div>',
        poster: 'img/14.jpeg'
    },
    {
        id: '15',
        songname: 'Greater than One <br> <div class="subtitle">Valorant</div>',
        poster: 'img/15.jpeg'
    },
    {
        id: '16',
        songname: 'Fair Trade <br> <div class="subtitle">Drake</div>',
        poster: 'img/16.jpeg'
    },
    {
        id: '17',
        songname: 'We dont Talk Anymore <br> <div class="subtitle">Charlie Puth</div>',
        poster: 'img/17.jpeg'
    },
    { 
        id: '18',
        songname: 'Without Me <br> <div class="subtitle">Eminem</div>',
        poster: 'img/18.jpg'
    },
    {
        id: '19',
        songname: 'Faded <br> <div class="subtitle">Alan Walker</div>',
        poster: 'img/19.jpeg'
    },
    {
        id: '20',
        songname: 'On and On <br> <div class="subtitle">Cartoon-NCS</div>',
        poster: 'img/20.jpeg'
    },
    {
        id: '21',
        songname: 'I Wonder <br> <div class="subtitle">Kanye West</div>',
        poster: 'img/21.jpeg'
    },
    {
        id: '22',
        songname: 'Khayal <br> <div class="subtitle">Mitraaz</div>',
        poster: 'img/22.jpeg'
    },
    {
        id: '23',
        songname: 'Better <br> <div class="subtitle">Khalid</div>',
        poster: 'img/23.jpeg'
    },
    {
        id: '24',
        songname: 'SAD <br> <div class="subtitle">XXXENTATION</div>',
        poster: 'img/24.png'
    },
]

Array.from(document.getElementsByClassName('songItem')).forEach((e,i) => {
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songname
})

let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');

masterPlay.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-circle-fill');
        masterPlay.classList.add('bi-pause-circle-fill');
    }   else {
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add('bi-play-circle-fill');
        masterPlay.classList.remove('bi-pause-circle-fill');
    }
});

let index = 0;
let Poster_master_play = document.getElementById('Poster_master_play');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('playListPlay')).forEach((e) => {
    e.addEventListener('click',(el)=>{
        index = el.target.id;
        // console.log(index);
        music.src = `audio/${index}.mp3`;
        Poster_master_play.src = `img/${index}.jpeg`;
        music.play();
        
        let songTitles = songs.filter((els) =>{
            return els.id == index;
        });

        songTitles.forEach(elss => {
            let { songname } = elss;
            title.innerHTML = songname;
        });
    })
})

const makeAllplays = () => {
    Array.from(document.getElementsByClassName('playListPlay')).forEach((el) => {
        el.classList.add('bi-play-circle-fill');
        el.classList.remove('bi-pause-circle-fill');
    });


    makeAllplays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
};
    

let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];



music.addEventListener('timeupdate', ()=>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);

    if (sec1 < 10) {
        sec1 = `0${sec1}`;
    }
    currentEnd.innerText = `${min1}:${sec1}`;

    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);

    if (sec2 < 10) {
        sec2 = `0${sec2}`;
    }
    currentStart.innerText = `${min2}:${sec2}`;

    let progressBar = parseInt((music_curr / music_dur) * 100);
    seek.value = progressBar;
    // console.log(seek.value);
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
});

seek.addEventListener('change', () => {
    music.currentTime = seek.value * music.duration / 100;
});

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
let vol_dot = document.getElementById('vol_dot');

vol.addEventListener('change',() => {
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-mute-fill');
    }
    if (vol.value > 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
    }
    if (vol.value > 50) {
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
    }
    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a / 100;
});

let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];


pop_song_right.addEventListener('click',() => {
    pop_song.scrollLeft += 330;
});
pop_song_left.addEventListener('click',() => {
    pop_song.scrollLeft -= 330;
});

let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let items = document.getElementsByClassName('items')[0];


pop_art_right.addEventListener('click',() => {
    items.scrollLeft += 330;
});
pop_art_left.addEventListener('click',() => {
    items.scrollLeft -= 330;
});
