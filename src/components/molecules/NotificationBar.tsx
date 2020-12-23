import React from 'react';

export interface NotificationBarProps {
    message: string;
}

export const NotificationBar: React.FC<NotificationBarProps> = ({ message }) => (
    <div
        className='position-fixed w-100 bg-gray text-white small d-flex align-items-center justify-content-center'
        style={{ zIndex: 99, height: 36 }}
    >
        {message}
    </div>
);
