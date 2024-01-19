import { createTheme, ThemeProvider } from '@mui/material/styles';

export const theme = createTheme({
    typography: {
        fontSize: '14',
    },
    palette: {
        type: 'light',
        primary: {
            main: '#284b63',
            reverse: 'white',
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
