import React from 'react';
import { StyledBottomNavigation } from './Navigator.style';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import LocationOn from '@material-ui/icons/LocationOn';
import CalendarToday from '@material-ui/icons/CalendarToday';

function Navigator({ current, setCurrent }) {
    return (
        <StyledBottomNavigation showLabels value={current} onChange={setCurrent} >
            <BottomNavigationAction label="Currently" value="Currently" icon={<LocationOn />} />
            <BottomNavigationAction label="Hourly" value="Hourly" icon={<RestoreIcon />} />
            <BottomNavigationAction label="Daily" value="Daily" icon={<CalendarToday />} />
        </StyledBottomNavigation>
    );
}
export default Navigator;