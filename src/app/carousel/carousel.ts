import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-carousel',
  imports: [CommonModule],
  templateUrl: './carousel.html',
  styleUrl: './carousel.css',
})
export class Carousel {
  @Input() images : string[] = [];
  @Input() isMobile :boolean = false;
  @Input() topLeft? : string ;
  @Input() topRight? : string ;
  @Input() timerEnabled : boolean = false;
  currentIndex: number = 0;

  ngOnInit() {
    if(this.timerEnabled ){
        this.startTimer();
    }
  }
  startTimer() {
  const advance = () => {
    this.currentIndex++;
    if (this.currentIndex >= this.images.length) {
      this.currentIndex = 0;
    }
    this.changeImage();

    // schedule the next run
    setTimeout(advance, 5000);
  };

  // kick off the first run
  setTimeout(advance, 5000);
}

  changeImage(){
    const element=document.getElementsByClassName("carousel-track")[0] as HTMLElement;
    const carouselItem=document.getElementsByClassName("carousel-item")[0] as HTMLElement;
    element.scrollTo(this.currentIndex*carouselItem.offsetWidth,0);
  }

  next(): void {
    if(this.images.length > this.currentIndex + 1){
      this.currentIndex++;
    }
  }

  prev() : void{
    if(this.currentIndex > 0){
      this.currentIndex--;
    }
  }

  dragging = false;
  currentScroll: number = 0;
  currentX: number = 0;
  
  onMouseDown(event: MouseEvent) {
    const track = event.currentTarget as HTMLElement;
    track.classList.add('active');
    this.currentX = event.screenX;
    //console.log("Mouse down event", event);
    this.dragging=true;
    const element=document.getElementsByClassName("carousel-track")[0] as HTMLElement;
    console.log("Mouse Down Current scroll", this.currentScroll);
    if(this.currentScroll!==0){
      element.scrollTo(this.currentScroll,0);
      
    }
    
  }

  onMouseMove(event: MouseEvent) {
    if (!this.dragging) return;
    
    const element=document.getElementsByClassName("carousel-track")[0] as HTMLElement;
    let deltaX = this.currentX - event.screenX;
    console.log("Element position"+element.scrollLeft);
    console.log("Delta "+deltaX);
    
    element.scrollTo(element.scrollLeft+deltaX,0);
    this.currentScroll=element.scrollLeft;
    
    
    //this.currentScroll+=element.scrollLeft+deltaX;
    this.currentX = event.screenX;
  }

  onMouseUp(event: MouseEvent) {
    
    
    if(this.dragging){
      const element=document.getElementsByClassName("carousel-track")[0] as HTMLElement;
      const track = event.currentTarget as HTMLElement;
      track.classList.remove('active');
      this.dragging=false;
      this.currentX =0;
      //element.scrollTo(this.currentScroll,0);
      console.log("Mouse up Current scroll", this.currentScroll);
      
    }
    
    
    
    
  }

  onScroll(event: Event) {
    const target = event.target as HTMLElement;
    const scrollLeft = target.scrollLeft;
    

    const itemWidth = target.clientWidth;
    
    let index = Math.round(scrollLeft / itemWidth);

    // Clamp to valid range
    if (index < 0) index = 0;
    if (index >= this.images.length) index = this.images.length - 1;

    this.currentIndex = index;
  }


}
