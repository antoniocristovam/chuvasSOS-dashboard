import { ImgHTMLAttributes } from "react";
import styles from "./Avatar.module.css";

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
}

export const Avatar = ({ hasBorder = true, ...props }: AvatarProps) => {
  return (
    <div>
      <img
        className={hasBorder ? styles.avatarWidthBorder : styles.avatar}
        {...props}
      />
    </div>
  );
};

export default Avatar;
