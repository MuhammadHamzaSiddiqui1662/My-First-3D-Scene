import './App.css';
import * as THREE from 'three';
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from '@react-three/drei';

function App() {
  return (
    <div className="App">
      <Canvas camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 20, 20] }} >
        <OrbitControls />
        <Plane />
        <House />
        <Tree />
      </Canvas>
    </div>
  );
}
export default App;

const Plane = () => {
  return(
    <mesh rotation={[-Math.PI/2,0,0]}>
      <planeGeometry args={[50, 50]} />
      <meshBasicMaterial color={'green'} side={THREE.DoubleSide} />
    </mesh>
  );
}

const House = () => {
  let position = [15, 5.1, -15];
  return(
    <group position={position}>
      {/* Ground Floor */}
      <mesh position-y={1.5}>
        <boxGeometry args={[15, 13, 15]} />
        <meshBasicMaterial color={'yellow'} />
      </mesh>
      {/* First Floor */}
      <mesh position={[2.5, 10, -2.5]} >
        <boxGeometry args={[10, 10, 10]} />
        <meshBasicMaterial color={'yellow'} />
      </mesh>
      {/* Door */}
      <mesh position={[0, -1.5, 7.6]}>
        <planeGeometry args={[4, 7]} />
        <meshBasicMaterial color={'red'}/>
      </mesh>
      {/* Windows */}
      <mesh position={[5, 10, 2.6]}>
        <planeGeometry args={[2, 2]} />
        <meshBasicMaterial color={'red'}/>
      </mesh>
      <mesh position={[0, 10, 2.6]}>
        <planeGeometry args={[2, 2]} />
        <meshBasicMaterial color={'red'}/>
      </mesh>
      {/* Door Nob */}
      <mesh position={[1, -2, 7.7]}>
        <circleGeometry args={[0.5, 10]} />
        <meshBasicMaterial color={'yellow'} />
      </mesh>
    </group>
  )
}

const Tree = () => {
  return(
    <group position={[-13, 0.1, -10]}>
      <mesh position-y={5}>
        <cylinderGeometry args={[1, 3, 10, 20]} />
        <meshBasicMaterial color={'brown'} />
      </mesh>
    </group>
  )
}