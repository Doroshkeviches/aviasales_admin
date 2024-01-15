import { PaletteColorOptions, createTheme, styled } from '@mui/material';
import image from './assets/plane1.png';

export const GlobalStyles = styled('div')({
  body: {
    margin: 0,
    padding: 0,
  },
});
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
  primary: '#031074', // dark-blue
  primaryPressed: '#041492', // blue
  primaryDisabled: '#6872BD', // light-blue

  secondary: '#F8931F', // orange
  success: '#0c8d4f', // green
  error: '#F44336',
  successBlend: '#0c8d60', // blend green
  errorBlend: '#88292F', // blend red

  brightGrey: '#EBEFF2',
  lightGrey: '#D1D1D1',
  grey: '#5E6B74',
  greyPressed: '#D8E0E6',
  greyDisabled: '#D8E0E6',

  blue: '#002ead',
  black: '#000000',
  white: '#FFFFFF',
  whitesmoke: '#F5F5F5',
};

export const fonts = {
  primary: 'Quicksand, sans-serif',
  secondary: 'Oswald, sans-serif',
};

export const theme = createTheme({
  typography: {
    allVariants: {
      cursor: 'default',
      fontFamily: fonts.primary,
    },

    h1: {
      fontSize: 30,
      fontWeight: 'normal',
      lineHeight: '2.167',
      '&.main': {
        color: colors.whitesmoke,
      },
      '@media (max-width: 785px)': {
        lineHeight: '1.6',
        fontSize: 24,
      },
      '@media (max-width: 520px)': {
        lineHeight: '1.4',
        fontSize: 20,
      },
      '@media (max-width: 460px)': {
        lineHeight: '1.2',
        fontSize: 18,
      },
      '@media (max-width: 360px)': {
        lineHeight: '1',
        fontSize: 16,
      },
    },
    h2: {
      fontSize: 24,
      fontWeight: 'normal',
      lineHeight: '1.6',
      '&.main': {
        color: colors.whitesmoke,
      },
      '@media (max-width: 785px)': {
        lineHeight: '1.5',
        fontSize: 20,
      },
      '@media (max-width: 520px)': {
        lineHeight: '1.3',
        fontSize: 18,
      },
      '@media (max-width: 460px)': {
        lineHeight: '1.2',
        fontSize: 16,
      },
      '@media (max-width: 360px)': {
        lineHeight: '1',
        fontSize: 14,
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
      '&.personal-info': {
        fontWeight: 500,
        color: colors.primaryPressed,
      },
      '@media (max-width: 1100px)': {
        lineHeight: '1.2',
        fontSize: 14,
      },
      '@media (max-width: 785px)': {
        lineHeight: '1.2',
        fontSize: 12,
      },
      '@media (max-width: 460px)': {
        lineHeight: '1',
        fontSize: 10,
      },
    },
    h6: {
      fontSize: 14,
      fontWeight: 'lighter',
      lineHeight: '1.3333',
      '&.main': {
        color: colors.whitesmoke,
      },
      '&.forget-password': {
        marginLeft: 'auto',
        cursor: 'pointer',
        fontWeight: 500,
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
      main: colors.blue,
    },
    white: {
      main: colors.white,
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiSvgIcon-root': {
            color: colors.whitesmoke,
          },
          '& .MuiInputLabel-root': {
            fontFamily: fonts.primary,
            color: `${colors.whitesmoke} !important`, // Цвет текста label
            borderColor: colors.whitesmoke,
          },
          '& .MuiOutlinedInput-root': {
            cursor: 'pointer',
            borderColor: colors.whitesmoke, // Цвет рамки

            '& fieldset': {
              borderColor: colors.whitesmoke, // Цвет рамки
            },
            '&:hover fieldset': {
              cursor: 'pointer',
              borderColor: colors.whitesmoke, // Цвет рамки
            },
            '&.Mui-focused fieldset': {
              borderColor: colors.whitesmoke, // Цвет рамки при фокусе (нажатии)
            },
            '& input': {
              cursor: 'pointer',
              maxWidth: '100%',
              color: colors.whitesmoke, // Цвет текста внутри input
              fontFamily: fonts.primary,
            },
          },
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          '&.form-control-search': {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            backgroundColor: colors.grey,
            padding: '40px 0px',
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          width: '100%',
          lineHeight: 1.2,
          margin: 0,
          paddingTop: 6,
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          // minWidth: '70%',
          // maxWidth: '70%',
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
            backgroundColor: colors.primary,

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
            color: 'primary',
            className: 'flight-search',
          },
          style: {
            backgroundColor: colors.primary,
            maxWidth: '35%',
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
            color: 'success',
          },
          style: {
            minWidth: '80px',
            backgroundColor: colors.primary,
            padding: '6px 12px',
            textTransform: 'capitalize',
            textAlign: 'center',

            '@media (max-width: 785px)': {
              minWidth: '40px',
              padding: '3px 12px',
              lineHeight: '1.4',
              fontSize: 14,
            },
            '@media (max-width: 460px)': {
              padding: '3px 8px',
              lineHeight: '1.2',
              fontSize: 12,
            },
            '@media (max-width: 360px)': {
              padding: '3px 8px',
              lineHeight: '1',
              fontSize: 10,
            },
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
          '&.page-stack': {
            flexDirection: 'column',
            minWidth: '100%',
          },
          '&.cities-search-stack': {
            paddingTop: 20,
            minWidth: '35%',
            gap: 18,
            flexWrap: 'wrap',
          },
          '&.paths-stack': {
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '40px',
            gap: 20,
          },
          '&.flights-element-stack': {
            backgroundColor: colors.whitesmoke,
            justifyContent: 'space-between',
            minHeight: '100px',
            padding: '20px',
            borderRadius: '8px',

            '@media (max-width: 785px)': {
              padding: '10px',
            },
            '@media (max-width: 460px)': {
              padding: 5,
            },
          },
          '&.price-stack': {
            alignItems: 'center',
            minWidth: '10%',
            padding: 10,
            gap: 10,
            flexDirection: 'column',

            '@media (max-width: 460px)': {
              padding: 5,
              justifyContent: 'center',
            },
          },
          '&.path-stack': {
            minWidth: '180px',
            padding: 10,
            justifyContent: 'space-between',
            alignItems: 'center',
          },
          '&.path-stack-outlook': {
            flexDirection: 'column',
            padding: 20,
            width: '25vw',

            '@media (max-width: 785px)': {
              padding: 10,
            },
            '@media (max-width: 460px)': {
              padding: 5,
            },
          },
          '&.transfer-path': {
            width: '100%',
            borderTop: `1px solid ${colors.black}`,
            padding: '0px',
            borderRadius: '0px',
          },
          '&.elem-transfer-path': {
            width: '100%',
            height: '3px',
            padding: '0px',
            backgroundColor: colors.black,
            borderRadius: '0px',
          },
          '&.path-transfers-stack': {
            borderTop: `1px solid ${colors.black}`,
            justifyContent: 'space-between',
            gap: '20%',

            '@media (max-width: 785px)': {
              gap: '10%',
            },
          },
          '&.plane-icon-stack': {
            padding: 0,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            width: '100%',
          },
          '&.users-stack': {
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            width: '100%',
            padding: '20px 0',
            gap: 20,
          },
          '&.auth-stack': {
            flexDirection: 'column',
            borderRadius: '24px',
            backgroundImage: `url(${image})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            padding: '30px 10px 100px',
            width: '25vw',
            minHeight: '45vh',
          },
          '&.users-search-stack': {
            display: 'flex',
            gap: 10,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            backgroundColor: colors.grey,
            padding: '40px 0px',
          },
          '&.tickets-search-stack': {
            display: 'flex',
            gap: 10,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colors.grey,
            padding: '40px 0px',
          },
          '&.user-edit-stack': {
            display: 'flex',
            gap: 16,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            backgroundColor: colors.grey,
            padding: 20,
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
            backgroundColor: colors.whitesmoke,
            width: '35%',
            '@media (max-width: 1100px)': {
              width: '60%',
            },
          },
          '&.ticket-card': {
            backgroundColor: colors.whitesmoke,
            width: '35%',
            '@media (max-width: 1100px)': {
              width: '60%',
            },
          },
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: 10,
        },
      },
    },
    MuiCardActions: {
      styleOverrides: {
        root: {
          '&.MuiCardActions-root': {
            padding: '0px 10px 10px',
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
          backgroundColor: colors.lightGrey,
          maxWidth: 'false',
          minHeight: '100vh',
          minWidth: '100%',
          justifyContent: 'center',
          padding: 0,

          '.auth': {
            alignItems: 'center',
          },

          '@media (min-width: 1200px)': {
            maxWidth: '100%',
          },
          '@media (min-width: 600px)': {
            padding: 0,
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          minWidth: '20%',
          '& .MuiSelect-select': {
            padding: '4px 8px',
          },
          '@media (max-width: 1000px)': {},
          '@media (max-width: 460px)': {},
          '@media (max-width: 360px)': {},
        },
      },
    },
  },
});
