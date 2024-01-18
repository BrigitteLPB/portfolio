import { createTheme, ThemeProvider } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#284b63',
        },
        secondary: {
            main: '#b4b8ab',
        },
        background: {
            default: '#cecece',
        },
    },
});

export default function ThemeObject(props) {
    return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}
