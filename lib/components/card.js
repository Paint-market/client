var React = require('react')

module.exports = React.createClass({
  render: function() {
    return (
        <div className="col-md-4 portfolio-item">
          <a href="#" data-featherlight="#mylightbox">
              <img className="img-responsive" src={this.props.image} alt="" />
            <h3 className="title">{this.props.title}</h3>
            <h4>{this.props.artist}</h4>
            <h4> Value: {this.props.value}</h4>
            <h5> Owner: {this.props.owner}</h5>
            <div id="mylightbox">
              <img className="img-responsive" src={this.props.image} alt="" />
              <h3 className="title">{this.props.title}</h3>
              <h4>{this.props.artist}</h4>
              <h4> Value: ${this.props.value}</h4>
              <h5> Owner: {this.props.owner}</h5>
            </div>
          </a>
        </div>
    )
  }
})



