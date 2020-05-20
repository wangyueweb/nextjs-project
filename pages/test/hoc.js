import React from 'react'
import HOCList from '../../components/HOCList';
import CommentList from '../../components/CommentList';
import BlogPost from '../../components/BlogPost';
import withSubscription from '../../components/WithSubscription/index'

const CommentListWithSubscription = withSubscription(
    CommentList,
    (DataSource) => DataSource.getComments()
);

const BlogPostWithSubscription = withSubscription(
    BlogPost,
    (DataSource, props) => DataSource.getBlogPost(props.id)
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
                <CommentListWithSubscription name="nick" data2={['1','2','3']}/>
                <BlogPostWithSubscription />
            </div>
        );
    }
}