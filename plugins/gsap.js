import gsap from "gsap"
// import { gsap } from "gsap/dist/gsap";
// import {
//     TweenMax
// }
// from 'TweenMax'
import { ScrollTrigger } from "gsap/ScrollTrigger";
if (process.client) {
    gsap.registerPlugin(ScrollTrigger);
}

// gsap.core.globals("ScrollTrigger", ScrollTrigger);
// gsap.registerPlugin(TweenMax);
