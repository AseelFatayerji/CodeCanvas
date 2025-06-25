import { Html } from "@react-three/drei";
import '../../css/loader.css';

function PacMan() {
  return (
    <Html>
      <div class="loader-wrapper">
        <div class="packman"></div>
        <div class="dots">
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
        </div>
      </div>
    </Html>
  );
}

export default PacMan;
