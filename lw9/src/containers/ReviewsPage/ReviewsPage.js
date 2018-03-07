import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Badge } from 'reactstrap';
import './ReviewsPage.css';
import { ERROR_404, ERROR_500 } from '../../constants/Errors';

class ReviewsPage extends Component {
  constructor(props) {
    super(props);
    this.productId = this.props.match.params.id;
    this.state = {
      error: null,
      isLoaded: false,
      reviews: []
    };
  }

  componentDidMount() {
    fetch(`http://localhost:1337/api/products/${this.productId}/reviews`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            reviews: result
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
    const { error, isLoaded, reviews } = this.state;
    if (error) {
      return <h1><Badge color="danger">Error: {error.message}</Badge></h1>;
    } else if (!isLoaded) {
      return <h1><Badge color="info">Loading...</Badge></h1>;
    } else if (JSON.stringify(reviews) === ERROR_404) {
      return <h1><Badge color="warning">Not found 404!</Badge></h1>;
    } else if (JSON.stringify(reviews) === ERROR_500) {
      return <h1><Badge color="danger">Error 500!</Badge></h1>;
    } else {
      return (
        <Container>
          <h1><Badge color="success">Reviews:</Badge></h1>
          <ListGroup>
            {reviews.map(review => (
              <ListGroupItem className="text" key={review._id}>
                {review.discription}
              </ListGroupItem>
            ))}
          </ListGroup>
        </Container>
      );
    }
  }
}

export default ReviewsPage;
