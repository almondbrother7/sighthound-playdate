import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';

export interface LightboxImage {
  src: string;
  caption?: string;
}

@Component({
  selector: 'app-lightbox',
  templateUrl: './lightbox.component.html',
  styleUrls: ['./lightbox.component.css']
})
export class LightboxComponent {
  @Input() images: LightboxImage[] = [];
  @Input() startIndex = 0;
  @Output() closed = new EventEmitter<void>();

  currentIndex = 0;

  ngOnInit() {
    this.currentIndex = this.startIndex;
  }

  get currentImage() {
    return this.images[this.currentIndex];
  }

  close() {
    this.closed.emit();
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  // Keyboard shortcuts
  @HostListener('document:keydown', ['$event'])
  handleKey(event: KeyboardEvent) {
    if (event.key === 'Escape') this.close();
    if (event.key === 'ArrowRight') this.next();
    if (event.key === 'ArrowLeft') this.prev();
  }
}
