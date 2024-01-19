import * as MuiIcons from '@mui/icons-material';
import { Button } from '@mui/material/index';

export default function Links({ links = [] }) {
    return links.map((e) => {
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
    });
}
