import App, { Container } from "next/App";
import "antd/dist/antd.css";
import Layout from "../components/layout";

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {

    if (Component.getInitialProps) {
      const pageProps = await Component.getInitialProps(ctx);
      return { pageProps };
    }else{
      return {}
    }
    
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
