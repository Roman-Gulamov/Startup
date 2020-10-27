import { useEffect } from 'react';

const MyApp = ({ Component, pageProps }) => { 
    return ( 
        <Component {...pageProps} /> 
    )
}

export default MyApp;
