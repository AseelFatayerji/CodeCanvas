import { Html } from "@react-three/drei";
import '../../css/loader.css';

function Loader() {
  return (
    <Html>
      <div className="w-screen h-screen ">
        <div className="spinner fixed inset-0 self-center justify-self-center">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </Html>
  );
}

export default Loader;
