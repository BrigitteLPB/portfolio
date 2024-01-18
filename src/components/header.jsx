import { Grid } from '@mui/material/index';
import { theme } from 'Theme';

import BasicMenu from 'components/menu';
import ProfileImage from 'components/profile_image';
import 'styles/components/header.scss';

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
            <ProfileImage size={50} removeSpace></ProfileImage>
            <BasicMenu links={[{ name: 'hello', link: '/hello' }]}></BasicMenu>
        </Grid>
    );
}
