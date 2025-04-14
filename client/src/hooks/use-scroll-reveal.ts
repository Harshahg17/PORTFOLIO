import { useEffect, useRef } from 'react';

type AnimationDirection = 'up' | 'down' | 'left' | 'right' | 'fade';
type AnimationOptions = {
  threshold?: number;
  rootMargin?: string;
  direction?: AnimationDirection;
  delay?: number;
  duration?: number;
  once?: boolean;
};

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: AnimationOptions = {}
) {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    direction = 'up',
    delay = 0,
    duration = 600,
    once = true,
  } = options;
  
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    
    if (!element) return;
    
    // Initial state (hidden)
    const initialStyles = {
      opacity: '0',
      transform: 
        direction === 'up' ? 'translateY(40px)' : 
        direction === 'down' ? 'translateY(-40px)' : 
        direction === 'left' ? 'translateX(40px)' : 
        direction === 'right' ? 'translateX(-40px)' : 
        'translateY(0)',
      transition: `transform ${duration}ms ease-out ${delay}ms, opacity ${duration}ms ease-out ${delay}ms`,
    };
    
    // Visible state
    const visibleStyles = {
      opacity: '1',
      transform: 'translate(0)',
    };

    // Apply initial styles
    Object.assign(element.style, initialStyles);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          
          // Apply visible styles when element is in view
          const targetElement = entry.target as HTMLElement;
          Object.assign(targetElement.style, visibleStyles);
          
          if (once) {
            observer.disconnect();
          }
        });
      },
      { threshold, rootMargin }
    );
    
    observer.observe(element);
    
    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, direction, delay, duration, once]);
  
  return ref;
}