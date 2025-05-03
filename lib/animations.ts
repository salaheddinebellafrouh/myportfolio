import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// Make sure to register plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const fadeInUp = (element: Element, delay: number = 0, duration: number = 0.6) => {
  gsap.fromTo(
    element,
    {
      y: 50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: duration,
      delay: delay,
      ease: 'power3.out',
    }
  );
};

export const staggerFadeInUp = (elements: Element[], delay: number = 0, stagger: number = 0.1) => {
  gsap.fromTo(
    elements,
    {
      y: 50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.6,
      delay: delay,
      stagger: stagger,
      ease: 'power3.out',
    }
  );
};

export const fadeIn = (element: Element, delay: number = 0) => {
  gsap.fromTo(
    element,
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 0.8,
      delay: delay,
      ease: 'power2.out',
    }
  );
};

export const scaleIn = (element: Element, delay: number = 0) => {
  gsap.fromTo(
    element,
    {
      scale: 0.8,
      opacity: 0,
    },
    {
      scale: 1,
      opacity: 1,
      duration: 0.6,
      delay: delay,
      ease: 'back.out(1.7)',
    }
  );
};

export const initScrollAnimations = () => {
  const fadeUpElements = document.querySelectorAll('.gsap-fade-up');
  
  fadeUpElements.forEach(element => {
    gsap.fromTo(
      element,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
        },
        ease: 'power2.out',
      }
    );
  });

  const staggerElements = document.querySelectorAll('.gsap-stagger-container');
  
  staggerElements.forEach(container => {
    const items = container.querySelectorAll('.gsap-stagger-item');
    
    gsap.fromTo(
      items,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: container,
          start: 'top 85%',
        },
        ease: 'power2.out',
      }
    );
  });
};