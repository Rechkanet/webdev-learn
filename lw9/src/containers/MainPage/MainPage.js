import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Badge } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import './MainPage.css';

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      products: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:1337/api/products")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            products: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, products } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <Container>
          <h1><Badge color="success">Products:</Badge></h1>
          <ListGroup>
            {products.map(product => (
              <NavLink className='product' to='/'>
                <ListGroupItem key={product._id}>
                  {product.name}
                </ListGroupItem>
              </NavLink>
            ))}
          </ListGroup>
        </Container>
      );
    }
  }
}

export default MainPage;
