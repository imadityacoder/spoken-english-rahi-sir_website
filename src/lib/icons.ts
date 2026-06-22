import {
  Sprout,
  BookOpenCheck,
  MessagesSquare,
  Briefcase,
  Sparkles,
  Users,
  Mic,
  Heart,
  CalendarClock,
  ShieldAlert,
  HeartCrack,
  BookX,
  MessageCircleOff,
  MicOff,
  UserX,
  Star,
  CalendarCheck,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  Sprout,
  BookOpenCheck,
  MessagesSquare,
  Briefcase,
  Sparkles,
  Users,
  Mic,
  Heart,
  CalendarClock,
  ShieldAlert,
  HeartCrack,
  BookX,
  MessageCircleOff,
  MicOff,
  UserX,
  Star,
  CalendarCheck,
  TrendingUp,
};

export function getIcon(name: string): LucideIcon {
  return map[name] ?? Sparkles;
}
