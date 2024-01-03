import { createTheme } from "@mui/material";
import { orange } from "@mui/material/colors";

export const colors = {
	primary: "#3371F5", //Blue
	primaryPressed: "#6191F7", //Dim blue
	orange: "#E07547", //Orange for buttons
	background: "#EFF1F4", //gray for backgrount
	hoverGray: "#E4EFE9", // hover for gray buttons
	green: "#65C472",
	blue: "#5EB5F9",
	success: "#0C8C88",

	defaultText: "#0D131C", // default text color
	error: "#E2555E",
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
	},
	palette: {
		primary: {
			main: colors.primary,
		},
		error: {
			main: colors.error,
		},
		success: {
			main: colors.success,
		},
	},
	components: {
		MuiButton: {
			variants: [
				{
					props: { variant: 'outlined' },
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
			],
		},
		MuiCard: {
			variants: [
				{
					props: { className: 'catalog-card' },
					style: {
						width: '100%',
						display: 'flex',
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
		MuiCardContent: {
			variants: [
				{
					props: { className: 'card-content' },
					style: {
						display: 'flex',
						alignItems: 'center',
						width: '80%',
						justifyContent: 'space-between'
						
					}
				}
			]
		},
	}
});