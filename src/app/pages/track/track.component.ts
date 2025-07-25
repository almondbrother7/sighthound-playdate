import { Component } from '@angular/core';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent {

  constructor() {}

  galleryImages = [
      { src: 'assets/images/track/turn1.jpg', caption: 'Turn 1 '},
      { src: 'assets/images/track/turn2.jpg', caption: 'Turn 2 '},
      { src: 'assets/images/track/turn3.jpg', caption: 'Turn 3 '},
      { src: 'assets/images/track/turn4.jpg', caption: 'Turn 4 '},
      { src: 'assets/images/track/turn5.jpg', caption: 'Turn 5 '},
      { src: 'assets/images/track/turn6.jpg', caption: 'Turn 6 '},
      { src: 'assets/images/track/starting-gate.jpg', caption: 'Starting Gate'},
      { src: 'assets/images/track/front-straight.jpg', caption: 'Front Straight'},
      { src: 'assets/images/track/bamboo-shortcut.jpg', caption: 'Bamboo Shortcut'},
      { src: 'assets/images/track/bamboo-straight.jpg', caption: 'Bamboo Straight '},
      { src: 'assets/images/track/banana-shortcut.jpg', caption: 'Banana Shortcut '},
      { src: 'assets/images/track/deck-cut-through.jpg', caption: 'Deck Straight'},
      { src: 'assets/images/track/east-straight.jpg', caption: 'East Straight'},
      { src: 'assets/images/track/south-straight.jpg', caption: 'South Straight'},
      { src: 'assets/images/track/playground.jpg', caption: 'Hound Playground'},
      { src: 'assets/images/track/track1-backside.jpg', caption: 'Track 1 Backside'},
      { src: 'assets/images/track/viewing-gallery.jpg', caption: 'Viewing Gallery'},
      { src: 'assets/images/track/west-return.jpg', caption: 'West Return'},
      { src: 'assets/images/track/north-straight.jpg', caption: 'North Straight'},
      { src: 'assets/images/track/west-straight.jpg', caption: 'West Straight'},
      { src: 'assets/images/track/come-and-play.jpg', caption: 'Hound Playground'},
      { src: 'assets/images/track/found-ya.jpg', caption: 'Found Ya'},
      { src: 'assets/images/track/north-straight.jpg', caption: 'North Straight'},
      { src: 'assets/images/track/pack-area.jpg', caption: 'Pack Area'},
      { src: 'assets/images/track/playground-3.jpg', caption: 'Hound Playground'},
      { src: 'assets/images/track/playsafe-groud-cover.jpg', caption: 'Playsafe Mulch'},
      { src: 'assets/images/track/track1-return.jpg', caption: 'Track 1 Return'},
      { src: 'assets/images/track/track1-walk-through.jpg', caption: 'Track 1 Walkthru'},
      { src: 'assets/images/track/track2-walk-through.jpg', caption: 'Track 2 Walkthru'},
      { src: 'assets/images/track/track2-approach.jpg', caption: 'Track 2 Approach'},
      { src: 'assets/images/track/track2.jpg', caption: 'Track 2'},
      { src: 'assets/images/track/turn4-out.jpg', caption: 'Turn 4 Out'},
      { src: 'assets/images/track/turn5-approach.jpg', caption: 'Turn 5 Approach'},
      { src: 'assets/images/track/viewing-area.jpg', caption: 'Viewing Area'},
      { src: 'assets/images/track/viewing-gallery.jpg', caption: 'Viewing Gallery'},

      { src: 'assets/images/grounds/african-blue-basil.jpg', caption: 'African Blue Basil'},
      { src: 'assets/images/grounds/asian-hibiscus.jpg', caption: 'Asian Hibiscus'},
      { src: 'assets/images/grounds/bamboo.jpg', caption: 'Bamboo'},
      { src: 'assets/images/grounds/bananas.jpg', caption: 'Banana'},
      { src: 'assets/images/grounds/barbados-cherry.jpg', caption: 'Barbados Cherry'},
      { src: 'assets/images/grounds/blanket-flower.jpg', caption: 'Blanket Flower'},
      { src: 'assets/images/grounds/butterfly-pea.jpg', caption: 'Butterfly Pea'},
      { src: 'assets/images/grounds/chili-peppers.jpg', caption: 'Chili Peppers'},
      { src: 'assets/images/grounds/coral-vine.jpg', caption: 'Coral- Vine'},
      { src: 'assets/images/grounds/cranberry-hibuscus.jpg', caption: 'Cranberry Hibuscus'},
      { src: 'assets/images/grounds/curcoma.jpg', caption: 'Curcoma'},
      { src: 'assets/images/grounds/fig.jpg', caption: 'Fig'},
      { src: 'assets/images/grounds/firebush.jpg', caption: 'Firebush'},
      { src: 'assets/images/grounds/geraniums.jpg', caption: 'Geraniums'},
      { src: 'assets/images/grounds/golden-trumpet.jpg', caption: 'Golden Trumpet'},
      { src: 'assets/images/grounds/honeykiss-mango.jpg', caption: 'Honeykiss Mango'},
      { src: 'assets/images/grounds/japanese-maple.jpg', caption: 'Japanese Maple'},
      { src: 'assets/images/grounds/jatropha.jpg', caption: 'Jatropha'},
      { src: 'assets/images/grounds/kent-mango.jpg', caption: 'Kent Mango'},
      { src: 'assets/images/grounds/mahachinok-mango.jpg', caption: 'Mahachinok Mango'},
      { src: 'assets/images/grounds/marigolds.jpg', caption: 'Marigolds'},
      { src: 'assets/images/grounds/mexican-sunflower.jpg', caption: 'Mexican Sunflower'},
      { src: 'assets/images/grounds/milk-weed.jpg', caption: 'Milkweed'},
      { src: 'assets/images/grounds/papayas.jpg', caption: 'Papayas'},
      { src: 'assets/images/grounds/paper-lily.jpg', caption: 'Paper Lily'},
      { src: 'assets/images/grounds/pineapples.jpg', caption: 'Pineapples'},
      { src: 'assets/images/grounds/porter-weed.jpg', caption: 'Porterweed'},
      { src: 'assets/images/grounds/sidewalk-cut-through.jpg', caption: 'Sidewalk Cut Through'},
      { src: 'assets/images/grounds/song-of-india.jpg', caption: 'Song Of India'},
      { src: 'assets/images/grounds/spider-lily.jpg', caption: 'Spider Lily'},
      { src: 'assets/images/grounds/star-jasmine.jpg', caption: 'Star Jasmine'},
      { src: 'assets/images/grounds/wild-lime.jpg', caption: 'Wild Lime'},
      { src: 'assets/images/grounds/wild-passion-vine.jpg', caption: 'Wild Passion Vine'},
      { src: 'assets/images/grounds/your-pack.jpg', caption: 'your-pack'},

    ];

  visibleLightbox = false;
  clickedIndex = 0;
  visibleCount = 8;
  increment = 8;

  loadMore() {
    this.visibleCount += this.increment;

    // Wait a bit for Angular to render the new DOM
    setTimeout(() => {
      const scrollHeight = document.documentElement.scrollHeight;

      window.scrollTo({
        top: scrollHeight,
        behavior: 'smooth'
      });
    }, 50);
  }

  openLightbox(index: number) {
    this.clickedIndex = index;
    this.visibleLightbox = true;
  }
}
