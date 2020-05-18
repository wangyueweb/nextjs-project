import { withRouter } from "next/router"
import Comp from "../components/comp"
const A = ({router, name}) => <span>这是a页面, 参数是{router.query.id} {name}</span>

A.getInitialProps = async (name) => {

    console.log('name,', name);

    const promise = new Promise((resolve, reject) => {
        // setTimeout(() => {
            resolve({
                name: 'Nick'
            })
        // },1000)
    })

    return await promise;
}

export default withRouter(A);