import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const gsapInit = () => {
  gsap.registerPlugin(ScrollTrigger)
  gsap.utils.toArray<HTMLElement>('[data-gsap-item="pin"]').forEach( pin => {
    const before = pin.querySelector('[data-gsap-item="before"]') as HTMLElement
    const content = before.querySelector('[data-gsap-item="before"] > *') as HTMLElement
    content.style.width = `${before.clientWidth}px`
    pin.style.height = `${content.clientHeight}px`
    gsap.to(before, {
      width: 0,
      scrollTrigger: {
        trigger: pin,
        start: 'top +=96',
        end: () => `bottom top`,
        pin: pin,
        scrub: true,
      }
    })
  })
}

export { gsapInit }
