export interface PastelColor {
  name: string;
  hex: string;
  bgLight: string;
  borderLight: string;
  textDark: string;
}

export const PASTEL_RAINBOW_COLORS: PastelColor[] = [
  { name: 'Pastel Coral', hex: '#FF8E85', bgLight: '#FFF0EE', borderLight: '#FFCCC7', textDark: '#B23A30' },
  { name: 'Pastel Peach', hex: '#FFB37C', bgLight: '#FFF4EC', borderLight: '#FFDEC7', textDark: '#B55E1C' },
  { name: 'Pastel Honey', hex: '#FFD269', bgLight: '#FFFBEB', borderLight: '#FFE8A8', textDark: '#A0740E' },
  { name: 'Pastel Sage', hex: '#98D8AA', bgLight: '#F0F9F3', borderLight: '#CDECD7', textDark: '#2C7342' },
  { name: 'Pastel Mint', hex: '#7DD8C7', bgLight: '#EDFBF8', borderLight: '#BEEDE4', textDark: '#1E7564' },
  { name: 'Pastel Sky', hex: '#7BC9FF', bgLight: '#EFF8FF', borderLight: '#BDE2FF', textDark: '#1765A3' },
  { name: 'Pastel Periwinkle', hex: '#9C98FF', bgLight: '#F3F2FF', borderLight: '#CEC8FF', textDark: '#413A9E' },
  { name: 'Pastel Lavender', hex: '#C698FF', bgLight: '#F7F0FF', borderLight: '#E3C8FF', textDark: '#6730A5' },
  { name: 'Pastel Rose', hex: '#FF98CA', bgLight: '#FFF0F7', borderLight: '#FFC8E5', textDark: '#A62669' },
];

export const DEFAULT_MEMBER_COLOR = PASTEL_RAINBOW_COLORS[0].hex;

export function getPastelColor(hex: string): PastelColor {
  const normalized = hex.toUpperCase();
  const match = PASTEL_RAINBOW_COLORS.find(c => c.hex.toUpperCase() === normalized);
  if (match) return match;

  // Custom HEX fallback
  return {
    name: 'Custom',
    hex: hex,
    bgLight: hex + '20',
    borderLight: hex + '50',
    textDark: '#1E293B',
  };
}
