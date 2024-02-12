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
    label: "Story Generator",
    Icon: Book,
    path: "/story",
  },
  {
    label: "Text Expander",
    Icon: Brain,
    path: "/text-expander",
  },
  {
    label: "Image generator",
    Icon: ImageIcon,
    path: "/image",
  },
  {
    label: "Text to Speech",
    Icon: FileVolume,
    path: "/text-to-speech",
  },
  {
    label: "Account settings",
    Icon: Settings2,
    path: "/account-settings",
  },
];
