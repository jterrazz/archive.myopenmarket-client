import path from 'path';
import NextI18Next from 'next-i18next';

module.exports = new NextI18Next({
    otherLanguages: ['fr'],
    localePath: path.resolve('./public/static/locales'),
});
