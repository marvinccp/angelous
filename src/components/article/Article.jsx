// import React from 'react'
import './article.css'
export const Article = ({nContent}) => {


const contentArticle = nContent ? nContent.map( ({id, text,image, category, title}) =>(
  <article className="article_container" key={id}>
    <section>
      <h1>{title}</h1>
      <h5>Categoría: {category}</h5>
      <div className='image-container'>
      <img className='image' src={image} alt="article-image" />
      </div>
    </section>
    <section className='
    article text'>
      <p>{text}</p>
    </section>
  </article>
))
:'No Data'


  return <>{contentArticle}</>
};
