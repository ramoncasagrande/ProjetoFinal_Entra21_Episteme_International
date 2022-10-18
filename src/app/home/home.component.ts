import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    autoHeight:true,
    autoplay: true,
    autoWidth: true,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 2
      },
      940: {
        items: 2
      }
    },
    nav: true
  }

  @Input() showArrow:boolean = false;
  imgCollection: Array<object> = [
    {
      image: '../assets/imagens/slider1.jpg',
      thumbImage: '../assets/imagens/slider1.jpg',
      alt: '',
      title: ''
    }, {
      image: '../assets/imagens/slider2.jpg',
      thumbImage: '../assets/imagens/slider2.jpg',
      title: '',
      alt: ''
    }, {
      image: '../assets/imagens/slider3.jpg',
      thumbImage: '../assets/imagens/slider3.jpg',
      title: '',
      alt: ''
    }, {
      image: '../assets/imagens/slider4.jpg',
      thumbImage: '../assets/imagens/slider4.jpg',
      title: '',
      alt: ''
    }, {
      image: '../assets/imagens/slider5.jpg',
      thumbImage: '../assets/imagens/slider5.jpg',
      title: '',
      alt: ''
    },{
      image: '../assets/imagens/slider6.jpg',
      thumbImage: '../assets/imagens/slider6.jpg',
      title: '',
      alt: ''
    }
];

 
}
