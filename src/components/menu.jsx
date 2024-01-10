import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

const ITEM_HEIGHT = 48;

export default function BasicMenu({ links = [] }) {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState();
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (_, link) => {
        setAnchorEl(null);
        return navigate(link);
    };

    return (
        <div className="basic-menu">
            <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={open ? 'long-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
            >
                <MoreVertIcon />
            </IconButton>
            <Menu
                id="long-menu"
                MenuListProps={{
                    'aria-labelledby': 'long-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        maxHeight: ITEM_HEIGHT * 4.5,
                        width: '20ch',
                    },
                }}
            >
                {links.map(({ name, link }, i) => (
                    <MenuItem
                        key={name}
                        selected={i === 0}
                        onClick={(event) => {
                            handleClose(event, link);
                        }}
                    >
                        {name}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
}
