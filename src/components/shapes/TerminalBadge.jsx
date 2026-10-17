import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Punc = ({ children }) => <span className="text-slate-500">{children}</span>;
const Tag = ({ children }) => <span className="text-pink-400">{children}</span>;

const Hl = ({ children }) => (
  <span className="relative inline-block px-1 before:absolute before:-inset-0.5 before:block before:rounded before:bg-blue-500/10">
    <span className="relative text-blue-400">{children}</span>
  </span>
);

const Line = ({ indent = 0, children }) => (
  <p
    className="font-mono text-xs font-normal tracking-wide text-violet-400"
    style={{ marginLeft: indent * 12 }}
  >
    {children}
  </p>
);

function TerminalBadge({ className = "", fileName = "superpower.tsx" }) {
  return (
    <div
      className={`rounded-xl border-6 border-white bg-slate-900 p-1 shadow-[-7px_6px_6px_0px_rgba(0,0,0,0.1)]  ${className}`}
    >
      <div className="relative flex text-center">
        <div className="flex gap-1.5 pl-3 pt-3 text-[0.65rem]">
          <FontAwesomeIcon icon={faCircle} className="text-red-500/70" />
          <FontAwesomeIcon icon={faCircle} className="text-yellow-500/70" />
          <FontAwesomeIcon icon={faCircle} className="text-green-500/70" />
        </div>
        <span className="absolute inset-x-0 top-2 text-xs text-slate-500">{fileName}</span>
      </div>

      <div className="mt-5 space-y-1.5 px-5 pb-6">
        <Line>
          <Punc>&lt;</Punc><Tag>Design</Tag><Punc>&gt;</Punc>
        </Line>
        <Line indent={1}>
          <Punc>&lt;</Punc><Tag>Status</Tag><Punc>&gt;</Punc>
          <Hl>ready for action</Hl>
          <span className="animate-pulse text-blue-400">|</span>
          <Punc>&lt;/</Punc><Tag>Status</Tag><Punc>&gt;</Punc>
        </Line>
        <Line indent={1}>
          <Punc>&lt;</Punc><Tag>Superpower</Tag>
          <span className="ml-2">on<Punc>=</Punc></span>
          <Hl>{"{true}"}</Hl>
          <Punc>/&gt;</Punc>
        </Line>
        <Line>
          <Punc>&lt;/</Punc><Tag>Design</Tag><Punc>&gt;</Punc>
        </Line>
      </div>
    </div>
  );
}

export default TerminalBadge;
