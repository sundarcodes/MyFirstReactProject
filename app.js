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
    // Image height and weight to be based on bootstrap col width
    var imgHeight = 200*bootstrapColWidth;
    var imgWidth = 200*bootstrapColWidth;
    var imgCollections = ['nature','buildings','food','people','technology','objects'];
    var imgEffects = ['tilt','hue','bw','morph','sepia'];
    var len = imgEffects.length;
    for (let i = 0; i < row*col ;i++) {
      let imgUrl = 'https://source.unsplash.com/category/'+ imgCollections[(i%6)] +'/'+ imgHeight + 'x' + imgWidth;
      imgBoxArr.push(<ImgBox keyId={i} hoverEffect={imgEffects[(i%len)]} colWidth={bootstrapColWidth} imgUrl={imgUrl}/>);
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
    var classProperty = "col-xs-" + this.props.colWidth + ' photo-holder ' +this.props.hoverEffect;
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
