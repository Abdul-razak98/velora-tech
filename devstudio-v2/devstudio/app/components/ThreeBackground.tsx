"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Particles
    const particleCount = 1500;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 25;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 25;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 25;
      const color = Math.random() > 0.5
        ? new THREE.Color("#6B5CE7")
        : new THREE.Color("#8B7CF8");
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const mat = new THREE.PointsMaterial({
      size: 0.04,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
    });

    const particles = new THREE.Points(geo, mat);
    scene.add(particles);

    // Floating shapes
    const shapes: THREE.Mesh[] = [];
    const geos = [
      new THREE.OctahedronGeometry(0.3),
      new THREE.TetrahedronGeometry(0.25),
      new THREE.IcosahedronGeometry(0.2),
      new THREE.OctahedronGeometry(0.15),
      new THREE.TetrahedronGeometry(0.35),
      new THREE.IcosahedronGeometry(0.25),
      new THREE.OctahedronGeometry(0.2),
      new THREE.TetrahedronGeometry(0.18),
    ];

    geos.forEach((g, i) => {
      const mesh = new THREE.Mesh(g, new THREE.MeshBasicMaterial({
        color: i % 2 === 0 ? "#6B5CE7" : "#8B7CF8",
        wireframe: true,
        transparent: true,
        opacity: 0.3,
      }));
      mesh.position.set(
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 6
      );
      scene.add(mesh);
      shapes.push(mesh);
    });

    // Mouse
    let mouseX = 0;
    let mouseY = 0;
    const onMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMouseMove);

    // Scroll
    const onScroll = () => {
      const scrollY = window.scrollY;
      particles.rotation.y = scrollY * 0.0003;
      particles.rotation.x = scrollY * 0.0002;
    };
    window.addEventListener("scroll", onScroll);

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);

    let frame = 0;
    const animate = () => {
      frame++;
      const t = frame * 0.005;

      particles.rotation.y += 0.0003;
      particles.rotation.x += 0.0001;

      shapes.forEach((s, i) => {
        s.rotation.x += 0.004 + i * 0.001;
        s.rotation.y += 0.005 + i * 0.001;
        s.position.y += Math.sin(t + i * 0.5) * 0.001;
      });

      camera.position.x += (mouseX * 0.3 - camera.position.x) * 0.03;
      camera.position.y += (mouseY * 0.2 - camera.position.y) * 0.03;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      id="three-canvas"
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}