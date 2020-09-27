import React, { ReactChild } from 'react';

export interface AuthenticationProps {
    children: ReactChild;
}

export const Authentication: React.FC<AuthenticationProps> = ({ children }) => {
    return (
        <>
            <div className='d-flex align-items-center justify-content-center flex-fill'>
                <h1>Authentication</h1>
                {children}
            </div>
        </>
    );
};
