import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';

export interface TheNavBarLinkWithImageProps {
    title: string;
    router: {
        pathname: string;
        query?: any;
    };
    imageSource: {
        active: string;
        default: string;
    };
}

export const TheNavBarLinkWithImage: React.FC<TheNavBarLinkWithImageProps> = ({ title, router, imageSource }) => {
    const pageRouter = useRouter();
    const LOGO_SIZE = 22;

    const isSamePathname = pageRouter.pathname === router.pathname;
    const isSameQuery = JSON.stringify(pageRouter.query) === JSON.stringify(router.query || {});
    const isActive = isSamePathname && isSameQuery;

    return (
        <Link href={router}>
            <a>
                <li className={'my-2 d-flex align-items-center ' + (isActive ? 'text-primary-light' : '')}>
                    <div
                        style={{ height: LOGO_SIZE, width: LOGO_SIZE, marginTop: -1 }}
                        className='d-flex align-items-center justify-content-center'
                    >
                        <Image
                            src={isActive ? imageSource.active : imageSource.default}
                            // className='w-100'
                            width={LOGO_SIZE}
                            height={LOGO_SIZE}
                            layout='intrinsic'
                            alt={title}
                        />
                    </div>

                    <div className='ml-2'>{title}</div>
                </li>
            </a>
        </Link>
    );
};
