// https://www.gatsbyjs.org/docs/adding-tags-and-categories-to-blog-posts/#add-tags-to-your-markdown-files

import React from 'react';
import { Link, graphql } from 'gatsby';
import profilePic from '../components/derekphoto.jpg'
import { kebabCase } from 'lodash';


const AboutPage = ({ data }) => {

  return (
      <div className="about-page">
        <article className="grid-article">

          <div className="profileTitle">
            <h1>Derek Everhart  <span>Photographer / Electrical Engineering Student </span></h1>
          </div>

          <div className="profilePhoto">
            <img className="scale-with-grid" src={profilePic} alt="Derek Everhart Portrait"/>
          </div>
          <div className="profileText">
          <p>Magna nisi in qui nulla anim eiusmod occaecat sed culpa
          ex mollit id aliquip fugiat commodo elit in laborum in
          dolore consectetur exercitation adipisicing elit dolor ut
          anim dolore minim ullamco ex cupidatat cupidatat officia
          commodo ut eu consectetur deserunt adipisicing ut duis
          consequat dolore est sit quis magna irure do do sit
          voluptate ad sed aliqua ea magna quis non dolor ex occaecat
          in dolore nisi ad officia id adipisicing enim veniam do quis
          aute ea culpa dolore eu minim aute in sed sunt veniam nulla
          occaecat irure voluptate est adipisicing adipisicing nostrud
          in deserunt magna dolore excepteur amet do cupidatat culpa
          incididunt sed.</p>
          <p>Velit in deserunt laboris reprehenderit
          deserunt occaecat exercitation dolore et sed cupidatat
          commodo esse sint aute irure ad et velit ullamco in
          consequat veniam culpa in exercitation adipisicing minim
          minim excepteur irure laborum in aliqua do ut fugiat aliquip
          veniam labore consectetur voluptate fugiat laboris labore
          cillum qui mollit non ullamco voluptate exercitation esse
          cupidatat et id esse ullamco proident dolore deserunt ex
          aliquip qui elit.</p>
          <p>Laboris enim qui dolor est duis anim
          consequat officia ea officia exercitation dolor enim culpa
          cupidatat eu voluptate anim dolor adipisicing cupidatat in
          deserunt eu sunt labore culpa duis id aliquip nisi aliquip
          eu in quis in eu mollit.</p> 
          <p>Laborum nostrud velit aliquip ea
          consectetur incididunt magna velit occaecat proident commodo
          anim sit aliqua aute ad quis proident eiusmod consectetur
          incididunt tempor veniam fugiat labore proident voluptate
          sunt velit nisi sit ea ut dolore ut nostrud aute ad duis id
          tempor fugiat in dolore reprehenderit sit duis veniam
          occaecat occaecat est culpa mollit ad.</p> </div>

        </article>
      </div>
  );
};

export default AboutPage;

