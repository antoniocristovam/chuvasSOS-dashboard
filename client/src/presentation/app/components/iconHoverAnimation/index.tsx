// import {KTSVG} from '@/presentation/config/helpers';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BiMap } from "react-icons/bi";
import clsx from "clsx";

type IProps = {
  color:
    | "warning"
    | "danger"
    | "primary"
    | "info"
    | "dark"
    | "success"
    | "none";
  path?: string;
  to?: string;
  label?: string;
  onClick?: () => void;
  icon?: string;
};

export const IconHoverAnimation = ({
  path,
  icon,
  color,
  to = "#",
  label,
  onClick,
}: IProps) => {
  return (
    <motion.div
      className="d-flex justify-content-center align-items-center"
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      style={{
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <Link
        to={to}
        className={clsx("btn btn-sm ", {
          "btn-icon": !label,
        })}
        onClick={onClick}
      >
        {icon ? (
          <i className={`${icon} fs-3 text-${color}`}></i>
        ) : (
          <BiMap size={20} />
        )}
        <span>{label}</span>
      </Link>
    </motion.div>
  );
};
