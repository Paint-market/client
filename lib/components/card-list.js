var React = require('react')
var Card = require('./card')

module.exports = React.createClass({
  render: function() {
    console.log("In card-list")
    var cards = this.props.cards

    return (
      <div className="row" >
        {
          cards.map(function(card) {
            return (
              <Card
                value={card.value}
                image={card.image}
                artist={card.artist}
                title={card.title}
                owner={card.owner}
                rating={card.rating}
              />
            )
          })
        }
      </div>
    )
  }
})
