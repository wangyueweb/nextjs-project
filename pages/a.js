import { withRouter } from "next/router";
import dynamic from "next/dynamic"
import Link from "next/link";
import styled from "styled-components";
import getConfig from "next/config"
// import Comp from '../components/comp'
// import moment from "moment"

const Comp = dynamic(import('../components/comp'))

const {serverRuntimeConfig, publicRuntimeConfig} = getConfig();

const Title = styled.h1`
  color: yellow;
  font-size: 40px;
`
const color = "#ff6600";

const A = ({ router, name, time }) => {
  console.log(serverRuntimeConfig)
  console.log(publicRuntimeConfig)
  return(
    <>
      <Title>This is title {time}</Title>
      <Comp/>
      <Link href="#aaa">
        <a className="link">
          这是a页面, 参数是{router.query.id} {name} {process.env.customkey}
        </a>
      </Link>

      <style jsx>{`
        span {
          color: green;
        }
        .link {
          color: ${color};
        }
      `}</style>
    </>
  )
}

A.getInitialProps = async (ctx) => {
  const moment = await import('moment')
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: "Nick",
        time: moment.default(Date.now() - 60*1000).fromNow()
      });
    },1000)
  });

  return await promise;
};

export default withRouter(A);
