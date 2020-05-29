import App, { Container } from "next/App";
import "antd/dist/antd.css";
import Layout from "../components/layout";
import MyContext from "../lib/my-context";
import { Provider } from 'react-redux'
import withRedux from "../lib/with-redux"

class MyApp extends App {
  state={
    context: 'value'
  }

  static async getInitialProps(ctx) {
    const { Component } = ctx;
    if (Component.getInitialProps) {
      const pageProps = await Component.getInitialProps(ctx);
      return { pageProps };
    }else{
      return {}
    }
    
  }

  render() {
    const { Component, pageProps, reduxStore } = this.props

    console.log('reduxStore', reduxStore);

    return (
      <Container>                                                                                                                                                                                                                                                                                   
        <Layout>
          <Provider store={reduxStore}>
            <MyContext.Provider value={this.state.context}>
              <Component {...pageProps} />
              <button onClick={() => this.setState({context: `${this.state.context} 111`})}>update context</button>
            </MyContext.Provider>
          </Provider>
        </Layout>
      </Container>
    );
  }
}

export default withRedux(MyApp);
