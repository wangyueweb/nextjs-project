import React from 'react'
import HOCList from '../../components/HOCList';
import CommentList from '../../components/CommentList';
import BlogPost from '../../components/BlogPost';
import withSubscription from '../../components/WithSubscription/index'

const CommentListWithSubscription = withSubscription(
    CommentList,
    (a) => a.getComments()
);

const BlogPostWithSubscription = withSubscription(
    BlogPost,
    (a) => a.getBlogPost()
);
export default class extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {

        console.log(this.props)
    }

    render() {
        const style = {
            width:'100%',
            'textAlign': 'center',
            title:{
                color:'red'
            }
        }
        return (
            <div style={style}>
                <h1 style={style.title}>hello hoc</h1>
                <CommentListWithSubscription />
                <BlogPostWithSubscription />
            </div>
        );
    }
}