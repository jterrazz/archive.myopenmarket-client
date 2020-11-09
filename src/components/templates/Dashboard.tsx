import React, { ReactChild } from 'react';

export interface DashboardProps {
    children: ReactChild;
}

export const Dashboard: React.FC<DashboardProps> = ({ children }) => {
    return (
        <div className='container'>
            <div>{children}</div>
        </div>
    );
};
