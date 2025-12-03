'use client';

import { useEffect, useRef } from 'react';

export default function WavesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const waveRef = useRef<Float32Array | null>(null);
  const prevWaveRef = useRef<Float32Array | null>(null);
  const animationRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set up canvas size
    const updateCanvasSize = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      if (rect) {
        canvas.width = rect.width * window.devicePixelRatio;
        canvas.height = rect.height * window.devicePixelRatio;
        ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      }
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    // Initialize wave arrays
    const width = Math.floor(canvas.width / window.devicePixelRatio / 20);
    const height = Math.floor(canvas.height / window.devicePixelRatio / 20);
    waveRef.current = new Float32Array(width * height);
    prevWaveRef.current = new Float32Array(width * height);

    // Simple noise function for wave variation
    const noise = (x: number, y: number, t: number) => {
      const n =
        Math.sin(x * 0.1 + t * 0.002) *
        Math.cos(y * 0.1 + t * 0.001);
      return n * 0.5 + 0.5;
    };

    // Handle mouse/touch movement
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleTouchMove = (e: TouchEvent) => {
      const rect = canvas.getBoundingClientRect();
      const touch = e.touches[0];
      mouseRef.current = {
        x: touch.clientX - rect.left,
        y: touch.clientY - rect.top,
      };
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('touchmove', handleTouchMove);

    // Animation loop
    const animate = (time: number) => {
      const wave = waveRef.current!;
      const prevWave = prevWaveRef.current!;
      const cellSize = 20;
      const cols = width;
      const rows = height;

      // Update wave simulation
      for (let y = 1; y < rows - 1; y++) {
        for (let x = 1; x < cols - 1; x++) {
          const idx = y * cols + x;
          const neighbors =
            (wave[(y - 1) * cols + x] +
              wave[(y + 1) * cols + x] +
              wave[y * cols + (x - 1)] +
              wave[y * cols + (x + 1)]) /
            4;

          const damping = 0.99;
          wave[idx] =
            neighbors * damping - (prevWave[idx] - wave[idx]) * damping;
        }
      }

      // Apply mouse/touch disturbance
      const mouseGridX = Math.floor(
        mouseRef.current.x / cellSize
      );
      const mouseGridY = Math.floor(
        mouseRef.current.y / cellSize
      );

      if (
        mouseGridX > 0 &&
        mouseGridX < cols &&
        mouseGridY > 0 &&
        mouseGridY < rows
      ) {
        wave[mouseGridY * cols + mouseGridX] = 1;
      }

      // Add ambient wave movement
      const centerX = cols / 2;
      const centerY = rows / 2;
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const idx = y * cols + x;
          const dist = Math.sqrt(
            Math.pow(x - centerX, 2) +
            Math.pow(y - centerY, 2)
          );
          wave[idx] +=
            (noise(x, y, time) - 0.5) * 0.05;
          wave[idx] *=
            Math.max(0, 1 - dist / Math.max(cols, rows));
        }
      }

      // Swap arrays
      const temp = prevWaveRef.current;
      prevWaveRef.current = waveRef.current;
      waveRef.current = temp;

      // Render
      ctx.clearRect(
        0,
        0,
        canvas.width / window.devicePixelRatio,
        canvas.height / window.devicePixelRatio
      );
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.25)';
      ctx.lineWidth = 1;

      // Draw wave grid
      for (let y = 0; y < rows - 1; y++) {
        for (let x = 0; x < cols - 1; x++) {
          const idx = y * cols + x;
          const h = wave[idx];

          const x1 = x * cellSize;
          const y1 = y * cellSize + h * 10;
          const x2 = (x + 1) * cellSize;
          const y2 = (y + 1) * cellSize + wave[idx + 1] * 10;

          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.stroke();

          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(x1, y1 + cellSize);
          ctx.stroke();
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('resize', updateCanvasSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ display: 'block' }}
    />
  );
}
