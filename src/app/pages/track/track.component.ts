import { Component } from '@angular/core';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent {
  galleryImages = [
      { src: 'assets/images/track/turn1.jpg', caption: 'Track view 1 '},
      { src: 'assets/images/track/turn2.jpg', caption: 'Track view 2 '},
      { src: 'assets/images/track/turn3.jpg', caption: 'Track view 3 '},
      { src: 'assets/images/track/turn4.jpg', caption: 'Track view 4 '},
      { src: 'assets/images/track/turn5.jpg', caption: 'Track view 5 '},
      { src: 'assets/images/track/turn6.jpg', caption: 'Track view 6 '},
      { src: 'assets/images/track/starting-gate.jpg', caption: 'Track view 7 '},
      { src: 'assets/images/track/front-straight.jpg', caption: 'Track view 8 '},
      { src: 'assets/images/track/bamboo-shortcut.jpg', caption: 'Track view 9 '},
      { src: 'assets/images/track/bamboo-straight.jpg', caption: 'Track view 10 '},
      { src: 'assets/images/track/bamboo-straight2.jpg', caption: 'Track view 11 '},
      { src: 'assets/images/track/banana-shortcut.jpg', caption: 'Track view 12 '},
      { src: 'assets/images/track/deck-straight.jpg', caption: 'Track view 13 '},
      { src: 'assets/images/track/east-straight.jpg', caption: 'Track view 14 '},
      { src: 'assets/images/track/front-straight.jpg', caption: 'Track view 15 '},
      { src: 'assets/images/track/hound-playground.jpg', caption: 'Track view 16 '},
      { src: 'assets/images/track/playground.jpg', caption: 'Track view 17 '},
      { src: 'assets/images/track/playground2.jpg', caption: 'Track view 18 '},
      { src: 'assets/images/track/track1-backside.jpg', caption: 'Track view 19 '},
      { src: 'assets/images/track/viewing-gallery.jpg', caption: 'Track view 20 '},
      { src: 'assets/images/track/west-return.jpg', caption: 'Track view 21 '},
      { src: 'assets/images/track/north-straight.jpg', caption: 'Track view 22 '},
      { src: 'assets/images/track/west-straight.jpg', caption: 'Track view 23 '},

      { src: 'assets/images/grounds/grounds1.jpg', caption: 'Track view 24 '},
      { src: 'assets/images/grounds/grounds2.jpg', caption: 'Track view 25 '},
      { src: 'assets/images/grounds/grounds3.jpg', caption: 'Track view 26 '},
      { src: 'assets/images/grounds/grounds4.jpg', caption: 'Track view 27 '},
      { src: 'assets/images/grounds/grounds5.jpg', caption: 'Track view 28 '},
      { src: 'assets/images/grounds/grounds6.jpg', caption: 'Track view 29 '},
      { src: 'assets/images/grounds/grounds7.jpg', caption: 'Track view 30 '},
      { src: 'assets/images/grounds/grounds8.jpg', caption: 'Track view 31 '},
      { src: 'assets/images/grounds/grounds9.jpg', caption: 'Track view 32 '},
      { src: 'assets/images/grounds/grounds10.jpg', caption: 'Track view 33 '},
      { src: 'assets/images/grounds/grounds11.jpg', caption: 'Track view 34 '},
      { src: 'assets/images/grounds/grounds12.jpg', caption: 'Track view 35 '},
      { src: 'assets/images/grounds/grounds13.jpg', caption: 'Track view 36 '},
      { src: 'assets/images/grounds/grounds14.jpg', caption: 'Track view 37 '},
      { src: 'assets/images/grounds/grounds15.jpg', caption: 'Track view 38 '},
      { src: 'assets/images/grounds/grounds16.jpg', caption: 'Track view 39 '},
      { src: 'assets/images/grounds/grounds17.jpg', caption: 'Track view 40 '},
      { src: 'assets/images/grounds/grounds18.jpg', caption: 'Track view 41 '},
      { src: 'assets/images/grounds/grounds19.jpg', caption: 'Track view 42 '},
      { src: 'assets/images/grounds/grounds20.jpg', caption: 'Track view 43 '},
      { src: 'assets/images/grounds/grounds21.jpg', caption: 'Track view 44 '},
      { src: 'assets/images/grounds/grounds22.jpg', caption: 'Track view 45 '},

    ];

  visibleLightbox = false;
  clickedIndex = 0;
  visibleCount = 6;
  increment = 6;

  loadMore() {
    this.visibleCount += this.increment;
    setTimeout(() => {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }, 50);
  }

  openLightbox(index: number) {
    this.clickedIndex = index;
    this.visibleLightbox = true;
  }
}
