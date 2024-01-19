import { Route, Routes } from 'react-router-dom';

import Home from 'pages/home/';

import { Grid } from '@mui/material/index';
import Footer from 'components/footer';
import ProjectPage from 'pages/project/index';
import 'styles/App.scss';

export default function App() {
    return (
        <Grid
            className="app-grid"
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="stretch"
            wrap="nowrap"
        >
            <Grid item></Grid>
            <Grid item xs>
                <Routes>
                    <Route path="/projects/:id" element={<ProjectPage />} />
                    <Route path="*" element={<Home />} />
                </Routes>
            </Grid>
            <Grid item>
                <Footer />
            </Grid>
        </Grid>
    );
}
