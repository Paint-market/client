var React = require('react')
import request from 'superagent'

module.exports = React.createClass({

  handleButtonClick: function() {
    console.log("BUYING")
    request
      .post('http://god-controller.herokuapp.com/transactions')
      .send({
        buyerID: 12,
        sellerID:  12,
        paintingID: 123,
        paintingPrice: 400
      })
      .end(function (msg) {
        console.log(msg.message)
      })
  },

  render: function() {
    console.log(this.handleButtonClick)
    console.log('#' + this.props.paintingId)
    var lightbox = '#' + this.props.paintingId
    return (
        <div className="col-md-4 portfolio-item">
            <img className="img-responsive" src={this.props.image} alt="" />
            <h3 className="title">{this.props.title}</h3>
            <h4>{this.props.artist}</h4>
            <h4> Value: {this.props.price}</h4>
            <h5> Owner: {this.props.owner}</h5>
            <button onClick={function () {console.log("BUYING")} } className="btn btn-default">Buy</button>
        </div>
    )
  }

})

        // <div className="col-md-4 portfolio-item">
        //   <a href="#" data-featherlight={lightbox}>
        //       <img className="img-responsive" src={this.props.image} alt="" />
        //     <h3 className="title">{this.props.title}</h3>
        //     <h4>{this.props.artist}</h4>
        //     <h4> Value: {this.props.price}</h4>
        //     <h5> Owner: {this.props.owner}</h5>
        //     <div className="featherlight">
        //       <div className="featherlight-content">
        //         <div id={this.props.paintingId}>
        //             <img className="img-responsive" src={this.props.image} alt="" />
        //             <h5>Painting id: {this.props.paintingId}</h5>
        //             <h3 className="title">{this.props.title}</h3>
        //             <h4 onClick={this.handleButtonClick}>{this.props.artist}</h4>
        //             <h4> Value: ${this.props.price}</h4>
        //             <h5> Owner: {this.props.owner}</h5>
        //             <h5>Owner id: {this.props.ownerId}</h5>
        //             <button onClick={function () {console.log("BUYING")} } className="btn btn-default">Buy</button>
        //         </div>
        //       </div>
        //     </div>
        //   </a>
        // </div>


