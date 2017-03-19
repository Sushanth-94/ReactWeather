var React = require ('react');

var WeatherMessage = React.createClass({
  render : function(){
    var temp = this.props.temp;
    var location = this.props.location;
    return(
      <h3>It is {temp} in {location}</h3>
    );
  }
});

module.exports = WeatherMessage;
