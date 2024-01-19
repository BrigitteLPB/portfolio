import { Grid } from '@mui/material/index';
import { theme } from 'Theme';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ProfileImage from 'components/profile_image';
import { Button } from '../../node_modules/@mui/material/index';

export default function Header() {
    return (
        <Grid
            className="header"
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{
                backgroundColor: theme.palette.primary.main,
            }}
        >
            <Button href={'/'} sx={{ p: 0 }}>
                <ArrowBackIcon sx={{ fill: theme.palette.primary.reverse }} />
            </Button>
            <Button href={'/'} sx={{ p: 0 }}>
                <ProfileImage size={50} removeSpace left></ProfileImage>
            </Button>
        </Grid>
    );
}
