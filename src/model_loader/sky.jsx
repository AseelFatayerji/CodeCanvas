import { useGLTF } from "@react-three/drei";
import day from "../assets/models/day.glb";
import night from "../assets/models/night.glb";

function Sky(props) {
  const setDay = props.isDay ? useGLTF(day) : useGLTF(night);
  return (
    <mesh>
      <primitive object={setDay.scene} />
    </mesh>
  );
}

export default Sky;
