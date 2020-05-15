import { withRouter } from "next/router"
import Link from "next/link"
import Comp from "../components/comp"
const A = ({router, name}) => <Link href="#aaa"><a><span>这是a页面, 参数是{router.query.id} {name}</span></a></Link>

A.getInitialProps = async (name) => {
    console.log('------------------------------------')

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                name: 'Nick'
            })
        },1000)
    })

    return await promise;
}

export default withRouter(A);