import { withRouter } from "next/router"
import Comp from "../components/comp"
const A = ({router}) => <span>这是a页面, 参数是{router.query.id}</span>

export default withRouter(A);