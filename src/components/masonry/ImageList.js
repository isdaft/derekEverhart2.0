import './ImageList.css';
import ImageCard from './ImageCard';
import React from 'react';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

export default class ImageList extends React.Component {
	constructor(props) {
		super(props);
		
		
	}
	
	render(){
		//console.log(teest)
		const images = this.props.images.map(image => {
			return(
				
				image.filtered === true ? 
			    	<ImageCard key={image.id} image={image}/>
			    : ""


			);
		});

		return( 
			<div>
			
				<ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
				<Masonry gutter="3">
				
				{images}
				
				</Masonry>
				</ResponsiveMasonry>
			</div>
			);
	}

	
}	

