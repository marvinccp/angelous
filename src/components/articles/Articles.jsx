import { useLoaderData } from "react-router-dom";
import { data } from "../../utils/data.js";
import "../article/article.css";
import { Header } from "../header/Header.jsx";

export const articleLoader = ({ params }) => {
  const article = data(params.id);
  const articleInfo = article.filter((el) => el.id === params.id);
  return { articleInfo };
};
import "./articles.css";
export const Articles = () => {
  const { articleInfo } = useLoaderData();

  return (
    <div className="container-articles">
      <Header />
      <section className="articles-container">
        {articleInfo
          ? articleInfo.map(({ id, text, image, category, title }) => (
              <article className="article_container" key={id}>
                <section>
                  <h1>{title}</h1>
                  <h5>Categoría: {category}</h5>
                  <div className="image-container">
                    <img className="image" src={image} alt="article-image" />
                  </div>
                </section>
                <section
                  className="
                article-text"
                >
                  <p>{text}</p>
                </section>
              </article>
            ))
          : "No Data"}
      </section>
      <section className="articles-frase">
        <h2>Mereces Más!!!</h2>
      </section>
      <section className="redes">
        <h5>insta</h5>
        <h5>face</h5>
        <h5>linkdin</h5>
        <h5>threads</h5>
      </section>
    </div>
  );
};
