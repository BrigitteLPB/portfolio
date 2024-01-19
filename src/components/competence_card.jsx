import Typography from '@mui/material/Typography';
import { theme } from 'Theme';

import 'styles/components/project_card.scss';
import { Box } from '../../node_modules/@mui/material/index';

import 'styles/components/competence_card.scss';

export default function CompetenceCard({ name, description }) {
    return (
        <Box
            className="competence-card"
            sx={{
                color: theme.palette.primary.main,
                backgroundColor: theme.palette.background.default,
            }}
        >
            <Typography
                variant="h5"
                fontWeight="bold"
                className="left-bar-title"
                color="primary.dark"
            >
                {name}
            </Typography>
            <Typography variant="subtitle1">
                {'>'} {description}
            </Typography>
        </Box>
    );
}
