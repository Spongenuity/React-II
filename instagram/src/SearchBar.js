import React from 'react';
import { Nav, Navbar, FormControl, FormGroup } from 'react-bootstrap';
import Search from 'react-icons/lib/fa/search';
import './SearchBar.css';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navbar: ''
    };
    this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount() {
    this.setState({ transform: 'navbar-fixed-top' });
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  handleScroll(event) {
    let scrollTop = event.srcElement.body.scrollTop;
    if (scrollTop >= 100) {
      this.setState({
        navbar: 'navbar-fixed-top navbar-transform'
      });
    } else if (scrollTop <= 100) {
      this.setState({
        navbar: 'navbar-fixed-top navbar'
      });
    }
    console.log(event.srcElement.body.scrollTop);
  }
  render() {
    return (
      <Navbar className={this.state.navbar}>
        <div className="container">
          <input className="search nav-center" placeholder="Search"/>
        </div>
        <Nav pullRight>
          <div className="container-right ">
            <Search className="nav-icon"/>
          </div>
        </Nav>
      </Navbar>
    );
  }
}