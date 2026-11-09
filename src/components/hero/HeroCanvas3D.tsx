"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export function HeroCanvas3D() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Check WebGL availability
    try {
      const testCanvas = document.createElement("canvas");
      const gl =
        testCanvas.getContext("webgl") ||
        testCanvas.getContext("experimental-webgl");
      if (!gl) return;
    } catch {
      return;
    }

    let animationFrameId: number;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 6;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // Group for layered 3D object
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Primary Sculptural Core (Faceted Torus Knot / Monolith)
    const geometry = new THREE.TorusKnotGeometry(1.2, 0.38, 128, 32, 2, 3);
    
    // Metallic Silver & Chrome Material
    const chromeMaterial = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color("#0c111c"),
      metalness: 0.95,
      roughness: 0.12,
      reflectivity: 0.9,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      wireframe: false,
    });
    const mainMesh = new THREE.Mesh(geometry, chromeMaterial);
    mainGroup.add(mainMesh);

    // 2. Electric Blue Wireframe Energy Layer
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: new THREE.Color("#00e5ff"),
      wireframe: true,
      transparent: true,
      opacity: 0.22,
    });
    const wireframeMesh = new THREE.Mesh(geometry, wireframeMaterial);
    wireframeMesh.scale.set(1.02, 1.02, 1.02);
    mainGroup.add(wireframeMesh);

    // 3. Floating Orbital Ring (Precision Silver)
    const ringGeo = new THREE.TorusGeometry(2.3, 0.02, 16, 100);
    const ringMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color("#94a3b8"),
      metalness: 0.9,
      roughness: 0.2,
      emissive: new THREE.Color("#00e5ff"),
      emissiveIntensity: 0.15,
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.rotation.x = Math.PI / 3;
    mainGroup.add(ringMesh);

    // 4. Particle Field (Subtle Cosmic Dust)
    const particleCount = 70;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 8;
      particlePositions[i + 1] = (Math.random() - 0.5) * 8;
      particlePositions[i + 2] = (Math.random() - 0.5) * 4;
    }
    particleGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(particlePositions, 3)
    );
    const particleMat = new THREE.PointsMaterial({
      color: new THREE.Color("#00e5ff"),
      size: 0.035,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    // Electric Cyan Point Light
    const cyanLight = new THREE.PointLight(0x00e5ff, 4.5, 12);
    cyanLight.position.set(3, 2, 3);
    scene.add(cyanLight);

    // Deep Indigo Rim Light
    const indigoLight = new THREE.PointLight(0x3b82f6, 3.5, 12);
    indigoLight.position.set(-3, -2, -2);
    scene.add(indigoLight);

    // Top Chrome Specular Light
    const silverLight = new THREE.DirectionalLight(0xffffff, 2.0);
    silverLight.position.set(0, 5, 4);
    scene.add(silverLight);

    // Mouse Interaction
    let targetRotationX = 0;
    let targetRotationY = 0;
    let currentRotationX = 0;
    let currentRotationY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((event.clientY - rect.top) / rect.height) * 2 - 1);
      targetRotationY = x * 0.45;
      targetRotationX = -y * 0.35;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Handle Resize
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", handleResize);

    // Animation Loop
    let clock = new THREE.Clock();
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse follow interpolation
      currentRotationX += (targetRotationX - currentRotationX) * 0.05;
      currentRotationY += (targetRotationY - currentRotationY) * 0.05;

      // Base idle rotation + mouse offset
      mainGroup.rotation.y = elapsedTime * 0.25 + currentRotationY;
      mainGroup.rotation.x = Math.sin(elapsedTime * 0.2) * 0.15 + currentRotationX;
      ringMesh.rotation.z = -elapsedTime * 0.15;

      // Floating gentle oscillation
      mainGroup.position.y = Math.sin(elapsedTime * 0.8) * 0.1;
      particles.rotation.y = elapsedTime * 0.04;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);

      geometry.dispose();
      chromeMaterial.dispose();
      wireframeMaterial.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-10 flex items-center justify-center overflow-hidden"
      aria-hidden="true"
    />
  );
}

