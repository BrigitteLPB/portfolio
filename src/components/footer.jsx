import { Grid } from '@mui/material/index';
import { theme } from 'Theme';

import 'styles/components/footer.scss';
import { Typography } from '../../node_modules/@mui/material/index';

export default function Footer() {
    return (
        <Grid
            className="footer"
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{
                backgroundColor: theme.palette.primary.main,
            }}
        >
            <Typography variant="body1">
                Copyright - Theo Guillemaud - {new Date().getFullYear()}
            </Typography>
        </Grid>
    );
}
