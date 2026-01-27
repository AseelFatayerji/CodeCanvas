import { Html, useProgress } from "@react-three/drei";
import "../../css/loader.css";

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="w-screen h-screen bg-gray-900 z-50 flex items-center justify-center">
        {/* <!-- From Uiverse.io by egehan_1415 -->  */}
        <div
          class="ui-loader term scale-200"
          role="status"
          aria-label="Loading"
        >
          <div class="term-bar">
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
            <div class="term-title">build.portfolio</div>
          </div>

          <div class="term-body">
            <div class="line">
              <b>$</b> npm run build
            </div>
            <div class="line muted">› compiling modules…</div>
            <div class="line">
              <span class="tag ok">✓</span> assets optimized
            </div>
            <div className="line muted">
              › loading assets… {Math.floor(progress)}%
            </div>
            <div class="progress">
             <span
                className="fill"
                style={{ width: `${progress}%` }}
              />
              <span className="glint" aria-hidden="true"></span>
            </div>
          </div>
        </div>
      </div>
    </Html>
  );
}

export default Loader;
