import App, { Container } from "next/App";
import "antd/dist/antd.css";
import Layout from "../components/layout";
import MyContext from "../lib/my-context";
import { Provider } from 'react-redux'
import store from "../store/store"

class MyApp extends App {
  state={
    context: 'value'
  }

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
          <Provider store={store}>
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

export default MyApp;
