import * as MuiIcons from '@mui/icons-material';
import Button from '@mui/material/Button';
import { Grid, Typography } from '@mui/material/index';
import { theme } from 'Theme';
import ProfileImage from 'components/profile_image';

import content from 'assets/content.json';
import ProjectCard from 'components/project_card';

function Home() {
    return (
        <div id="home-page">
            <Typography variant="h3" color="primary">
                {content.summary.title}
            </Typography>
            <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
            >
                <Grid item xs={9}>
                    <Typography variant="body1">
                        {content.summary.text}
                    </Typography>
                    {content.summary.links.map((e) => {
                        const Icon = MuiIcons[e.iconName];
                        return (
                            <Button
                                key={e.name}
                                variant="contained"
                                color={'primary'}
                                startIcon={<Icon />}
                                sx={{ borderRadius: 28 }}
                                href={e.link}
                            >
                                {e.name}
                            </Button>
                        );
                    })}
                </Grid>
                <Grid item xs>
                    <ProfileImage size={100} left></ProfileImage>
                </Grid>
            </Grid>
            <Grid
                sx={{
                    backgroundColor: theme.palette.primary.main,
                }}
            >
                <Typography
                    variant="h4"
                    color="primary.reverse"
                    className="left-bar-title"
                >
                    {content.about.title}
                </Typography>
                <Typography variant="body1" color="primary.reverse">
                    {content.about.text}
                </Typography>
            </Grid>
            <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                sx={{
                    gap: '10px',
                }}
            >
                {content.projects.details.map((e) => (
                    <ProjectCard
                        key={e.name}
                        id={e.id}
                        name={e.name}
                        date={e.date}
                        withActor={e.with}
                        imagePath={e.thumbnail}
                    />
                ))}
            </Grid>
        </div>
    );
}

export default Home;
