import './App.css';
import * as THREE from 'three';
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from '@react-three/drei';
import { useRef } from 'react';

function App() {
  return (
    <div className="App">
      <Canvas camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 30, 60] }} >
        <OrbitControls />
        <Plane />
        <House />
        <Tree />
        <ambientLight intensity={0.5} />
        <pointLight position={[100, 100, 100]} />
      </Canvas>
    </div>
  );
}
export default App;

const Plane = () => {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[50, 50]} />
      <meshStandardMaterial color={'green'} side={THREE.DoubleSide} />
    </mesh>
  );
}

const House = () => {
  let position = [15, 5.1, -15];
  return (
    <group position={position}>
      {/* Ground Floor */}
      <mesh position-y={1.5}>
        <boxGeometry args={[15, 13, 15]} />
        <meshStandardMaterial color={'yellow'} />
      </mesh>
      {/* First Floor */}
      <mesh position={[2.5, 10, -2.5]} >
        <boxGeometry args={[10, 10, 10]} />
        <meshStandardMaterial color={'yellow'} />
      </mesh>
      {/* Door */}
      <mesh position={[0, -1.5, 7.6]}>
        <planeGeometry args={[4, 7]} />
        <meshStandardMaterial color={'red'} />
      </mesh>
      {/* Windows */}
      <mesh position={[5, 10, 2.6]}>
        <planeGeometry args={[2, 2]} />
        <meshStandardMaterial color={'red'} />
      </mesh>
      <mesh position={[0, 10, 2.6]}>
        <planeGeometry args={[2, 2]} />
        <meshStandardMaterial color={'red'} />
      </mesh>
      {/* Door Nob */}
      <mesh position={[1, -2, 7.7]}>
        <circleGeometry args={[0.5, 10]} />
        <meshStandardMaterial color={'yellow'} />
      </mesh>
    </group>
  )
}

const Tree = () => {
  const leaves = useRef();
  let clockwise = false;
  let i = 30;
  useFrame(() => {
    if (clockwise) {
      leaves.current.rotation.z += 0.005;
      i++;
    }
    else {
      leaves.current.rotation.z -= 0.005;
      i--;
    }
    if (i == 0) clockwise = true;
    if (i == 60) clockwise = false;
  })
  return (
    <group position={[-13, 0.1, -10]}>
      <mesh position-y={5}>
        <cylinderGeometry args={[1, 3, 10, 20]} />
        <meshStandardMaterial color={'brown'} />
      </mesh>
      <group ref={leaves} position-y={10}>
        <mesh position={[0, 2, 0]}>
          <sphereGeometry args={[4, 50, 50]} />
          <meshStandardMaterial color={"green"} />
        </mesh>
        <mesh position={[3, 2, 0]}>
          <sphereGeometry args={[4, 50, 50]} />
          <meshStandardMaterial color={"green"} />
        </mesh>
        <mesh position={[-3, 2, 0]}>
          <sphereGeometry args={[4, 50, 50]} />
          <meshStandardMaterial color={"green"} />
        </mesh>
        <mesh position={[2, 4, 0]}>
          <sphereGeometry args={[4, 50, 50]} />
          <meshStandardMaterial color={"green"} />
        </mesh>
        <mesh position={[-2, 4, 0]}>
          <sphereGeometry args={[4, 50, 50]} />
          <meshStandardMaterial color={"green"} />
        </mesh>
        <mesh position={[0, 7, 0]}>
          <sphereGeometry args={[4, 50, 50]} />
          <meshStandardMaterial color={"green"} />
        </mesh>
        <mesh position={[0, 2, 0.8]}>
          <sphereGeometry args={[4, 50, 50]} />
          <meshStandardMaterial color={"green"} />
        </mesh>
        <mesh position={[0, 2, -0.8]}>
          <sphereGeometry args={[4, 50, 50]} />
          <meshStandardMaterial color={"green"} />
        </mesh>
      </group>
    </group>
  )
}