import React, { ReactChild } from 'react';

export interface AuthenticationProps {
    children: ReactChild;
}

export const Authentication: React.FC<AuthenticationProps> = ({ children }) => {
    return (
        <div className='vh-100 d-flex align-items-center justify-content-center'>
            <div className='max-w'>{children}</div>
        </div>
    );
};
