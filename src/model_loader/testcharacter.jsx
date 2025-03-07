import { useGLTF } from "@react-three/drei";
import bird from "../assests/models/bird.glb";

function Bird(props) {
  const { scene, animations } = useGLTF(bird);
  return (
    <mesh position={[0, 0, 1]} scale={[0.3, 0.3, 0.3]} rotation={[0,90,0]}>
      <primitive object={scene} />
    </mesh>
  );
}

export default Bird;
