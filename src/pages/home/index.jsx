import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material/index';
import ProfileImage from 'components/profile_image';
import { Grid } from '../../../node_modules/@mui/material/index';

function Home() {
    return (
        <div id="home-page">
            <Typography variant="h3" color="primary">
                Theo GUILLEMAUD
            </Typography>
            <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
            >
                <Grid item xs={9}>
                    <Typography variant="body1">
                        Développeur de 22 ans avec presque 10 ans de curiosité
                        pour l’informatique, je me suis spécialiser en
                        développement web depuis 2 ans avec une appentence pour
                        le backend.
                    </Typography>
                    <Button
                        variant="contained"
                        color={'primary'}
                        startIcon={<GitHubIcon />}
                        sx={{ borderRadius: 28 }}
                    >
                        Github
                    </Button>
                    <Button
                        variant="contained"
                        color={'primary'}
                        startIcon={<LinkedInIcon />}
                        sx={{ borderRadius: 28 }}
                    >
                        LinkedIn
                    </Button>
                </Grid>
                <Grid item xs>
                    <ProfileImage></ProfileImage>
                </Grid>
            </Grid>
        </div>
    );
}

export default Home;
