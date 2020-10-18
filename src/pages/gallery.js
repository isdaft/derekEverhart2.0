import React from "react"
import { StaticQuery, graphql } from "gatsby"
import GalleryRender from '../components/GalleryRender'
import SEO from '../components/seo'

import "../components/gallery.css"

export default class Gallery extends React.Component {





  render() {

    return (
      
      <StaticQuery query={graphql`{
        allPhotos:allFile(filter:{ sourceInstanceName:{eq: "images"} }){
          edges{
            node{
              name
              relativePath
              childImageSharp {
                id
                fluid{
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `} 



        render={(data) => (

          <div>
          	<SEO title="Photography Gallery" />
            {console.log(data.allPhotos)}
            {<GalleryRender data={data.allPhotos.edges}/>}
 
          </div> 
        )}
      />
    )
  }
}
