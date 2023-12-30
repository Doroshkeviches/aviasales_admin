import { PaletteColorOptions, createTheme } from "@mui/material";

declare module "@mui/material" {
	interface Color {
		main: string;
	}
}

declare module "@mui/material" {
	interface CustomPalette {
		["white"]?: PaletteColorOptions;
		["bright-midnight"]?: PaletteColorOptions;
		["miami-marmelade"]?: PaletteColorOptions;
		["flame-red"]?: PaletteColorOptions;
		["perfect-landing"]?: PaletteColorOptions;
		["greenish-blue"]?: PaletteColorOptions;
		["grey"]?: PaletteColorOptions;
		["default"]?: PaletteColorOptions;
	}
	interface Palette extends CustomPalette { }
	interface PaletteOptions extends CustomPalette { }
	interface SwitchPropsColorOverrides {
		"bright-midnight": true;
		default: true;
	}
}

declare module "@mui/material" {
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
declare module "@mui/material/styles" {
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

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
	interface TypographyPropsVariantOverrides {
		t1: true;
		t2: true;
		t3: true;
		t4: true;
		t5: true;
		t6: true;
	}
}

export const colors = {
	primary: "#041492", //Bright Midnight/600
	primaryPressed: "#031074", //Bright Midnight/700
	primaryDisabled: "#6872BD", //Bright Midnight/400
	primaryDisabledText: "#03107480",

	secondary: "#F8931F",

	success: "#0C8C88",

	default: "#EBEFF2", //Perfect Landing/200
	defaultText: "#5E6B74",
	defaultPressed: "#D8E0E6", //Perfect Landing/300
	defaultDisabled: "#D8E0E6",

	disabledWhite: "#ffffff80",
	white: "#FFFFFF",
	grey: "#6E7079",
	lightGrey: "#EFF1F2",
	error: "#88292F",
};

export const theme = createTheme({
	typography: {
		h1: {
			fontFamily: "Source Sans 3",
			fontWeight: "bold",
			fontSize: "60px",
		},
		h2: {
			fontFamily: "Source Sans 3",
			fontWeight: 600,
			fontSize: "24px",
		},
		h3: {
			fontFamily: "Source Sans 3",
			fontWeight: "normal",
			fontSize: "24px",
		},
		h4: {
			fontFamily: "Source Sans 3",
			fontWeight: "bold",
			fontSize: "18px",
		},
		t1: {
			fontFamily: "Source Sans 3",
			fontSize: "16px",
			fontWeight: "bold",
		},
		t2: {
			fontFamily: "Source Sans 3",
			fontSize: "16px",
			fontWeight: 600,
		},
		t3: {
			fontFamily: "Source Sans 3",
			fontSize: "16px",
			fontWeight: "normal",
		},
		t4: {
			fontFamily: "Source Sans 3",
			fontSize: "14px",
			fontWeight: 600,
		},
		t5: {
			fontFamily: "Source Sans 3",
			fontSize: "14px",
			fontWeight: "normal",
		},
		t6: {
			fontFamily: "Source Sans 3",
			fontSize: "12px",
			fontWeight: "normal",
		},
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
		grey: {
			main: colors.grey,
		},
		"bright-midnight": {
			main: "#041492",
			"100": "#E5E7F4",
			"200": "#CCD0E9",
			"300": "#9AA1D3",
			"400": "#6872BD",
			"500": "#3643A7",
			"600": "#041492",
			"700": "#031074",
			"800": "#020C57",
			"900": "#01073A",
			// "1000": "#00041D",
		},
		"miami-marmelade": {
			"100": "#FEF4E8",
			"200": "#FDE9D2",
			"300": "#FCD3A5",
			"400": "#FABE78",
			"500": "#F9A84B",
			"600": "#F8931F",
			"700": "#C67518",
			"800": "#945812",
			"900": "#633A0C",
			// "1000": "#311D06",
		},
		"flame-red": {
			"100": "#F3E9EA",
			"200": "#E7D4D5",
			"300": "#CFA9AB",
			"400": "#B77E82",
			"500": "#9F5358",
			"600": "#88292F",
			"700": "#6C2025",
			"800": "#51181C",
			"900": "#361012",
			// "1000": "#1B0809",
		},
		"perfect-landing": {
			"100": "#F5F7F8",
			"200": "#EBEFF2",
			"300": "#D8E0E6",
			"400": "#C4D1DA",
			"500": "#B1C2CE",
			"600": "#9EB3C2",
			"700": "#7E8F9B",
			"800": "#5E6B74",
			"900": "#3F474D",
			// "1000": "#1F2326",
		},
		"greenish-blue": {
			"100": "#E6F3F3",
			"200": "#CEE8E7",
			"300": "#9DD1CF",
			"400": "#6DBAB7",
			"500": "#3CA39F",
			"600": "#0C8C88",
			"700": "#09706C",
			"800": "#075451",
			"900": "#043736",
			// "1000": "#021C1B",
		},
	},
	components: {


		MuiButton: {
			variants: [
				{
					props: { variant: "google" },
					style: {
						border: "none",
						textTransform: "none",
						fontSize: "16px",
						fontFamily: "Source Sans 3",
						color: "#000000",
						padding: "12px 0",
						boxShadow: "0px 0px 24px 0px rgba(50, 50, 50, 0.08)",
						borderRadius: "8px",
					},
				},
				{
					props: { variant: "contained" },
					style: {
						fontSize: "16px",
						backgroundColor: colors.grey,
					},
				},
				{
					props: {
						variant: "contained" as any,
						color: "primary",
						size: "small",
					},
					style: {
						backgroundColor: colors.primary,
						color: colors.white,
						borderRadius: "8px",
						fontWeight: 600,
						padding: "8px 16px 8px 16px",
						textTransform: "capitalize",
						fontFamily: "Source Sans 3 Semibold",
						textAlign: "center",

						"&:hover": {
							backgroundColor: colors.primary,
						},

						"&:active": {
							backgroundColor: colors.primaryPressed,
						},
						"&:disabled": {
							color: colors.white,
							backgroundColor: colors.primaryDisabled,
						},
					},
				},
				{
					props: { variant: "contained", color: "default", size: "small" },
					style: {
						backgroundColor: colors.default,
						color: colors.defaultText,
						borderRadius: "8px",
						fontWeight: 600,
						padding: "8px 16px 8px 16px",
						textTransform: "capitalize",
						fontFamily: "Source Sans 3 Semibold",
						textAlign: "center",

						"&:disabled": {
							color: colors.defaultText,
							backgroundColor: colors.defaultDisabled,
						},
					},
				},
				{
					props: {
						variant: "contained" as any,
						color: "primary",
						size: "medium",
					},
					style: {
						backgroundColor: colors.primary,
						color: colors.white,
						borderRadius: "8px",
						fontWeight: 600,
						padding: "12px 16px 12px 16px",
						textTransform: "capitalize",
						fontFamily: "Source Sans 3 Semibold",
						textAlign: "center",

						"&:hover": {
							backgroundColor: colors.primary,
						},

						"&:active": {
							backgroundColor: colors.primaryPressed,
						},
						"&:disabled": {
							color: colors.white,
							backgroundColor: colors.primaryDisabled,
						},
					},
				},
				{
					props: { variant: "contained", color: "default", size: "medium" },
					style: {
						backgroundColor: colors.default,
						color: colors.defaultText,
						borderRadius: "8px",
						fontWeight: 600,
						padding: "12px 16px 12px 16px",
						textTransform: "lowercase",
						fontFamily: "Source Sans 3 Semibold",
						textAlign: "center",

						"&:disabled": {
							color: colors.defaultText,
							backgroundColor: colors.defaultDisabled,
						},
					},
				},
				{
					props: { variant: "contained", color: "default", size: "large" },
					style: {
						backgroundColor: colors.default,
						color: colors.defaultText,
						borderRadius: "8px",
						padding: "16px",
						fontWeight: 600,
						textTransform: "lowercase",
						fontFamily: "Source Sans 3 Semibold",
						textAlign: "center",

						"&:disabled": {
							color: colors.defaultText,
							backgroundColor: colors.defaultDisabled,
						},
					},
				},
				{
					props: {
						variant: "contained" as any,
						color: "primary",
						size: "large",
					},
					style: {
						backgroundColor: colors.primary,
						color: colors.white,
						borderRadius: "8px",
						padding: "16px",
						fontWeight: 600,
						textTransform: "lowercase",
						fontFamily: "Source Sans 3 Semibold",
						textAlign: "center",

						"&:hover": {
							backgroundColor: colors.primary,
						},

						"&:active": {
							backgroundColor: colors.primaryPressed,
						},
						"&:disabled": {
							color: colors.white,
							backgroundColor: colors.primaryDisabled,
						},
					},
				},
				{
					props: { variant: "outlined", color: "primary", size: "small" },
					style: {
						backgroundColor: colors.white,
						color: colors.primary,
						border: "1px solid #041492",
						borderRadius: "8px",
						padding: "8px 16px 8px 16px",
						textTransform: "capitalize",
						fontSize: "16px",
						fontWeight: 600,
						fontFamily: "Source Sans 3 Semibold",
						textAlign: "center",

						"&:active": {
							backgroundColor: colors.primaryPressed,
							color: colors.white,
						},
						"&:disabled": {
							color: colors.primaryDisabled,
							backgroundColor: colors.disabledWhite,
						},
					},
				},
				{
					props: { variant: "outlined", color: "primary", size: "medium" },
					style: {
						backgroundColor: colors.white,
						color: colors.primary,
						border: "1px solid #041492",
						borderRadius: "8px",
						padding: "12px 16px 12px 16px",
						fontSize: "16px",
						fontWeight: 600,
						textTransform: "capitalize",
						fontFamily: "Source Sans 3 Semibold",
						textAlign: "center",

						"&:active": {
							backgroundColor: colors.primaryPressed,
							color: colors.white,
						},
						"&:disabled": {
							color: colors.primaryDisabled,
							backgroundColor: colors.disabledWhite,
						},
					},
				},
				{
					props: { variant: "outlined", color: "primary", size: "large" },
					style: {
						backgroundColor: colors.white,
						color: colors.primary,
						border: "1px solid #041492",
						borderRadius: "8px",
						padding: "16px",
						fontSize: "16px",
						fontWeight: 600,
						textTransform: "lowercase",
						fontFamily: "Source Sans 3 Semibold",
						textAlign: "center",

						"&:active": {
							backgroundColor: colors.primaryPressed,
							color: colors.white,
						},
						"&:disabled": {
							color: colors.primaryDisabled,
							backgroundColor: colors.disabledWhite,
						},
					},
				},
				{
					props: { variant: "text", color: "primary", size: "small" },
					style: {
						color: colors.primary,
						padding: "8px 16px 8px 16px",
						fontSize: "16px",
						fontWeight: 600,
						textTransform: "capitalize",
						fontFamily: "Source Sans 3 Semibold",
						textAlign: "center",

						"&:hover": {
							backgroundColor: "transparent",
						},

						"&:active": {
							color: colors.primaryPressed,
						},
					},
				},

				{
					props: { variant: "text", color: "primary", size: "medium" },
					style: {
						color: colors.primary,
						padding: "12px 16px 12px 16px",
						fontSize: "16px",
						fontWeight: 600,
						textTransform: "lowercase",
						fontFamily: "Source Sans 3 Semibold",
						textAlign: "center",

						"&:hover": {
							backgroundColor: "transparent",
						},

						"&:active": {
							color: colors.primaryPressed,
						},
					},
				},
			],
		},
		MuiTableCell: {
			styleOverrides: {
				root: {
					"&.metric-cell": {
						borderTop: "none",
						borderColor: colors.defaultDisabled,
						fontSize: 12,
						lineHeight: "20px",
						fontStyle: "normal",
						fontWeight: "400",
						color: colors.grey,
						fontFamily: "Source Sans 3",
						borderBottom: `1px solid ${colors.defaultDisabled}`,
					},
				},
			},
		},
		MuiCard: {
			variants: [
				{
					props: { className: 'catalog-card' },
					style: {
						width: 400,
						height: 450,
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'space-between'
					}
				},
				{
					props: { className: 'cart-card' },
					style: {
						display: 'flex',
					}
				}
			]
		},
	}
});