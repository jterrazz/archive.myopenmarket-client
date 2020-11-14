import path from 'path';
import NextI18Next from 'next-i18next';

const i18next = new NextI18Next({
    otherLanguages: ['fr'],
    localePath: path.resolve('./public/static/locales'),
});

export const appWithTranslation = i18next.appWithTranslation;
export const withTranslation = i18next.withTranslation;
