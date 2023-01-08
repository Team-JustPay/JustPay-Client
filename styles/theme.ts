const colors = {
  black: '#000000',
  gray_background: '#292929',
  grey_popup: '#1C1C1C',
  grey_GNB: '#121212',
  gray0: '#4A4A4A',
  gray1: '#666666',
  gray2: '#999999',
  gray3: '#CCCCCC',
  gray4: '#E6E6E6',
  gray5: '#F2F2F2',
  white: '#FFFFFF',
  main: '#36DDAB',
  main_opacity20: 'rgba(54, 221, 171, 0.2);',
  sub1: '#FF70FE',
  sub1_opacity20: 'rgba(255, 112, 254, 0.2);',
  sub2: '#FF5050',
} as const;

interface Font {
  weight: 400 | 500 | 700;
  size: number;
  lineHeight: number;
}

function FONT({ weight, size, lineHeight }: Font): string {
  return `
    font-family: 'Pretendard-Regular';
    font-weight: ${weight};
    font-size: ${size}rem;
    line-height: ${lineHeight}px;
    `;
}

const fonts = {
  title20pt: FONT({ weight: 700, size: 2.0, lineHeight: 24 }),
  title18pt: FONT({ weight: 700, size: 1.8, lineHeight: 21 }),
  title16pt: FONT({ weight: 700, size: 1.6, lineHeight: 19 }),

  medium16pt: FONT({ weight: 500, size: 1.6, lineHeight: 19 }),
  regular16pt: FONT({ weight: 400, size: 1.6, lineHeight: 19 }),

  title14pt: FONT({ weight: 700, size: 1.4, lineHeight: 17 }),
  medium14pt: FONT({ weight: 500, size: 1.4, lineHeight: 17 }),
  regular14pt: FONT({ weight: 400, size: 1.4, lineHeight: 17 }),

  title12pt: FONT({ weight: 700, size: 1.2, lineHeight: 14 }),
  regular12pt: FONT({ weight: 400, size: 1.2, lineHeight: 14 }),

  regular10pt: FONT({ weight: 400, size: 1.0, lineHeight: 12 }),
} as const;

const theme = {
  colors,
  fonts,
} as const;

export default theme;
