import { PaletteColorOptions, createTheme } from '@mui/material';
declare module '@mui/material' {
  interface Color {
    main: string;
  }
}
declare module '@mui/material' {
  interface CustomPalette {
    ['white']?: PaletteColorOptions;
    ['bright-midnight']?: PaletteColorOptions;
    ['miami-marmelade']?: PaletteColorOptions;
    ['flame-red']?: PaletteColorOptions;
    ['perfect-landing']?: PaletteColorOptions;
    ['greenish-blue']?: PaletteColorOptions;
    ['grey']?: PaletteColorOptions;
    ['default']?: PaletteColorOptions;
  }
  interface Palette extends CustomPalette {}
  interface PaletteOptions extends CustomPalette {}
  interface SwitchPropsColorOverrides {
    'bright-midnight': true;
    default: true;
  }
}
declare module '@mui/material' {
  interface ButtonPropsColorOverrides {
    default: true;
  }

  interface ButtonPropsVariantOverrides {
    google: true;
  }

  interface ButtonPropsVariantOverrides {
    card: true;
  }
}
declare module '@mui/material/styles' {
  interface TypographyVariants {
    t1: React.CSSProperties;
    t2: React.CSSProperties;
    t3: React.CSSProperties;
    t4: React.CSSProperties;
    t5: React.CSSProperties;
    t6: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    t1?: React.CSSProperties;
    t2?: React.CSSProperties;
    t3?: React.CSSProperties;
    t4?: React.CSSProperties;
    t5?: React.CSSProperties;
    t6?: React.CSSProperties;
  }
}
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    t1: true;
    t2: true;
    t3: true;
    t4: true;
    t5: true;
    t6: true;
  }
}
declare module '@mui/material' {
  interface StackPropsVariantOverrides {
    row: true;
    className: true;
  }
}

export const colors = {
  primary: '#041492', // blue
  primaryPressed: '#031074', // dark-blue
  primaryDisabled: '#6872BD', // light-blue
  primaryDisabledText: '#03107480', // light dark

  secondary: '#F8931F', // orange
  success: '#0c8d4f', // green
  error: '#88292F', // blend red

  default: '#EBEFF2', // bright grey
  defaultText: '#5E6B74', // grey
  defaultPressed: '#D8E0E6', //bright grey
  defaultDisabled: '#D8E0E6', // bright grey

  white: '#FFFFFF',
  whitesmoke: '#F5F5F5',
};

export const fonts = {
  primary: 'Quicksand, sans-serif',
  secondary: 'Oswald, sans-serif',
};

export const theme = createTheme({
  typography: {
    fontFamily: fonts.primary,

    h1: {
      fontSize: 30,
      fontWeight: 'normal',
      lineHeight: '2.167',
      '&.main': {
        color: colors.whitesmoke,
      },
    },
    h2: {
      fontSize: 24,
      fontWeight: 'normal',
      lineHeight: '1.6',
      '&.main': {
        color: colors.whitesmoke,
      },
    },
    h3: {
      fontSize: 20,
      fontWeight: 'normal',
      lineHeight: '1.5',
      '&.main': {
        color: colors.whitesmoke,
      },
    },
    h4: {
      fontSize: 18,
      fontWeight: 'normal',
      lineHeight: '1.428571',
      '&.main': {
        color: colors.whitesmoke,
      },
    },
    h5: {
      fontSize: 16,
      fontWeight: 'normal',
      lineHeight: '1.4',
      '&.main': {
        color: colors.whitesmoke,
      },
    },
    h6: {
      fontSize: 14,
      fontWeight: 'lighter',
      lineHeight: '1.3333',
      '&.main': {
        color: colors.whitesmoke,
      },
    },
    // t1: {
    // fontFamily: 'Source Sans 3',
    //   fontSize: '16px',
    //   fontWeight: 'bold',
    // },
    // t2: {
    //   fontFamily: 'Source Sans 3',
    //   fontSize: '16px',
    //   fontWeight: 600,
    // },
    // t3: {
    //   fontFamily: 'Source Sans 3',
    //   fontSize: '16px',
    //   fontWeight: 'normal',
    // },
    // t4: {
    //   fontFamily: 'Source Sans 3',
    //   fontSize: '14px',
    //   fontWeight: 600,
    // },
    // t5: {
    //   fontFamily: 'Source Sans 3',
    //   fontSize: '14px',
    //   fontWeight: 'normal',
    // },
    // t6: {
    //   fontFamily: 'Source Sans 3',
    //   fontSize: '12px',
    //   fontWeight: 'normal',
    // },
  },
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    },
    error: {
      main: colors.error,
    },
    success: {
      main: colors.success,
    },
    default: {
      main: colors.default,
    },
    white: {
      main: colors.white,
    },
    // 'bright-midnight': {
    //   main: '#041492',
    //   '100': '#E5E7F4',
    //   '200': '#CCD0E9',
    //   '300': '#9AA1D3',
    //   '400': '#6872BD',
    //   '500': '#3643A7',
    //   '600': '#041492',
    //   '700': '#031074',
    //   '800': '#020C57',
    //   '900': '#01073A',
    //   // "1000": "#00041D",
    // },
    // 'miami-marmelade': {
    //   '100': '#FEF4E8',
    //   '200': '#FDE9D2',
    //   '300': '#FCD3A5',
    //   '400': '#FABE78',
    //   '500': '#F9A84B',
    //   '600': '#F8931F',
    //   '700': '#C67518',
    //   '800': '#945812',
    //   '900': '#633A0C',
    //   // "1000": "#311D06",
    // },
    // 'flame-red': {
    //   '100': '#F3E9EA',
    //   '200': '#E7D4D5',
    //   '300': '#CFA9AB',
    //   '400': '#B77E82',
    //   '500': '#9F5358',
    //   '600': '#88292F',
    //   '700': '#6C2025',
    //   '800': '#51181C',
    //   '900': '#361012',
    //   // "1000": "#1B0809",
    // },
    // 'perfect-landing': {
    //   '100': '#F5F7F8',
    //   '200': '#EBEFF2',
    //   '300': '#D8E0E6',
    //   '400': '#C4D1DA',
    //   '500': '#B1C2CE',
    //   '600': '#9EB3C2',
    //   '700': '#7E8F9B',
    //   '800': '#5E6B74',
    //   '900': '#3F474D',
    //   // "1000": "#1F2326",
    // },
    // 'greenish-blue': {
    //   '100': '#E6F3F3',
    //   '200': '#CEE8E7',
    //   '300': '#9DD1CF',
    //   '400': '#6DBAB7',
    //   '500': '#3CA39F',
    //   '600': '#0C8C88',
    //   '700': '#09706C',
    //   '800': '#075451',
    //   '900': '#043736',
    //   // "1000": "#021C1B",
    // },
  },
  components: {
    MuiTextField: {
      variants: [
        {
          props: { variant: 'outlined' },
          style: {
            '& .MuiInputLabel-root': {
              fontFamily: fonts.primary,
              color: `${colors.whitesmoke} !important`, // Цвет текста label
              borderColor: colors.whitesmoke,
            },
            '& .MuiOutlinedInput-root': {
              borderColor: colors.whitesmoke, // Цвет рамки
              '& fieldset': {
                borderColor: colors.whitesmoke, // Цвет рамки
              },
              '&:hover fieldset': {
                borderColor: colors.whitesmoke, // Цвет рамки
              },
              '&.Mui-focused fieldset': {
                borderColor: colors.whitesmoke, // Цвет рамки при фокусе (нажатии)
              },
              '& input': {
                minWidth: '200px',
                color: colors.whitesmoke, // Цвет текста внутри input
                fontFamily: fonts.primary,
              },
            },
          },
        },
      ],
    },
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          minWidth: '260px',
        },
      },
    },
    MuiButton: {
      variants: [
        {
          props: { variant: 'contained' },
          style: {
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: 'normal',
            fontFamily: fonts.primary,
            color: colors.whitesmoke,
            backgroundColor: colors.primary,
          },
        },
        {
          props: {
            variant: 'contained',
            color: 'default',
          },
          style: {
            padding: '8px 16px',
            textTransform: 'capitalize',
            textAlign: 'center',
            color: colors.whitesmoke,
            backgroundColor: 'colors.primaryPressed',

            '&:hover': {
              backgroundColor: colors.secondary,
            },

            '&:active': {
              backgroundColor: colors.secondary,
            },
            '&:disabled': {
              color: colors.white,
              backgroundColor: colors.secondary,
            },
          },
        },
        {
          props: {
            variant: 'contained',
            color: 'default',
            className: 'submit-user-changes',
          },
          style: {
            padding: '14px 16px',
            textTransform: 'capitalize',
            textAlign: 'center',
            color: colors.whitesmoke,
            backgroundColor: 'colors.primaryPressed',

            '&:hover': {
              backgroundColor: colors.success,
            },

            '&:active': {
              backgroundColor: colors.success,
            },
            '&:disabled': {
              color: colors.white,
              backgroundColor: colors.secondary,
            },
          },
        },
        {
          props: {
            variant: 'contained',
            color: 'default',
            className: 'submit-ticket-changes',
          },
          style: {
            padding: '8px 16px',
            textTransform: 'capitalize',
            textAlign: 'center',
            color: colors.whitesmoke,
            backgroundColor: 'colors.primaryPressed',

            '&:hover': {
              backgroundColor: colors.success,
            },

            '&:active': {
              backgroundColor: colors.success,
            },
            '&:disabled': {
              color: colors.white,
              backgroundColor: colors.secondary,
            },
          },
        },
        {
          props: {
            variant: 'contained',
            color: 'primary',
            className: 'flight-search',
          },
          style: {
            minWidth: '300px',
            padding: '12px 16px 12px 16px',
            textTransform: 'capitalize',
            textAlign: 'center',
            '&:hover': {
              backgroundColor: colors.primaryPressed,
            },
            '&:active': {
              backgroundColor: colors.primaryPressed,
            },
            '&:disabled': {
              color: colors.white,
              backgroundColor: colors.primaryDisabled,
            },
          },
        },
        {
          props: {
            variant: 'contained',
            color: 'primary',
            className: 'flight-purchace',
          },
          style: {
            minWidth: '80px',
            padding: '6px 12px',
            textTransform: 'capitalize',
            textAlign: 'center',
            '&:hover': {
              backgroundColor: colors.success,
            },
            '&:active': {
              backgroundColor: colors.success,
            },
            '&:disabled': {
              color: colors.white,
              backgroundColor: colors.primaryDisabled,
            },
          },
        },
      ],
    },
    MuiStack: {
      styleOverrides: {
        root: {
          // flights-page.tsx
          '&.page-stack': {
            backgroundColor: colors.defaultText,
            minHeight: '100vh',
            maxWidth: '100vw',
          },
          // flights-page.tsx, paths-list.tsx
          '&.errors-stack': {
            display: 'flex',
            justifyContent: 'center',
            minWidth: '100px',
            maxWidth: '2100px',
          },
          // paths-list.tsx
          '&.paths-stack': {
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            paddingTop: 20,
            paddingBottom: 20,
            gap: 20,
          },
          // flights-list.tsx
          '&.flights-element-stack': {
            backgroundColor: colors.defaultPressed,
            boxSizing: 'border-box',
            justifyContent: 'space-between',
            minHeight: '100px',
            minWidth: '600px',
            padding: '20px',
            borderRadius: '8px',
            border: `1px solid ${colors.whitesmoke}`,
          },
          // flights-list.tsx
          '&.price-stack': {
            alignItems: 'flex-start',
            minWidth: '120px',
            padding: 10,
          },
          // flights-list.tsx
          '&.path-stack': {
            minWidth: '180px',
            padding: 10,
            alignItems: 'center',
          },
          // flights-list.tsx
          '&.path-stack-outlook': {
            flexDirection: 'column',
            padding: 20,
            minWidth: '400px',
          },
          // flights-list.tsx
          '&.path-transfers-stack': {
            justifyContent: 'space-around',
          },
          // flights-item.tsx
          '&.plane-icon-stack': {
            padding: 10,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: ' flex-end',
            width: '10%',
          },
          '&.users-stack': {
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            maxWidth: 1200,
            width: '100%',
            paddingTop: 20,
            paddingBottom: 20,
            gap: 20,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          '&.flight-card': {
            backgroundColor: colors.white,
          },
          '&.user-card': {
            backgroundColor: colors.white,
            minWidth: 450,
          },
          '&.ticket-card': {
            backgroundColor: colors.white,
            minWidth: 450,
          },
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          padding: 0,
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          backgroundColor: colors.defaultText,
          maxWidth: 'false',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          '@media (min-width: 1200px)': {
            maxWidth: '100%',
          },
          '@media (min-height: 600px)': {
            minHeight: '100vh',
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          minWidth: '100px',
        },
      },
    },
  },
});
