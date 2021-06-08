import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#26CD86',
        },
        secondary: {
            main: '#cd2626',
        },

    },
    typography: {
        h1: {
            fontFamily: 'Montserrat',
            fontWeight: 500,
            fontSize: 22
        },
        subtitle1: {
            fontFamily: 'Raleway',
            fontWeight: 400,
            fontSize: 18
        },
    },
    titleContainer: {
        fontWeight: 600,
        fontFamily: 'Montserrat',
        fontSize: 'clamp(1.7rem, 5vw, 2.5rem)',
        marginBottom: '1rem',
        width: 'fit-content',
        height: 'fit-content',
    },
});

export default theme;