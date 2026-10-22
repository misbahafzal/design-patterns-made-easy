// Iterator: walk through a collection one item at a time.
// Run: node index.js

class Playlist {
  constructor() { this.songs = []; }
  add(song) { this.songs.push(song); }

  // This makes the playlist work with for...of
  [Symbol.iterator]() {
    let index = 0;
    const songs = this.songs;
    return {
      next: () =>
        index < songs.length
          ? { value: songs[index++], done: false }
          : { value: undefined, done: true },
    };
  }
}

const playlist = new Playlist();
playlist.add("Song A");
playlist.add("Song B");
playlist.add("Song C");

for (const song of playlist) {
  console.log(song); // Song A, Song B, Song C
}
