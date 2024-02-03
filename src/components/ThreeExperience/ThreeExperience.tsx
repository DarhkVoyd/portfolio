'use client'
import { useEffect, useRef } from 'react';
import startExperience from './startAnimation';
import styles from './ThreeExperience.module.css';

export default function ThreeExperience() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    useEffect(() => {
        if (canvasRef.current) {
            startExperience(canvasRef.current);
        }
    }, []);

    return <canvas id={styles.webgl} ref={canvasRef}></canvas>;
}

