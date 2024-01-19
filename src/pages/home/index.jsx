import { Grid, Typography } from '@mui/material/index';
import { theme } from 'Theme';
import ProfileImage from 'components/profile_image';

import content from 'assets/content.json';
import CompetenceCard from 'components/competence_card';
import Links from 'components/links';
import ProjectCard from 'components/project_card';
import { Box } from '../../../node_modules/@mui/material/index';

export default function Home() {
    const loadImage = (path) => require(`./../../assets/${path}`);

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
                    <Links links={content.summary.links} />
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
            <Box
                sx={{
                    backgroundColor: theme.palette.primary.main,
                }}
            >
                <Typography
                    variant="h4"
                    color="primary.reverse"
                    className="left-bar-title"
                >
                    Compétences techniques
                </Typography>
                <Grid container sx={{ width: '100%', gap: '20px' }}>
                    {content.competences.map((e) => (
                        <CompetenceCard
                            key={e.title}
                            name={e.title}
                            description={e.description}
                        />
                    ))}
                </Grid>
            </Box>
            <Box>
                <Typography
                    variant="h4"
                    color="primary"
                    className="left-bar-title"
                >
                    Expériences
                </Typography>
                <Grid container sx={{ gap: '20px' }}>
                    {content.experiences.map((e, i) => (
                        <Box key={i}>
                            <Typography variant="body1" fontWeight="bold">
                                {e.title}
                            </Typography>

                            <Grid container>
                                <Grid item xs={8}>
                                    {e.missions.map((mission, i) => (
                                        <Typography key={i} variant="body2">
                                            {'>'} {mission}
                                        </Typography>
                                    ))}
                                </Grid>
                                <Grid
                                    item
                                    container
                                    xs={4}
                                    spacing={4}
                                    justifyContent="center"
                                    alignItems="flex=end"
                                >
                                    {e.logos.map((logo, i) => (
                                        <Grid item>
                                            <img
                                                key={i}
                                                src={loadImage(logo)}
                                                alt={logo}
                                                style={{
                                                    maxWidth: '150px',
                                                    maxHeight: '50px',
                                                }}
                                            />
                                        </Grid>
                                    ))}
                                </Grid>
                            </Grid>
                        </Box>
                    ))}
                </Grid>
            </Box>
        </div>
    );
}
