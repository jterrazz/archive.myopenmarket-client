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

export const Head: React.FC<HeadProps | null> = (props = {}) => {
    const { social } = props;
    let { title, description } = props;
    title = title
        ? `${title} - ${getConfig().publicRuntimeConfig.app.seo.title}`
        : getConfig().publicRuntimeConfig.app.seo.title;
    description = description || getConfig().publicRuntimeConfig.app.seo.description;
    const { type, image, url, siteName, locale } = social || {};
    const socialTitle = (social && social.title) || title;
    const socialDescription = (social && social.description) || description;

    const renderDescription = () => {
        if (description) {
            if (description.length > 158) console.log('Description too long');

            return <meta name='description' content={description} />;
        }
    };

    const renderSocial = () => (
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

    return (
        <NextHead>
            <title>{title}</title>
            <meta name='viewport' content='initial-scale=1.0, width=device-width' />
            {renderDescription()}
            {renderSocial()}
        </NextHead>
    );
};
