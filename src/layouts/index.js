import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import 'semantic-ui-css/semantic.min.css';

import Sidebar from '.././components/sidebar'
import Header from '../components/Header'
import Gallery from '../components/Gallery'
import Transition from '../components/Transition'
import SEO from '../components/seo'
import '../styles/main.scss'
import '../styles/fonts/font-awesome/css/font-awesome.min.css'

const DefaultLayout = ({ children, location }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            author
            description
            social {
              twitter
              facebook
              linkedin
              github
              email
            }
          }
        }
      }
    `}
    render={data => (

      <div className="wrapper">
        <Helmet>
          <link
            href="https://fonts.googleapis.com/css?family=Lato|PT+Serif&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <SEO title="Photography Gallery" />
        
        <Sidebar siteMetadata={data.site.siteMetadata} />
        <div>
        <Transition location={location}>
          <div className="content-box clearfix">{children}</div>
        </Transition>
        </div>
       
        

      </div>
    )}
  />

)

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default DefaultLayout
