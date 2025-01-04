import type { ITheme } from '@xterm/xterm';

const style = getComputedStyle(document.documentElement);
const cssVar = (token: string) => style.getPropertyValue(token) || undefined;

export function getTerminalTheme(overrides?: ITheme): ITheme {
  return {
    cursor: cssVar('--beiengai-elements-terminal-cursorColor'),
    cursorAccent: cssVar('--beiengai-elements-terminal-cursorColorAccent'),
    foreground: cssVar('--beiengai-elements-terminal-textColor'),
    background: cssVar('--beiengai-elements-terminal-backgroundColor'),
    selectionBackground: cssVar('--beiengai-elements-terminal-selection-backgroundColor'),
    selectionForeground: cssVar('--beiengai-elements-terminal-selection-textColor'),
    selectionInactiveBackground: cssVar('--beiengai-elements-terminal-selection-backgroundColorInactive'),

    // ansi escape code colors
    black: cssVar('--beiengai-elements-terminal-color-black'),
    red: cssVar('--beiengai-elements-terminal-color-red'),
    green: cssVar('--beiengai-elements-terminal-color-green'),
    yellow: cssVar('--beiengai-elements-terminal-color-yellow'),
    blue: cssVar('--beiengai-elements-terminal-color-blue'),
    magenta: cssVar('--beiengai-elements-terminal-color-magenta'),
    cyan: cssVar('--beiengai-elements-terminal-color-cyan'),
    white: cssVar('--beiengai-elements-terminal-color-white'),
    brightBlack: cssVar('--beiengai-elements-terminal-color-brightBlack'),
    brightRed: cssVar('--beiengai-elements-terminal-color-brightRed'),
    brightGreen: cssVar('--beiengai-elements-terminal-color-brightGreen'),
    brightYellow: cssVar('--beiengai-elements-terminal-color-brightYellow'),
    brightBlue: cssVar('--beiengai-elements-terminal-color-brightBlue'),
    brightMagenta: cssVar('--beiengai-elements-terminal-color-brightMagenta'),
    brightCyan: cssVar('--beiengai-elements-terminal-color-brightCyan'),
    brightWhite: cssVar('--beiengai-elements-terminal-color-brightWhite'),

    ...overrides,
  };
}
