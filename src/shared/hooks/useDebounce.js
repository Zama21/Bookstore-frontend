import { useEffect, useRef, useState } from 'react';

export const useDebonuce = (value, delay, observe) => {
    const timerRef = useRef();
    const [debounced, setDebounced] = useState(value);

    useEffect(() => {
        if (timerRef.current) clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => {
            setDebounced(value);
        }, delay);

        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
        };
    }, [observe ?? value]);

    return debounced;
};
