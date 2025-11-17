import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { OrbitingCircles } from "./interactive/OrbtingCircles";
import {
  faAndroid,
  faBootstrap,
  faCss3,
  faGithub,
  faHtml5,
  faJava,
  faJs,
  faNodeJs,
  faNpm,
  faPhp,
  faPython,
  faReact,
  faShopify,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

function Stack() {
  const first_ring = [
    { icon: faNodeJs, color: "#3C873A" },
    { icon: faReact, color: "#61DBFB" },
    { icon: faPhp, color: "#8892be" },
    { icon: faCss3, color: "#2965f1" },
    { icon: faJava, color: "#ED8B00" },
    { icon: faGithub, color: "#fffff" },
    { icon: faJs, color: "#f0db4f" },
    { icon: faHtml5, color: "#f06529" },
    { icon: faNpm, color: "#cb3837" },
    { icon: faPython, color: "#FFE873" },
    { icon: faShopify, color: "#95BF47" },
    { icon: faAndroid, color: "#A4C639" },
    { img: "src/assets/icons/mysql.png" },
    { img: "src/assets/icons/microsoftsql.png" },
  ];
  const second_ring = [
    { img: "src/assets/icons/blender.png" },
    { img: "src/assets/icons/illustrator.png" },
    { img: "src/assets/icons/photoshop.png" },
    { img: "src/assets/icons/figma.png" },
    { img: "src/assets/icons/canva.png" },
    { img: "src/assets/icons/blockbench.png" },
    { img: "src/assets/icons/MongoDB.png" },
    { icon: faBootstrap, color: "#8312FA" },
  ];
  return (
    <div className="relative flex h-60 w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {first_ring.map((item, index) =>
          item.img ? (
            <img key={index} src={item.img} alt="" className="scale-100" />
          ) : (
            <Icons key={index} src={item.icon} color={item.color} />
          )
        )}
      </OrbitingCircles>
      <OrbitingCircles iconSize={20} radius={100} reverse speed={3}>
        {second_ring.map((item, index) =>
          item.img ? (
            <img key={index} src={item.img} alt="" className="scale-200" />
          ) : (
            <Icons key={index} src={item.icon} color={item.color} />
          )
        )}
      </OrbitingCircles>
    </div>
  );
}

const Icons = ({ src, color }) => (
  <FontAwesomeIcon
    icon={src}
    style={{ color: color }}
    className="rounded-sm hover:scale-110 duration-200 text-4xl"
  />
);

export default Stack;
