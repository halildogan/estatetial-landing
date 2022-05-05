import React from 'react';
import Head from 'next/head'
import Image from 'next/image'

import { useRouter } from 'next/router'
import { makeStyles } from '@material-ui/core/styles';

import {Header} from '../components/Header';
import AboutForm from '../components/About';
import Footer from '../components/Footer';

const useStyles = makeStyles(theme => ({

}));

export default function About(props) {
  const { onToggleDark, onToggleDir } = props;

  const classes = useStyles();
  const router = useRouter();

  return (
      <React.Fragment>
      <Head>
        <title>
       About
        </title>
      </Head>

      {/* <CssBaseline /> */}

      <div className={"page"}>
        <Header
          onToggleDark={onToggleDark}
          onToggleDir={onToggleDir}
        />
        <main className={classes.containerWrap}>
          <section id="about" className={"about"}>
            <AboutForm />
          </section>
       
        <section id="footer" className={"footer"}>
          <Footer />
        </section>
        </main>
      </div>
    </React.Fragment>
  )
}
