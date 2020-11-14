import React from 'react';

class Crisp extends React.Component {
    componentDidMount() {
        // Include the Crisp code here, without the <script></script> tags
        // @ts-ignore
        window.$crisp = [];
        // @ts-ignore
        window.CRISP_WEBSITE_ID = '631f20c7-ae18-468c-917c-ec93a5762389';

        (function () {
            const d = document;
            const s = d.createElement('script');

            s.src = 'https://client.crisp.chat/l.js';
            // @ts-ignore
            s.async = 1;
            d.getElementsByTagName('head')[0].appendChild(s);
        })();
    }

    render() {
        return null;
    }
}

export default Crisp;
