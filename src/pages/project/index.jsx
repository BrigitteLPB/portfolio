import { useParams } from 'react-router-dom/dist/index';

import { CircularProgress } from '@mui/material/index';
import content from 'assets/content.json';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom/dist/index';

import { Typography } from '@mui/material/index';
import { theme } from 'Theme';
import Header from 'components/header';
import Links from 'components/links';
import { Grid } from '../../../node_modules/@mui/material/index';

export default function ProjectPage() {
    const naviguate = useNavigate();
    const { id } = useParams();
    const [project_content, set_project_content] = useState();

    useEffect(() => {
        const _content = content.projects.details.find((v) => v.id === id);
        if (!_content) {
            return naviguate('/');
        } else {
            set_project_content(_content);
        }
    }, [id, naviguate]);

    const loadImage = (path) => {
        console.debug(path);
        return require(`./../../assets/${path}`);
    };

    console.debug(project_content);

    return project_content ? (
        <Grid className="project-page" container direction="column">
            <Grid item xs>
                <Header />
            </Grid>
            <Grid item xs>
                <img
                    width={'100%'}
                    src={loadImage(project_content.thumbnail)}
                    alt=""
                    style={{ maxHeight: '300px', objectFit: 'cover' }}
                />
            </Grid>
            <Grid
                item
                container
                justifyContent="center"
                sx={{ py: '10px', gap: '20px' }}
            >
                <Grid item sm={8} sx={{ px: '10px' }}>
                    <Typography variant="h2" color="primary.dark">
                        {project_content.name}
                    </Typography>
                    <Typography variant="h4" color="primary">
                        {'>'} {project_content.date} - {project_content.with}
                    </Typography>
                    <Typography variant="body1">
                        {project_content.summary}
                    </Typography>
                    <Links links={project_content.links} />
                </Grid>
                <Grid
                    item
                    container
                    justifyContent="center"
                    sx={{
                        backgroundColor: theme.palette.primary.main,
                    }}
                >
                    <Grid item sm={8} sx={{ p: '10px' }}>
                        <Typography
                            variant="h5"
                            color="primary.reverse"
                            className="left-bar-title"
                        >
                            Compétences techniques
                        </Typography>
                        {project_content.competences.map((e) => (
                            <Typography variant="h6" color="primary.reverse">
                                {'>'} {e}
                            </Typography>
                        ))}
                    </Grid>
                </Grid>
                <Grid item sm={8} sx={{ px: '10px' }}>
                    <Typography variant="body1">
                        {project_content.text}
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    ) : (
        <CircularProgress />
    );
}
