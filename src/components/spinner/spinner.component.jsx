import React from "react";
import CircularProgress from '@mui/material/CircularProgress';

const Spinner = () => (
    <SpinnerOverlay>
        <CircularProgress />
    </SpinnerOverlay>
);

const SpinnerOverlay = ({ children }) => (
    <div style={{
        height: '60vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }}>
        {children}
    </div>
)

export default Spinner;