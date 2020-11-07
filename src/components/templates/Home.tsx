import React from 'react';

import { InDevelopmentMessage } from '~/components/molecules/messages/InDevelopmentMessage';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface HomeProps {}

export const Home: React.FC<HomeProps> = () => (
    <main className='container'>
        <div className='mt-4'>
            <InDevelopmentMessage />
        </div>
    </main>
);
