import DataSource from '../DataSource'
let withSubscription = (WrappedComponent, selectData) => {

    console.log(selectData);
    // ……返回另一个新组件……
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.handleChange = this.handleChange.bind(this);
            this.onChange = this.onChange.bind(this);
            this.state = {
                data: selectData(DataSource, props),
                name: ''
            };
        }

        componentDidMount() {
            // ……注意订阅数据……
            DataSource.addChangeListener(this.handleChange);
        }

        componentWillUnmount() {
            DataSource.removeChangeListener(this.handleChange);
        }

        handleChange() {
            console.log('handleChange')
            this.setState({
                data: selectData(DataSource, this.props)
            });
        }

        onChange = (event) => {
            console.log(event);
            this.setState({
              data: event.target.value,
            })
          }

        render() {
            // ……使用最新的数据渲染组件
            // 注意此处将已有的props属性传递给原组件
            const style = {
                'marginBottom':'30px'
            }

            const newProps = {
                name: {
                    value: this.state.data,
                    onChange: this.onChange,
                },
            };
            return(
                <div style={style}>
                    <div>This is a HOC Component...</div>
                    <WrappedComponent data={this.state.data} {...this.props} {...newProps}/>
                </div>
            );
        }
    };
}
export default withSubscription;