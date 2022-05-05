/* eslint-disable @next/next/no-title-in-document-head */
/* eslint-disable @next/next/no-css-tags */
/* eslint-disable @next/next/no-document-import-in-page */
/* eslint-disable @next/next/no-page-custom-font */
import React from 'react';
import { Head } from 'next/document';
import {brand} from '../public/text/brand';

const HeadComponent = () => (
  <Head>
    <meta charset="utf-8" />
    <title>Home</title>
    <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no" />
    <meta name="theme-color" content="#fff" />
    <meta name="format-detection" content="telephone=no" />
    <link rel="apple-touch-icon" sizes="180x180" href="images/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="images/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="images/favicon-16x16.png" />
    <link rel="manifest" href="images/site.webmanifest" />
    <link rel="mask-icon" href="images/safari-pinned-tab.svg" color="#5bbad5" />
    <meta name="msapplication-TileColor" content="#da532c" />
    <meta name="theme-color" content="#ffffff" />
    <meta name="description" content="A Premium SaaS Landing Page Kit" />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:site" content="@ui8" />
    <meta name="twitter:title" content="Solo" />
    <meta name="twitter:description" content="A Premium SaaS Landing Page Kit" />
    <meta name="twitter:creator" content="@ui8" />
    <meta name="twitter:image" content="https://ui8-solo-saas.herokuapp.com/images/twitter-card.png" />
    <meta property="og:title" content="Solo" />
    <meta property="og:type" content="Article" />
    <meta property="og:url" content="https://ui8.net/ui8/products/solo-saas-landing-page-kit" />
    <meta property="og:image" content="https://ui8-solo-saas.herokuapp.com/images/fb-og-image.png" />
    <meta property="og:description" content="A Premium SaaS Landing Page Kit" />
    <meta property="og:site_name" content="Solo" />
    <meta property="fb:admins" content="132951670226590" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&amp;family=Poppins:wght@600&amp;display=swap" rel="stylesheet" />
    <link rel="stylesheet" media="all" href="css/app.min.css" />
  </Head>
);

export default HeadComponent;
