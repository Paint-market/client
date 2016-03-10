var React = require('react')
var Card = require('./card')

module.exports = React.createClass({
  render: function() {
    console.log("In card-list", this.props.cards)
    var cards = this.props.cards

    return (
      <div className="row" >
        {
          cards.map(function(card) {
            return (
              <Card
                image={card.imageUrl}
                value={card.price}
                artist={card.artistName}
                title={card.title}
                owner={card.ownerName}
                price={card.price}
              />
            )
          })
        }
      </div>
    )
  }
})
