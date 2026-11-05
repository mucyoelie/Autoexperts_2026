import {
  Award,
  BadgeCheck,
  BatteryCharging,
  Briefcase,
  CalendarCheck,
  CalendarClock,
  CarFront,
  ClipboardCheck,
  Eye,
  Gauge,
  GraduationCap,
  HandHeart,
  KeyRound,
  Leaf,
  MapPin,
  MessagesSquare,
  Paintbrush,
  ScanLine,
  ShieldCheck,
  Sparkles,
  Users,
  Wrench,
  Zap,
} from "lucide-react";

const iconMap = {
  Award,
  BadgeCheck,
  BatteryCharging,
  Briefcase,
  CalendarCheck,
  CalendarClock,
  CarFront,
  ClipboardCheck,
  Eye,
  Gauge,
  GraduationCap,
  HandHeart,
  KeyRound,
  Leaf,
  MapPin,
  MessagesSquare,
  Paintbrush,
  ScanLine,
  ShieldCheck,
  Sparkles,
  Users,
  Wrench,
  Zap,
};

/** Renders a Lucide icon from a name stored in data files. */
const Icon = ({ name, ...props }) => {
  const Component = iconMap[name] ?? Sparkles;
  return <Component aria-hidden="true" {...props} />;
};

export default Icon;
