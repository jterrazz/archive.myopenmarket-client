import _ from 'lodash';

class MSObject {
    /**
     * Transform an object keys
     */
    static mapKeys = (input: object, mapRules: object) => {
        const tab = {};

        _.each(input, function (value, key) {
            key = mapRules[key] || key;
            tab[key] = value;
        });

        return tab;
    };
}

export default MSObject;
