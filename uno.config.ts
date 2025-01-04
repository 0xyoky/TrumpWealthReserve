import { globSync } from 'fast-glob';
import fs from 'node:fs/promises';
import { basename } from 'node:path';
import { defineConfig, presetIcons, presetUno, transformerDirectives } from 'unocss';

const iconPaths = globSync('./icons/*.svg');

const collectionName = 'beiengai';

const customIconCollection = iconPaths.reduce(
  (acc, iconPath) => {
    const [iconName] = basename(iconPath).split('.');

    acc[collectionName] ??= {};
    acc[collectionName][iconName] = async () => fs.readFile(iconPath, 'utf8');

    return acc;
  },
  {} as Record<string, Record<string, () => Promise<string>>>,
);

const BASE_COLORS = {
  white: '#FFFFFF',
  gray: {
    50: '#FAFAFA',
    100: '#F5F5F5',
    200: '#E5E5E5',
    300: '#D4D4D4',
    400: '#A3A3A3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
    950: '#0A0A0A',
  },
  accent: {
    50: '#EEF9FF',
    100: '#D8F1FF',
    200: '#BAE7FF',
    300: '#8ADAFF',
    400: '#53C4FF',
    500: '#c93d8b',
    600: '#1488FC',
    700: '#0D6FE8',
    800: '#1259BB',
    900: '#154E93',
    950: '#122F59',
  },
  green: {
    50: '#F0FDF4',
    100: '#DCFCE7',
    200: '#BBF7D0',
    300: '#86EFAC',
    400: '#4ADE80',
    500: '#22C55E',
    600: '#16A34A',
    700: '#15803D',
    800: '#166534',
    900: '#14532D',
    950: '#052E16',
  },
  orange: {
    50: '#FFFAEB',
    100: '#FEEFC7',
    200: '#FEDF89',
    300: '#FEC84B',
    400: '#FDB022',
    500: '#F79009',
    600: '#DC6803',
    700: '#B54708',
    800: '#93370D',
    900: '#792E0D',
  },
  red: {
    50: '#FEF2F2',
    100: '#FEE2E2',
    200: '#FECACA',
    300: '#FCA5A5',
    400: '#F87171',
    500: '#EF4444',
    600: '#DC2626',
    700: '#B91C1C',
    800: '#991B1B',
    900: '#7F1D1D',
    950: '#450A0A',
  },
};

const COLOR_PRIMITIVES = {
  ...BASE_COLORS,
  alpha: {
    white: generateAlphaPalette(BASE_COLORS.white),
    gray: generateAlphaPalette(BASE_COLORS.gray[900]),
    red: generateAlphaPalette(BASE_COLORS.red[500]),
    accent: generateAlphaPalette(BASE_COLORS.accent[500]),
  },
};

export default defineConfig({
  shortcuts: {
    'beiengai-ease-cubic-bezier': 'ease-[cubic-bezier(0.4,0,0.2,1)]',
    'transition-theme': 'transition-[background-color,border-color,color] duration-150 beiengai-ease-cubic-bezier',
    kdb: 'bg-beiengai-elements-code-background text-beiengai-elements-code-text py-1 px-1.5 rounded-md',
    'max-w-chat': 'max-w-[var(--chat-max-width)]',
  },
  rules: [
    /**
     * This shorthand doesn't exist in Tailwind and we overwrite it to avoid
     * any conflicts with minified CSS classes.
     */
    ['b', {}],
  ],
  theme: {
    colors: {
      ...COLOR_PRIMITIVES,
      beiengai: {
        elements: {
          borderColor: 'var(--beiengai-elements-borderColor)',
          borderColorActive: 'var(--beiengai-elements-borderColorActive)',
          background: {
            depth: {
              1: 'var(--beiengai-elements-bg-depth-1)',
              2: 'var(--beiengai-elements-bg-depth-2)',
              3: 'var(--beiengai-elements-bg-depth-3)',
              4: 'var(--beiengai-elements-bg-depth-4)',
            },
          },
          textPrimary: 'var(--beiengai-elements-textPrimary)',
          textSecondary: 'var(--beiengai-elements-textSecondary)',
          textTertiary: 'var(--beiengai-elements-textTertiary)',
          code: {
            background: 'var(--beiengai-elements-code-background)',
            text: 'var(--beiengai-elements-code-text)',
          },
          button: {
            primary: {
              background: 'var(--beiengai-elements-button-primary-background)',
              backgroundHover: 'var(--beiengai-elements-button-primary-backgroundHover)',
              text: 'var(--beiengai-elements-button-primary-text)',
            },
            secondary: {
              background: 'var(--beiengai-elements-button-secondary-background)',
              backgroundHover: 'var(--beiengai-elements-button-secondary-backgroundHover)',
              text: 'var(--beiengai-elements-button-secondary-text)',
            },
            danger: {
              background: 'var(--beiengai-elements-button-danger-background)',
              backgroundHover: 'var(--beiengai-elements-button-danger-backgroundHover)',
              text: 'var(--beiengai-elements-button-danger-text)',
            },
          },
          item: {
            contentDefault: 'var(--beiengai-elements-item-contentDefault)',
            contentActive: 'var(--beiengai-elements-item-contentActive)',
            contentAccent: 'var(--beiengai-elements-item-contentAccent)',
            contentDanger: 'var(--beiengai-elements-item-contentDanger)',
            backgroundDefault: 'var(--beiengai-elements-item-backgroundDefault)',
            backgroundActive: 'var(--beiengai-elements-item-backgroundActive)',
            backgroundAccent: 'var(--beiengai-elements-item-backgroundAccent)',
            backgroundDanger: 'var(--beiengai-elements-item-backgroundDanger)',
          },
          actions: {
            background: 'var(--beiengai-elements-actions-background)',
            code: {
              background: 'var(--beiengai-elements-actions-code-background)',
            },
          },
          artifacts: {
            background: 'var(--beiengai-elements-artifacts-background)',
            backgroundHover: 'var(--beiengai-elements-artifacts-backgroundHover)',
            borderColor: 'var(--beiengai-elements-artifacts-borderColor)',
            inlineCode: {
              background: 'var(--beiengai-elements-artifacts-inlineCode-background)',
              text: 'var(--beiengai-elements-artifacts-inlineCode-text)',
            },
          },
          messages: {
            background: 'var(--beiengai-elements-messages-background)',
            linkColor: 'var(--beiengai-elements-messages-linkColor)',
            code: {
              background: 'var(--beiengai-elements-messages-code-background)',
            },
            inlineCode: {
              background: 'var(--beiengai-elements-messages-inlineCode-background)',
              text: 'var(--beiengai-elements-messages-inlineCode-text)',
            },
          },
          icon: {
            success: 'var(--beiengai-elements-icon-success)',
            error: 'var(--beiengai-elements-icon-error)',
            primary: 'var(--beiengai-elements-icon-primary)',
            secondary: 'var(--beiengai-elements-icon-secondary)',
            tertiary: 'var(--beiengai-elements-icon-tertiary)',
          },
          preview: {
            addressBar: {
              background: 'var(--beiengai-elements-preview-addressBar-background)',
              backgroundHover: 'var(--beiengai-elements-preview-addressBar-backgroundHover)',
              backgroundActive: 'var(--beiengai-elements-preview-addressBar-backgroundActive)',
              text: 'var(--beiengai-elements-preview-addressBar-text)',
              textActive: 'var(--beiengai-elements-preview-addressBar-textActive)',
            },
          },
          terminals: {
            background: 'var(--beiengai-elements-terminals-background)',
            buttonBackground: 'var(--beiengai-elements-terminals-buttonBackground)',
          },
          dividerColor: 'var(--beiengai-elements-dividerColor)',
          loader: {
            background: 'var(--beiengai-elements-loader-background)',
            progress: 'var(--beiengai-elements-loader-progress)',
          },
          prompt: {
            background: 'var(--beiengai-elements-prompt-background)',
          },
          sidebar: {
            dropdownShadow: 'var(--beiengai-elements-sidebar-dropdownShadow)',
            buttonBackgroundDefault: 'var(--beiengai-elements-sidebar-buttonBackgroundDefault)',
            buttonBackgroundHover: 'var(--beiengai-elements-sidebar-buttonBackgroundHover)',
            buttonText: 'var(--beiengai-elements-sidebar-buttonText)',
          },
          cta: {
            background: 'var(--beiengai-elements-cta-background)',
            text: 'var(--beiengai-elements-cta-text)',
          },
        },
      },
    },
  },
  transformers: [transformerDirectives()],
  presets: [
    presetUno({
      dark: {
        light: '[data-theme="light"]',
        dark: '[data-theme="dark"]',
      },
    }),
    presetIcons({
      warn: true,
      collections: {
        ...customIconCollection,
      },
    }),
  ],
});

/**
 * Generates an alpha palette for a given hex color.
 *
 * @param hex - The hex color code (without alpha) to generate the palette from.
 * @returns An object where keys are opacity percentages and values are hex colors with alpha.
 *
 * Example:
 *
 * ```
 * {
 *   '1': '#FFFFFF03',
 *   '2': '#FFFFFF05',
 *   '3': '#FFFFFF08',
 * }
 * ```
 */
function generateAlphaPalette(hex: string) {
  return [1, 2, 3, 4, 5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100].reduce(
    (acc, opacity) => {
      const alpha = Math.round((opacity / 100) * 255)
        .toString(16)
        .padStart(2, '0');

      acc[opacity] = `${hex}${alpha}`;

      return acc;
    },
    {} as Record<number, string>,
  );
}
