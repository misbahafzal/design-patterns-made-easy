// Proxy: a stand-in that controls access to the real thing.
// Run: node index.js

class RealImage {
  constructor(file) { this.file = file; this.loadFromDisk(); }
  loadFromDisk() { console.log(`Loading ${this.file}`); }
  display() { console.log(`Showing ${this.file}`); }
}

class ImageProxy {
  constructor(file) { this.file = file; this.realImage = null; }
  display() {
    if (!this.realImage) this.realImage = new RealImage(this.file);
    this.realImage.display();
  }
}

const image = new ImageProxy("photo.png");
// nothing loaded yet
image.display(); // only now does it actually load
// Loading photo.png
// Showing photo.png
image.display(); // already loaded, so it just shows
// Showing photo.png
