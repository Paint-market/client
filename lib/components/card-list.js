var React = require('react')
// var Card = require('./card')
import Card from './card'

module.exports = React.createClass({
  render: function() {
    var cards = this.props.cards

    return (
      <div className="row" >
        {
          cards.map(function(card) {
            return (
              <Card
                image={card.imageUrl}
                artist={card.artistName}
                title={card.title}
                owner={card.ownerName}
                ownerId={card.ownerId}
                price={card.price}
                userID={card.userID}
                userName={card.userName}
                paintingId={card.paintingId}
              />
            )
          })
        }
      </div>
    )
  }
})
