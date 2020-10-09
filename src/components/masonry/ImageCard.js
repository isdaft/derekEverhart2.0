import React from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app
import Img from "gatsby-image";


class ImageCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
	      photoIndex: 0,
	      isOpen: false,
	    };
		
	}

	render(){
		//console.log('imageCard props', this.props)
		const { photoIndex, isOpen } = this.state;
		//const { isModalOpen } = this.state;
		//{{height: `${this.state.height}px`}}
		return(
				
			<div className="image-container" onClick={() => this.setState({ isOpen: true })}>
				
					{/*<img className="item" src={this.props.image.fluid.src} />*/}
					<Img className="item" fluid={this.props.image.fluid} />
				
				<div className="imageInfo">
					<div className="aligner-top">
							<a href="#">
								oijdeiwnfd
							</a>
					</div>
					<div className={`aligner-bottom`}>
							dopwmpoidjw
					</div>
				</div>

				
				{isOpen && (
	          <Lightbox
	            mainSrc={this.props.image.fluid.src}
	            onCloseRequest={() => this.setState({ isOpen: false })}
	            onMovePrevRequest={() =>
	              this.setState({
	                photoIndex: 0,
	              })
	            }
	            onMoveNextRequest={() =>
	              this.setState({
	                photoIndex: 0,
	              })
	            }
	          />
	        )}
			</div>
			
			
			
			




			);
		
	}
}

export default ImageCard;