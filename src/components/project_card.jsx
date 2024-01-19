import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { theme } from 'Theme';

import 'styles/components/project_card.scss';
import { Button } from '../../node_modules/@mui/material/index';

export default function ProjectCard({
    id,
    name,
    date = '',
    withActor = '',
    imagePath = '',
}) {
    const loadImage = (path) => require(`./../assets/${path}`);
    return (
        <Button href={`/projects/${id}`} className="project-card">
            <Grid
                container
                direction="column"
                wrap="nowrap"
                sx={{
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.primary.reverse,
                }}
            >
                <Grid item className="image-container">
                    <img alt={name} src={loadImage(imagePath)} />
                </Grid>
                <Grid item container className="card-info">
                    <Grid item container direction="column">
                        <Grid item>
                            <Typography variant="subtitle1" fontWeight="bold">
                                {name}
                            </Typography>
                            <Typography variant="body2">
                                {'>'} {date} - {withActor}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Button>
    );
}
