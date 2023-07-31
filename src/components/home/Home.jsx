import { Link } from "react-router-dom";
import { data } from "../../utils/data";
import { Header } from "../header/Header";
import "./home.css";
import { Message } from "../message/Message";
export const Home = () => {
  const dataArticles = data();

  return (
    <main className="container">
      
        <Header />
        <Message />
      <section className="article-container">
        {dataArticles
          ? dataArticles.slice(0, 4).map((a) => (
              <Link key={a.id} to={`articles/${a.id}`}>
                <article className="article_home">
                  <div className="image-container-home">
                    <h4 className="article-title">{a.title}</h4>
                    <img className="image-article-home" src={a.image_c} alt="" />
                  </div>
                </article>
              </Link>
            ))
          : "No data"}
      </section>

      <section className="call-to-action">
        <Link to={"main"}>
          <button>TODOS LOS ARTICULOS</button>
        </Link>
      </section>
    </main>
  );
};
