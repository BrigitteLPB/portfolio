import { Route, Routes } from 'react-router-dom';

import Home from 'pages/home/';

import { Grid } from '@mui/material/index';
import Footer from 'components/footer';
import Header from 'components/header';
import 'styles/App.scss';

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
                    <Route path="/:id" element={<Home />} />
                    <Route path="*" element={<Home />} />
                </Routes>
            </Grid>
            <Grid item>
                <Footer />
            </Grid>
        </Grid>
    );
}
