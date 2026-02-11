import { useRef, useEffect, useState } from 'react';
import { useInView, useSpring, useTransform } from 'framer-motion';

interface Props {
    value: number;
    duration?: number;
    prefix?: string;
    suffix?: string;
    decimals?: number;
}

const AnimatedCounter = ({ value, duration = 2, prefix = "", suffix = "", decimals = 0 }: Props) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const spring = useSpring(0, {
        duration: duration * 1000,
        bounce: 0,
    });

    const displayValue = useTransform(spring, (current) => {
        return prefix + current.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + suffix;
    });

    const [displayText, setDisplayText] = useState(prefix + (0).toFixed(decimals) + suffix);

    useEffect(() => {
        if (isInView) {
            spring.set(value);
        }
    }, [isInView, value, spring]);

    useEffect(() => {
        return displayValue.onChange((v) => setDisplayText(v));
    }, [displayValue]);

    return (
        <span ref={ref} className="tabular-nums">
            {displayText}
        </span>
    );
};

export default AnimatedCounter;
