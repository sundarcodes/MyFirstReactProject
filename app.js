// Please note this uses bootstrap grid layout. So make sure you give column with
// respect to the bootstrap grid format
var Gallery = React.createClass({
  render: function(){
    return (
      <div className="container-fluid">
        <GridLayout row="1" col="3"/>
        <GridLayout row="1" col="6"/>
        <GridLayout row="1" col="2"/>
        <GridLayout row="1" col="4"/>
      </div>
      );
  }
});

var GridLayout = React.createClass({
  render: function(){
    var row = this.props.row;
    var col = this.props.col;
    var imgBoxArr = [];
    var bootstrapColWidth = 12/this.props.col;
    var imgHeight = 1500;
    var imgWidth = 1500;
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
