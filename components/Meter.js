import React from 'react';
import Meter from 'grommet/components/Meter';

const SkillMeter = props => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                margin: '0px 10px 0px 10px'
            }}
            id={props.id}
        >
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: '100%',
                    marginBottom: '-20px',
                    fontFamily: 'Nunito'
                }}
            >
                <div style={{ fontWeight: 'bold', fontSize: props.desktop ? '110%' : '80%' }}>
                    {props.label}
                </div>
                <div style={{ color: '#6c757d', fontSize: props.desktop ? '100%' : '70%' }}>
                    {props.value}%
                </div>
            </div>
            <Meter value={props.value} size="large" style={{ borderRadius: '10px' }} />
        </div>
    );
};

export default SkillMeter;
