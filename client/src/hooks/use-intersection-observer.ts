import { useEffect, useRef, useState } from 'react';

interface UseIntersectionObserverProps {
  threshold?: number;
  root?: Element | null;
  rootMargin?: string;
  freezeOnceVisible?: boolean;
}

export function useIntersectionObserver<T extends HTMLElement = HTMLDivElement>({
  threshold = 0.1,
  root = null,
  rootMargin = '0px',
  freezeOnceVisible = true,
}: UseIntersectionObserverProps = {}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<T>(null);
  
  useEffect(() => {
    const node = ref?.current;
    
    if (!node) return;
    
    const observerCallback: IntersectionObserverCallback = (entries) => {
      const [entry] = entries;
      if (entry?.isIntersecting) {
        setIsVisible(true);
        
        if (freezeOnceVisible) {
          observer.disconnect();
        }
      } else {
        if (!freezeOnceVisible) {
          setIsVisible(false);
        }
      }
    };
    
    const observer = new IntersectionObserver(observerCallback, {
      threshold,
      root,
      rootMargin,
    });
    
    observer.observe(node);
    
    return () => {
      observer.disconnect();
    };
  }, [threshold, root, rootMargin, freezeOnceVisible]);
  
  return { ref, isVisible };
}