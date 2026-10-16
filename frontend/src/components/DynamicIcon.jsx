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
import {
  AtomOrbitalSvg,
  CircuitChipSvg,
  SynapseNetworkSvg,
  DeepSpaceTelescopeSvg,
  NeuralAiSvg,
  MathModelingSvg,
  DnaGenomicsSvg,
  MaterialsCrystalSvg,
  CyberShieldSvg,
  HolographicMediaSvg,
} from './OriginalIcons.jsx';

const ORIGINAL_ICON_MAP = {
  Atom: AtomOrbitalSvg,
  QuantumAtom: AtomOrbitalSvg,
  Cpu: CircuitChipSvg,
  CircuitChip: CircuitChipSvg,
  Synapse: SynapseNetworkSvg,
  HeartHandshake: SynapseNetworkSvg,
  Telescope: DeepSpaceTelescopeSvg,
  Orbit: DeepSpaceTelescopeSvg,
  NeuralAi: NeuralAiSvg,
  MathModeling: MathModelingSvg,
  FlaskConical: DnaGenomicsSvg,
  Dna: DnaGenomicsSvg,
  Sparkles: MaterialsCrystalSvg,
  Materials: MaterialsCrystalSvg,
  Terminal: CyberShieldSvg,
  CyberShield: CyberShieldSvg,
  Video: HolographicMediaSvg,
  MediaHolo: HolographicMediaSvg,
};

const LUCIDE_MAP = {
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
  // Check if there is an original SVG component
  const OriginalComponent = ORIGINAL_ICON_MAP[name];
  if (OriginalComponent) {
    return <OriginalComponent className={className} {...props} />;
  }

  const LucideComponent = LUCIDE_MAP[name] || HelpCircle;
  return <LucideComponent className={className} {...props} />;
}
