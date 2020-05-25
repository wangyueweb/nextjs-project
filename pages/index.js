import Link from "next/link"
import Router from "next/router"
import { Button } from "antd";
import store from "../store/store"


const events = [
    "routeChangeStart",
    "routeChangeComplete",
    "routeChangeError",
    "beforeHistoryChange",
    "hashChangeStart",
    "hashChangeComplete"
]

function makeEvent(type){
    return (...args) => {
        // console.log(type, ...args)
    }
}

events.forEach(event => {
    Router.events.on(event, makeEvent(event));
})

export default () => {
    function gotoTestB(){
        Router.push({
            pathname: '/test/b',
            query: {id: 123}
        },"/test/b/2")
    }

    return (
        <>
            <Link href="/">
                <span>Index</span>
            </Link>
            <a>Index a</a>
            <button onClick={() => store.dispatch({type: 'ADD'})}>add</button>
        </>
    )
}