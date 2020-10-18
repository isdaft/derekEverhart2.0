import React, { useState, useEffect } from "react";
import Img from "gatsby-image"

import ImageList from './masonry/ImageList'



function GalleryRender(props) {


  const portfolioCategoriesAll = [];
  props.data.map(function(item){
    
    if(!portfolioCategoriesAll.includes('All')){
      portfolioCategoriesAll.push('All');
    } 
    if(!portfolioCategoriesAll.includes(item.node.relativePath.split('/')[0])){
      portfolioCategoriesAll.push(item.node.relativePath.split('/')[0])
    }

    
  })
  //create a new array of objects, with each image having all attributes associated & available.
  const portfolioItems = props.data.map(function(item){
    const container = {};
    container["id"] = item.node.childImageSharp.id;
    container["fluid"] = {
      aspectRatio: item.node.childImageSharp.fluid.aspectRatio, 
      base64: item.node.childImageSharp.fluid.base64,
      sizes: item.node.childImageSharp.fluid.sizes, 
      srcSet: item.node.childImageSharp.fluid.srcSet,
      src: item.node.childImageSharp.fluid.src};
    container["category"] = [item.node.relativePath.split('/')[0], 'All'];
    container["alt"] = item.node.name;

    return container; //returns resulting modified array of objects back into portfolioItems

  })

  const [filter, setFilter] = useState("All");
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(portfolioItems);
  }, []);

  useEffect(() => {
    setProjects([]);

    let increment = 0;
    const filtered = portfolioItems.map((p,i) => (
    {
      ...p,
      filtered: p.category.includes(filter),
      i: p.category.includes(filter) === true ? increment++ : null
    }

    ));
    setProjects(filtered);

  }, [filter]);

  return (
    <div>
      
        {/* print out all categories based on the folders found in images parent*/}
        <div className="gallery-page">
        <h1>Gallery</h1>
        <div className="ui menu">
        { portfolioCategoriesAll.map((category, i) => (
          
          <button key={i} className={`item active-${filter === category}`} active={`${filter === category}`} onClick={() => {setFilter(category)} } style={{border: 'none'}}>
          {category}
          </button>
          
        ))}
        </div>
        </div>        
      
        <div className="portfolio__container">      
              
            <ImageList images={projects}/> 
                 
      </div>
    </div>
    
  );
}

export default GalleryRender;
