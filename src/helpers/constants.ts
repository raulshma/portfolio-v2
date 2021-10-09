export const BG_LIGHT = (mode: Modes): string => mode === 'light' ? 'rgb(146 151 179 / 13%)' : 'rgb(146 151 179 / 12%)';
export const BORDER_DARK = (mode: Modes): string => mode === 'light' ? 'rgb(255 255 255 / 31%)' : 'rgba(16 18 27 / 30%)';
export const BORDER_LIGHT = (mode: Modes): string => mode === "light" ? 'rgb(255 255 255 / 35%)' : 'rgba(113 119 144 / 25%)';
export const BORDER_WHITE = (mode: Modes): string => mode === 'light' ? '#3c3a3a' : '#f9fafb';
export const BG_DARK = BORDER_DARK;
export const HOVER_BG_COLOR = (mode: Modes): string => mode === 'light' ? 'rgb(255 255 255 / 31%)' : 'rgba(16 18 27 / 45%)';
export const TEXT_WHITE = BORDER_WHITE;
export const TEXT_GREY = '#999ba5';
export const BTN_PRIMARY = 'rgb(53, 53, 53)';
export const BTN_PRIMARY_HOVER = 'rgb(0, 0, 0)';

export const MODE = 'dark'

type Modes = 'light' | 'dark'