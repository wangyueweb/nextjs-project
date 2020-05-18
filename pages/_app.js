import App, { Container } from "next/App";
import "antd/dist/antd.css";
import Layout from "../components/layout";

class MyApp extends App {
  static async getInitialProps({ Component }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps();
    }
    console.log(pageProps);
    return pageProps;
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>                                                                                                                                                                                                                                                                                                                                                                      
        <Layout>
          <Component {...pageProps}/>
        </Layout>
      </Container>
    );
  }
}

export default MyApp;
