import NextHead from 'next/head';
import getConfig from 'next/config';
import React from 'react';

export enum Locale {
    en_US = 'en_US',
    en_GB = 'en_GB',
    fr_FR = 'fr_FR',
}

export interface HeadProps {
    title?: string;
    description?: string;

    social?: {
        type?: string;
        title?: string;
        description?: string;
        image?: string;
        url?: string;
        siteName?: string;
        locale?: Locale;
    };
}

export const Head: React.FC<HeadProps> = ({ title, description, social }) => {
    const renderDescription = () => {
        if (description) {
            if (description.length > 158) console.log('Description too long');

            return <meta name='description' content={description} />;
        }
    };

    const renderSocial = () => {
        social = social || {};
        const { type, image, url, siteName, locale } = social;
        const socialTitle = social.title || title;
        const socialDescription =
            social.description || description || getConfig().publicRuntimeConfig.app.seo.description;

        return (
            <>
                <meta property='og:type' content={type || 'website'} />
                {socialTitle && <meta property='og:title' content={socialTitle} />}
                {socialDescription && <meta property='og:description' content={socialDescription} />}
                {image && <meta property='og:image' content={image} />}
                {url && <meta property='og:url' content={url} />}
                <meta property='og:site_name' content={siteName || 'The Open Market'} />
                {locale && <meta property='og:locale' content={locale} />}
            </>
        );
    };

    return (
        <NextHead>
            <title>
                {title} - {getConfig().publicRuntimeConfig.app.sharedPageTitle}
            </title>
            <meta name='viewport' content='initial-scale=1.0, width=device-width' />
            {renderDescription()}
            {renderSocial()}
        </NextHead>
    );
};
