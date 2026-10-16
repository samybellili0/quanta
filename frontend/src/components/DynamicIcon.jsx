import React from 'react';
import {
  Calendar,
  Users,
  Handshake,
  Video,
  Terminal,
  Layers,
  Orbit,
  Cpu,
  Sparkles,
  FlaskConical,
  Atom,
  Rocket,
  GraduationCap,
  HeartHandshake,
  BookOpen,
  ArrowRight,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  MapPin,
  Mail,
  HelpCircle,
} from 'lucide-react';

const ICON_MAP = {
  Calendar,
  Users,
  Handshake,
  Video,
  Terminal,
  Layers,
  Orbit,
  Cpu,
  Sparkles,
  FlaskConical,
  Atom,
  Rocket,
  GraduationCap,
  HeartHandshake,
  BookOpen,
  ArrowRight,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  MapPin,
  Mail,
};

export default function DynamicIcon({ name, className = 'w-5 h-5', ...props }) {
  const IconComponent = ICON_MAP[name] || HelpCircle;
  return <IconComponent className={className} {...props} />;
}
