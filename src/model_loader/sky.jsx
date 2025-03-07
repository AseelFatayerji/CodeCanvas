import { useGLTF } from "@react-three/drei";
import day from "../assests/models/day.glb";
import night from "../assests/models/night.glb";

function Sky(props) {
  console.log(props.isDay);
  const setDay = props.isDay ? useGLTF(night) : useGLTF(day);
  return (
    <mesh>
      <primitive object={setDay.scene} />
    </mesh>
  );
}

export default Sky;
