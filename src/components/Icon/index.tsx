import { type IconBaseProps, type IconType } from "react-icons";

interface IconProps extends IconBaseProps {
  // 'as' recebe o componente do ícone (ex: FaGithub, IoMdSearch)
  as: IconType;
  size?: number | string;
  color?: string;
  className?: string;
}

const Icon = ({ as: IconComponent, size = 20, color, ...props }: IconProps) => {
  return <IconComponent size={size} color={color} {...props} />;
};

export { Icon };
