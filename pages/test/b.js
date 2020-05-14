import { withRouter } from "next/router"
import Comp from "../../components/comp"
const A = ({router}) => <span>这是b页面, 参数是{router.query.id}</span>

export default withRouter(A);