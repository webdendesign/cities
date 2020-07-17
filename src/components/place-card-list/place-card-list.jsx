import React from 'react';
import PropTypes from 'prop-types';
import PlaceCard from '../place-card/place-card.jsx';

class PlaceCardList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleCardHover = this.handleCardHover.bind(this);
    this.handleCardUnhover = this.handleCardUnhover.bind(this);

    this.state = {
      activeCard: null
    };
  }

  handleCardHover(card) {
    this.setState({
      activeCard: card
    });
  }

  handleCardUnhover() {
    this.setState({
      activeCard: null
    });
  }

  render() {
    const {offers} = this.props;

    return (
      <div className="cities__places-list places__list tabs__content">
        {
          offers.map((offer) => (
            <PlaceCard
              key={offer.id}
              offer={offer}
              onMouseEnter={this.handleCardHover}
              onMouseLeave={this.handleCardUnhover}
            />
          ))
        }
      </div>
    );
  }
}

PlaceCardList.propTypes = {
  offers: PropTypes.arrayOf(
    PropTypes.shape({
      propertyName: PropTypes.string.isRequired,
      propertyType: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
      isPremium: PropTypes.bool.isRequired,
      picture: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired
    })
  )
};

export default PlaceCardList;

