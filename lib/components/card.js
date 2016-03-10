var React = require('react')

module.exports = React.createClass({
  render: function() {
    console.log("In card")
    console.log("Image URL", this.props.imageUrl)
    return (
      <div className="col-md-4 portfolio-item">
        <a href="#">
          <img className="img-responsive" src={this.props.image} alt="" />
        </a>
        <h3 className="title">
        <a href="#">{this.props.title}</a>
        </h3>
        <h4>{this.props.artist}</h4>
        <h4> Value: {this.props.value}</h4>
        <h5> Owner: {this.props.owner}</h5>
      </div>
    )
  }
})
