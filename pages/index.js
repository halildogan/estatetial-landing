import React from 'react';
import Head from 'next/head'
import Image from 'next/image'

import { useRouter } from 'next/router'
import { makeStyles } from '@material-ui/core/styles';

import {Header} from '../components/Header';
import Main from '../components/Main';
import NetworkApp from '../components/NetworkApp';


import Quality from '../components/Quality';
import Steps from '../components/Steps';
import Advantages from '../components/Advantages';
import History from '../components/History';
import Options from '../components/Options';
import Integrations from '../components/Integrations';
import Description from '../components/Description';
import Productivity from '../components/Productivity';
import Review from '../components/Review';
import Invite from '../components/Invite';
import Footer from '../components/Footer';

const useStyles = makeStyles(theme => ({

}));

export default function Landing(props) {
  const { onToggleDark, onToggleDir } = props;

  const classes = useStyles();
  const router = useRouter();

  return (
      <React.Fragment>
      <Head>
        <title>
        Home Page
        </title>
      </Head>

      {/* <CssBaseline /> */}

      <div className={"page"}>
        <Header
          onToggleDark={onToggleDark}
          onToggleDir={onToggleDir}
        />
        <main className={classes.containerWrap}>
          <section id="main" className={"main"}>
            <Main />
          </section>
          <section id="integrations" className={"integrations"}>
            <Integrations />
          </section>

          <section id="quality" className={"quality"}>
          <NetworkApp />
          </section>



          <section id="quality" className={"quality"}>
          < Quality />
          </section>


          <section id="steps" className={"steps"}>
            <Steps />
          </section>
          <section id="advantages" className={"advantages"}>
            <Advantages />
          </section>
          <section id="history" className={"history"}>
            <History />
          </section>
          <section id="options" className={"options"}>
            <Options />
          </section>
          <section id="description" className={"description"}>
            <Description />
          </section>
          <section id="productivity" className={"productivity"}>
            <Productivity />
          </section>
          <section id="review" className={"review"}>
            <Review />
          </section>
          <section id="invite" className={"invite"}>
            <Invite />
          </section>
          {/* <div id="about" className={classes.spaceTop}>
            <About />
          </div> */}
        <section id="footer" className={"footer"}>
          <Footer />
        </section>
        </main>
      
      </div>
    </React.Fragment>
  )
}
