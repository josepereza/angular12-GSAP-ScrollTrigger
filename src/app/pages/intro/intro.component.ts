import { Component, OnInit } from '@angular/core';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    gsap.fromTo("#cartel", { x: -300, opacity: 0 }, {
      scrollTrigger: { trigger: '.portada', start: '50% 20%', toggleActions: "restart none restart none" }, duration: 2, x: 0, opacity: 1
    });

    gsap.fromTo("#cartel2", { x: -300, opacity: 0 }, {
      scrollTrigger: { trigger: '#cartel', start: '50% 20%', toggleActions: "restart none restart none" }, duration: 2, x: 0, opacity: 1
    });
  }




}
