import { TSidebarItem } from "./generateSidebarItems";
import { RiAdminFill } from "react-icons/ri";
import {
  AiOutlineBarChart,
  AiOutlineUser,
  AiOutlineSetting,
} from "react-icons/ai";
const sidebarItems: TSidebarItem[] = [
  {
    key: "dashboard",
    label: "Dashboard",
    path: "",
    icon: <AiOutlineBarChart size={24} />,
  },
  {
    key: "User",
    label: "User",
    path: "users",
    icon: <AiOutlineUser size={24} />,
  },
  {
    key: "admin",
    label: "Add Admin",
    path: "make-admin",
    icon: <RiAdminFill size={24} />,
  },
  {
    key: "settings",
    label: "Settings",
    path: "settings",
    icon: <AiOutlineSetting size={24} />,
    children: [
      {
        key: "profile",
        label: "Profile",
        path: "profile",
        icon: <AiOutlineUser size={24} />,
      },
    ],
  },
];

export default sidebarItems;
