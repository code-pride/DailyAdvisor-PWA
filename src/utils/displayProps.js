import React from 'react';

const DebugDisplayProps = props => (
    <div style={{ margin: '1rem 0' }}>
        <h3 style={{ fontFamily: 'monospace' }} />
        <pre
            style={{
                background: '#f6f8fa',
                fontSize: '1.2rem',
                padding: '.5rem',
            }}
        >
            <strong>props</strong> = {JSON.stringify(props, null, 2)}
        </pre>
    </div>
);

export default DebugDisplayProps;