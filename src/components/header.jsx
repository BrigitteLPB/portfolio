import { Grid } from '@mui/material/index';

import BasicMenu from 'components/menu';
import ProfileImage from 'components/profile_image';
import 'styles/components/header.scss';

function Header() {
    return (
        <Grid
            className="header"
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
        >
            <ProfileImage></ProfileImage>
            <BasicMenu links={[{name: 'hello', link: '/hello'}]}></BasicMenu>
        </Grid>
    );
}

export default Header;
