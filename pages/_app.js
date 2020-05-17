import App, { Container } from "next/App"
import "antd/dist/antd.css"

class MyApp extends App {

    static async getInitialProps({Component}){
        const pageProps = await Component.getInitialProps();
        return {
            pageProps
        }
    }

    render(){
        const { Component, pageProps } = this.props;

        return(
            <Container>
                <Component {...pageProps}/>
            </Container>
        )
    }
}

export default MyApp