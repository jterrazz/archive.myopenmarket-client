import React from 'react';

export interface TheNavBarGroupProps {
    className?: string;
    children: React.ReactChild;
    title: string;
}

export const TheNavBarGroup: React.FC<TheNavBarGroupProps> = ({ children, className, title }) => {
    return (
        <div className={className}>
            <h3 className='text-muted small mb-3 font-weight-500'>{title}</h3>

            {children}
        </div>
    );
};
