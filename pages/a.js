import { withRouter } from "next/router";
import Comp from "../components/comp";
import Link from "next/link";
const A = ({ router, name }) => (
  <>
    <Link href="#aaa">
      <a className="link">
      这是a页面, 参数是{router.query.id} {name}
      </a>
    </Link>

    <style jsx>{`
      span {color: green}
      .link {color: red}
    `}</style>
  </>
);

A.getInitialProps = async (ctx) => {
  const promise = new Promise((resolve, reject) => {
    // setTimeout(() => {
    resolve({
      name: "Nick",
    });
    // },1000)
  });

  return await promise;
};

export default withRouter(A);
