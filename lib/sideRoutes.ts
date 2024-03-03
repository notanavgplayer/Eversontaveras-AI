import {
  Book,
  Brain,
  FileText,
  ImageIcon,
  LayoutDashboard,
  MessageSquare,
  Settings2,
  FileVolume,
  Speech,
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
    label: "Text To Speech",
    Icon: Speech,
    path: "/text-to-speech",
  },
  {
    label: "Account settings",
    Icon: Settings2,
    path: "/account-settings",
  },
];
