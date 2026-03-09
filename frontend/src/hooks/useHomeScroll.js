import { useEffect, useRef, useState } from 'react';

export function useScrollReveal(options = { threshold: 0.1 }) {
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        }, options);

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, [options.threshold]);

    return ref;
}

export function useCountUp(endValue, duration = 2000) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);

    useEffect(() => {
        let startTime;
        let animationFrame;
        let observer;

        const startCounting = () => {
            const step = (timestamp) => {
                if (!startTime) startTime = timestamp;
                const progress = Math.min((timestamp - startTime) / duration, 1);

                // easeOutQuart
                const easeProgress = 1 - Math.pow(1 - progress, 4);
                setCount(Math.floor(easeProgress * endValue));

                if (progress < 1) {
                    animationFrame = requestAnimationFrame(step);
                }
            };
            animationFrame = requestAnimationFrame(step);
        };

        observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                startCounting();
                observer.unobserve(entry.target);
            }
        }, { threshold: 0.1 });

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (animationFrame) cancelAnimationFrame(animationFrame);
            if (observer) observer.disconnect();
        };
    }, [endValue, duration]);

    return { ref, count };
}
