import React, { useState, useEffect } from 'react';
import App from 'next/app';
import Head from 'next/head';
import PropTypes from 'prop-types';

import LoadingBar from 'react-top-loading-bar';
/* import css vendors */

let themeType = 'light';
if (typeof Storage !== 'undefined') { // eslint-disable-line
  themeType = localStorage.getItem('luxiTheme') || 'light';
}

function MyApp(props) {
  const [loading, setLoading] = useState(0);

  useEffect(() => {
    // Set layout direction

    // Remove preloader
    const preloader = document.getElementById('preloader');
    if (preloader !== null || undefined) {
      setTimeout(() => {
        preloader.remove();
      }, 1500);
    }

    // Remove loading bar
    setLoading(0);
    setTimeout(() => { setLoading(100); }, 2000);

    // Refresh JSS in SSR
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }, []);

  const toggleDarkTheme = () => {

  };

  const toggleDirection = dir => {
    document.dir = dir;
  
  };

  const { Component, pageProps, router, appData } = props; // eslint-disable-line
  return (
    <div>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
      </Head>
              <LoadingBar
                height={0}
                color={'gray'}
                progress={loading}
                className="top-loading-bar"
              />
              <div id="main-wrap">
                  <Component
                    {...pageProps}
                    onToggleDark={toggleDarkTheme}
                    onToggleDir={toggleDirection}
                    appData={appData}
                    key={router.route}
                  />
              </div>
    </div>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
  router: PropTypes.object.isRequired
};

MyApp.getInitialProps = async (appContext) => {
  const appex = await App.getInitialProps(appContext);
 
  return {
    ...appex,
    namespacesRequired: ['landing']
  };
};

export default MyApp;
