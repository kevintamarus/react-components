class GroceryItems extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      done: false,
      bold: false
    };
  }

  click() {
    this.setState({
      done: !this.state.done
    });
  }
  
  hover() {
    this.setState({
      bold: !this.state.bold
    });
  }

  render() {
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none',
      color: this.state.done ? '#D3D3D3' : '#000000',
      fontWeight: this.state.bold ? 'bold' : 'normal',
      fontSize: this.state.bold ? '200%' : '100%'
    };

    return (
      <li style={style} 
      onClick={this.click.bind(this)} 
      onMouseEnter={this.hover.bind(this)}
      onMouseLeave={this.hover.bind(this)}>
      {this.props.list}
      </li>
    );
  }
}

var GroceryList = (props) => (
  <ul>
    {props.lists.map(list =>
      <GroceryItems list={list} />
    )}
  </ul>
);

var App = () => (
  <div>
    <h2>Gumbo Grocery List</h2>
    <GroceryList lists={['1 Bell pepper', 'Celery', 'Tomatoes', '1 Onion', 'Ground Beef', 'Andouille Sausage']}/> 
  </div>
);

ReactDOM.render(<App/>, document.getElementById('app'));