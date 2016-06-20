
var Gallery = React.createClass({
  render: function(){
    return (
      <div className="container-fluid">
        <FlatLayout row="6" col="6"/>
      </div>
      );
  }
});

var FlatLayout = React.createClass({
  render: function(){
    var row = this.props.row;
    var col = this.props.col;
    var imgBoxArr = [];
    var bootstrapColWidth = 12/this.props.col;
    var imgHeight = 300;
    var imgWidth = 300;
    var imgCollections = ['nature','buildings','food','people','technology','objects'];
    for (let i = 0; i < row*col ;i++) {
      let imgUrl = 'https://source.unsplash.com/category/'+ imgCollections[(i%6)] +'/'+ imgHeight + 'x' + imgWidth;
      imgBoxArr.push(<ImgBox keyId={i} colWidth={bootstrapColWidth} imgUrl={imgUrl}/>);
    }
    return (
      <div className="row">
        {imgBoxArr}
      </div>
      )
  }
});

var ImgBox = React.createClass({
  render: function(){
    var classProperty = "col-xs-" + this.props.colWidth + ' photo-holder';
    var imgUrl = this.props.imgUrl;
    return (
      <div className={classProperty} id={this.props.keyId}>
      <img src={imgUrl} alt="some random image" className='img-responsive'/>
      </div>
      )
  }
});

ReactDOM.render(
  <Gallery />,document.getElementById('example'));
