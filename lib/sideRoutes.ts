import {
  Book,
  Brain,
  FileText,
  ImageIcon,
  LayoutDashboard,
  MessageSquare,
  Settings2,
  FileVolume,
} from "lucide-react";
export const sidebarRoutes = [
  {
    label: "Dashboard",
    Icon: LayoutDashboard,
    path: "/dashboard",
  },
  {
    label: "Chat",
    Icon: MessageSquare,
    path: "/chat",
  },
  {
    label: "Article Summarizer",
    Icon: FileText,
    path: "/article",
  },
  {
    label: "Image generator",
    Icon: ImageIcon,
    path: "/image",
  },
  {
    label: "Account settings",
    Icon: Settings2,
    path: "/account-settings",
  },
];
