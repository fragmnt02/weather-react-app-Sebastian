import React from 'react';
import { StyledPaper, StyledInput } from './Form.style';
import IconButton from '@material-ui/core/IconButton';
import Send from '@material-ui/icons/Send';
import GpsFixed from '@material-ui/icons/GpsFixed';

function App() {
    return (
        <React.Fragment>
            <StyledPaper>
                <IconButton>
                    <GpsFixed />
                </IconButton>
                <StyledInput />
                <IconButton>
                    <Send />
                </IconButton>
            </StyledPaper>
        </React.Fragment>
    );
}

export default App;
