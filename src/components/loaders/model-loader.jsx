import { Html, useProgress } from "@react-three/drei";
import "../../css/loader.css";

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="w-screen h-screen bg-gray-900 z-50 flex items-center justify-center">
        {/* <!-- From Uiverse.io by egehan_1415 -->  */}
        <div
          className="ui-loader term scale-200"
          role="status"
          aria-label="Loading"
        >
          <div className="term-bar">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
            <div className="term-title">build.portfolio</div>
          </div>

          <div className="term-body">
            <div className="line">
              <b>$</b> npm run build
            </div>
            <div className="line muted">› compiling modules…</div>
            <div className="line">
              <span className="tag ok">✓</span> assets optimized
            </div>
            <div className="line muted">
              › loading assets… {Math.floor(progress)}%
            </div>
            <div className="progress">
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
