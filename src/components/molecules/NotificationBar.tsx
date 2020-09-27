import React from 'react';

export interface NotificationBarProps {
    message: string;
}

export const NotificationBar: React.FC<NotificationBarProps> = ({ message }) => (
    <div className='w-100 bg-blue--dark text-white text-center small p-2'>{message}</div>
);
