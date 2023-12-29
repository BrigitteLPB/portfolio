import { Route, Routes } from 'react-router-dom';

import Home from 'pages/home/';

import Paper from '@mui/material/Paper';
import { Grid } from '@mui/material/index';
import { styled } from '@mui/material/styles';
import Footer from 'components/footer';
import Header from 'components/header';
import 'styles/App.scss';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function App() {
    return (
        <Grid
            className="app-grid"
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="stretch"
        >
            <Grid item>
                <Header />
            </Grid>
            <Grid item xs>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<Home />} />
                </Routes>
            </Grid>
            <Grid item>
                <Footer />
            </Grid>
        </Grid>
    );
}
