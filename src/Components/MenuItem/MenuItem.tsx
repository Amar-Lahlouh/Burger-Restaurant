import { ReactNode } from "react";

interface MenuItemProps {
  icon: ReactNode;
  text: string;
}
function MenuItem({ icon, text }: MenuItemProps) {
  return (
    <li className="text-xl py-4 flex">
      {icon}
      {text}
    </li>
  );
}

export default MenuItem;
