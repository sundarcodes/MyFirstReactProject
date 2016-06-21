// Please note this uses bootstrap grid layout. So make sure you give column width with
// respect to the bootstrap grid format
var Gallery = React.createClass({
  render: function(){
    return (
      <div className="container-fluid">
        <GridLayout row="1" col="3"/>
        <GridLayout row="1" col="6"/>
        <GridLayout row="1" col="2"/>
        <GridLayout row="1" col="4"/>
        <MixedLayout/>
      </div>
      )
  }
});

var MixedLayout = React.createClass({
  render: function(){
    return (
      <div className='row'>
        <div className='col-xs-6'>
          <GridLayout row='1' col='1'/>    
        </div>
        <div className='col-xs-6'>
          <GridLayout row='1' col='2' imgAspectRatio='0.5'/>    
        </div>
      </div>
      )
  }
});

var GridLayout = React.createClass({
  render: function(){
    var row = this.props.row;
    var col = this.props.col;
    var imgBoxArr = [];
    var bootstrapColWidth = 12/this.props.col;
    var imgAspectRatio = this.props.imgAspectRatio || 1;
    // Image height and weight to be based on bootstrap col width and Aspect Ratio
    var imgWidth = 200*bootstrapColWidth*imgAspectRatio;
    imgWidth = imgWidth > 1200 ? 1200 : imgWidth;
    var imgHeight = (200*bootstrapColWidth)/imgAspectRatio;
    imgHeight = imgHeight > 800 ? 800 : imgHeight;
    var imgCollections = ['nature','buildings','food','people','technology','objects'];
    var imgEffects = ['tilt','hue','morph','bw','sepia'];
    var len = imgEffects.length;
    for (let i = 0; i < row*col ;i++) {
      let imgUrl = 'https://source.unsplash.com/category/'+ imgCollections[(i%6)] +'/'+ imgWidth + 'x' + imgHeight;
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
    console.log(this.props.imgUrl);
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
