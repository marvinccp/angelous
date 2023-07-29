// import React from 'react'

export const Article = ({nContent}) => {


const contentArticle = nContent ? nContent.map( ({id, text, image, category, title}) =>(
  <article key={id}>
    <section>
      <h1>{id}{title}</h1>
      <img src={image} alt="" />
    </section>
    <section>
      <h5>{category}</h5>
      <p>{text}</p>
    </section>
  </article>
))
:'No Data'


  return <>{contentArticle}</>
};
