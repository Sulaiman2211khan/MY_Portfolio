
import React, { useEffect, useRef, useState } from 'react';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

const FadeIn: React.FC<FadeInProps> = ({ children, delay = 0, direction = 'up', className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const directionToClassMap = {
    up: 'translate-y-5',
    down: '-translate-y-5',
    left: '-translate-x-5',
    right: 'translate-x-5',
  };

  const baseClasses = `transition-all ease-out duration-700`;
  const visibleClasses = 'opacity-100 translate-x-0 translate-y-0';
  const hiddenClasses = `opacity-0 ${directionToClassMap[direction]}`;

  return (
    <div
      ref={ref}
      className={`${className} ${baseClasses} ${isVisible ? visibleClasses : hiddenClasses}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default FadeIn;
