import {
  Book,
  Brain,
  FileText,
  ImageIcon,
  LayoutDashboard,
  MessageSquare,
  Settings2,
  Volume,
} from "lucide-react";
export const sidebarRoutes = [
  {
    label: "Dashboard",
    Icon: LayoutDashboard,
    path: "/dashboard",
  },
  {
    label: "Image generator",
    Icon: ImageIcon,
    path: "/image",
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
    label: "Text to Speech",
    Icon: Volume,
    path: "/text-to-speech",
  },
  {
    label: "Account settings",
    Icon: Settings2,
    path: "/account-settings",
  },
];
