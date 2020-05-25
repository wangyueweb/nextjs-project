import Link from "next/link";
import Router from "next/router";
import { Button } from "antd";
import store from "../store/store";
import { connect } from "react-redux";

const events = [
  "routeChangeStart",
  "routeChangeComplete",
  "routeChangeError",
  "beforeHistoryChange",
  "hashChangeStart",
  "hashChangeComplete",
];

function makeEvent(type) {
  return (...args) => {
    // console.log(type, ...args)
  };
}

events.forEach((event) => {
  Router.events.on(event, makeEvent(event));
});

const Index = ({ counter, username, add, rename }) => {
  function gotoTestB() {
    Router.push(
      {
        pathname: "/test/b",
        query: { id: 123 },
      },
      "/test/b/2"
    );
  }

  return (
    <>
      <Link href="/">
        <span>Index</span>
      </Link>
      <a>Index a</a>
      <button onClick={() => add(1)}>
        add {counter}
      </button>
      <input value={username} onChange={(e) => {rename(e.target.value)}}/>
    </>
  );
};
export default connect(
  function mapStateToProps(state) {
    return {
      counter: state.counter.count,
      username: state.user.username,
    };
  },
  function mapDispatchToProps(dispatch) {
    return {
      add: (num) => dispatch({type: 'ADD', num}),
      rename: (name) => dispatch({type: 'UPDATE_USERNAME', name})
    }
  }
)(Index);
