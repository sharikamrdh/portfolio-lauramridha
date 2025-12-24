import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useMemo, useRef } from "react";

const StarMaterialShader = {
  uniforms: {
    uTime: { value: 0 },
  },
  vertexShader: `
    uniform float uTime;
    varying vec3 vColor;
    varying float vTwinkle;
    attribute float size;
    attribute float aOffset;
    attribute float aSpeed;
    attribute vec3 aDirection;

    void main() {
      vColor = color;
      
      // Mouvement fluide et indépendant
      // Chaque étoile dérive sur son propre axe avec une vitesse unique
      vec3 pos = position;
      float movement = sin(uTime * aSpeed + aOffset) * 1.5;
      pos += aDirection * movement;

      // Scintillement doux
      vTwinkle = sin(uTime * (aSpeed * 2.0) + aOffset) * 0.5 + 0.5;

      vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
      
      // Taille avec perspective améliorée
      gl_PointSize = size * (300.0 / -mvPosition.z);
      gl_Position = projectionMatrix * mvPosition;
    }
  `,
  fragmentShader: `
    varying vec3 vColor;
    varying float vTwinkle;

    void main() {
      float dist = length(gl_PointCoord - vec2(0.5));
      if (dist > 0.5) discard;

      // Halo ultra-doux (effet bokeh/réaliste)
      float alpha = 0.04 / dist - 0.08;
      
      // Multiplication par le scintillement
      alpha *= (0.6 + vTwinkle * 0.4);
      
      gl_FragColor = vec4(vColor, alpha);
    }
  `,
};

function FloatingStars({ count = 800 }: { count?: number }) {
  const points = useRef<THREE.Points>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  const { positions, colors, sizes, offsets, directions, speeds } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const sz = new Float32Array(count);
    const off = new Float32Array(count);
    const dir = new Float32Array(count * 3);
    const spd = new Float32Array(count);

    const range = 50; 

    for (let i = 0; i < count; i++) {
      // Placement aléatoire large
      pos.set([(Math.random() - 0.5) * range, (Math.random() - 0.5) * range, (Math.random() - 0.5) * range], i * 3);
      
      // Direction de dérive unique
      dir.set([Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5], i * 3);

      off[i] = Math.random() * Math.PI * 2;
      spd[i] = 0.1 + Math.random() * 0.3; // Vitesse de mouvement lente et variée

      // Couleurs : Blanc pur et quelques touches de bleu ciel
      const color = new THREE.Color();
      color.setHSL(0.6, 0.2, 0.8 + Math.random() * 0.2);
      col.set([color.r, color.g, color.b], i * 3);
      
      sz[i] = 1.0 + Math.random() * 2.5; // Tailles variées pour la profondeur
    }
    return { positions: pos, colors: col, sizes: sz, offsets: off, directions: dir, speeds: spd };
  }, [count]);

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
    }
    // Très légère rotation globale pour donner de la vie sans être lié à la souris
    if (points.current) {
      points.current.rotation.y += 0.0005;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
        <bufferAttribute attach="attributes-size" args={[sizes, 1]} />
        <bufferAttribute attach="attributes-aOffset" args={[offsets, 1]} />
        <bufferAttribute attach="attributes-aSpeed" args={[speeds, 1]} />
        <bufferAttribute attach="attributes-aDirection" args={[directions, 3]} />
      </bufferGeometry>
      <shaderMaterial
        ref={materialRef}
        attach="material"
        args={[StarMaterialShader]}
        transparent
        vertexColors
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

export default function GalaxyCanvas() {
  return (
    <div className="fixed inset-0 bg-[#010103]">
      <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
        <FloatingStars count={700} />
        <fog attach="fog" args={["#010103", 5, 45]} />
      </Canvas>
    </div>
  );
}