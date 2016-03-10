var React = require('react')

module.exports = React.createClass({
  render: function() {
    console.log("In card")
    return (
      <div className="col-md-4 portfolio-item">
        <a href="#">
          <img className="img-responsive" src="images/scream.png" alt="" />
        </a>
        <h3 className="title">
        <a href="#">{this.props.title}</a>
        </h3>
        <h4>{this.props.artist}</h4>
        <h4> Value: {this.props.value}</h4>
        <h5> Rating: {this.props.rating}</h5>
        <h5> Owner: {this.props.owner}</h5>
      </div>
    )
  }
})
