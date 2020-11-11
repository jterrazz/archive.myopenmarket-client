import React from 'react';

export interface TheNavBarUserSectionProps {
    className?: string;
    user?: {
        name: string;
        image: string;
    };
}

export const TheNavBarUserSection: React.FC<TheNavBarUserSectionProps> = ({ user, className }) => {
    return (
        <div className={'d-flex align-items-center ' + className}>
            <img src='/images/user-profile.svg' className='size-2 mr-2' />
            <div className='text-muted'>My name</div>
        </div>

        // <>
        //     <Link href='/support'>
        //         <a>
        //             <button className='button--light'>Support</button>
        //         </a>
        //     </Link>
        //     <Link href='/signin'>
        //         <a>
        //             <button className='button--light'>Log in</button>
        //         </a>
        //     </Link>
        //     <Link href='/signup'>
        //         <a>
        //             <button className='button--primary'>Sign up</button>
        //         </a>
        //     </Link>
        // </>
    );
};
