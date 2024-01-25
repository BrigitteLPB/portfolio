import { Grid, Typography } from '@mui/material/index';
import { theme } from 'Theme';
import ProfileImage from 'components/profile_image';

import content from 'assets/content.json';
import CompetenceCard from 'components/competence_card';
import Links from 'components/links';
import ProjectCard from 'components/project_card';

export default function Home() {
    const loadImage = (path) => require(`./../../assets/${path}`);

    return (
        <Grid
            id="home-page"
            container
            justifyContent="center"
            sx={{ my: '20px', gap: '30px' }}
        >
            {/* summary */}
            <Grid item container lg={8} sx={{ p: '10px' }}>
                <Typography variant="h3" color="primary">
                    {content.summary.title}
                </Typography>
                <Grid
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                >
                    <Grid item container xs={8} md={10} spacing={3}>
                        <Grid item>
                            <Typography variant="body1">
                                {content.summary.text}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Links links={content.summary.links} />
                        </Grid>
                    </Grid>
                    <Grid item>
                        <ProfileImage size={100} left></ProfileImage>
                    </Grid>
                </Grid>
            </Grid>
            {/* about */}
            <Grid
                item
                container
                justifyContent="center"
                sx={{
                    py: '20px',
                    backgroundColor: theme.palette.primary.main,
                }}
            >
                <Grid item container lg={8}>
                    <Typography
                        variant="h4"
                        color="primary.reverse"
                        className="left-bar-title"
                        sx={{marginBottom: '20px'}}
                    >
                        {content.about.title}
                    </Typography>
                    <Typography
                        variant="body1"
                        color="primary.reverse"
                        sx={{ px: '20px' }}
                    >
                        {content.about.text}
                    </Typography>
                </Grid>
            </Grid>
            {/* projects */}
            <Grid
                item
                container
                lg={8}
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                sx={{
                    py: '20px',
                }}
            >
                <Grid item>
                    <Typography
                        variant="h4"
                        color="primary"
                        className="left-bar-title"
                        sx={{marginBottom: '20px', marginTop: '-20px'}}
                    >
                        {content.projects.title}
                    </Typography>
                </Grid>

                <Grid item container sx={{ gap: '10px' }}>
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
            </Grid>
            {/* competences */}
            <Grid
                item
                container
                justifyContent="center"
                sx={{
                    py: '20px',
                    backgroundColor: theme.palette.primary.main,
                }}
            >
                <Grid item container lg={8}>
                    <Typography
                        variant="h4"
                        color="primary.reverse"
                        className="left-bar-title"
                        sx={{marginBottom: '20px'}}
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
                </Grid>
            </Grid>
            {/* courses */}
            <Grid item container lg={8}>
                <Grid item>
                    <Typography
                        variant="h4"
                        color="primary"
                        className="left-bar-title"
                    >
                        Expériences
                    </Typography>
                </Grid>
                <Grid
                    item
                    container
                    direction="column"
                    sx={{ gap: '20px', p: '20px' }}
                >
                    {content.experiences.map((e, i) => (
                        <Grid item xs key={i}>
                            <Typography variant="body1" fontWeight="bold">
                                {e.title}
                            </Typography>

                            <Grid container>
                                <Grid item xs={12} sm={8}>
                                    {e.missions.map((mission, i) => (
                                        <Typography key={i} variant="body2">
                                            {'>'} {mission}
                                        </Typography>
                                    ))}
                                </Grid>
                                <Grid
                                    item
                                    container
                                    sm
                                    spacing={4}
                                    justifyContent="center"
                                    alignItems="flex=end"
                                    sx={{ py: '10px' }}
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
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    );
}
