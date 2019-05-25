import React from 'react';
import NewIcon from 'grommet/components/icons/base/New';

const Divider = props => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '20px'
            }}
        >
            <div
                style={{
                    width: '5vw',
                    height: '2px',
                    backgroundColor: '#E1E1E1',
                    borderRadius: '1px',
                    margin: '10px'
                }}
            />
            <NewIcon />
            <div
                style={{
                    width: '5vw',
                    height: '2px',
                    backgroundColor: '#E1E1E1',
                    borderRadius: '1px',
                    margin: '10px'
                }}
            />
        </div>
    );
};

export default Divider;
