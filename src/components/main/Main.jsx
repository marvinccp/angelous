import { useState } from "react";
import { data } from "../../utils/data";
import { Article } from "../article/Article";
import "./main.css";
import { Pagination } from "../pagination/Pagination";

export const Main = () => {
  const [content] = useState(data);
  const [dataQuantity] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  console.log(content);

  //variables, index inicial e index final

  const indexLast = currentPage * dataQuantity;
  const indexFirst = indexLast - dataQuantity;

  const nContent = data.slice(indexFirst, indexLast);
  const nPages = Math.ceil(data.length / dataQuantity);

  const dataAside = content.map(({ title, image, id }) => (
    <div key={id}>
      <h1>{title}</h1>
      <img src={image} alt="" />
    </div>
  ));
  
  return (
    <section className="main_container">
      <aside className="aside">
        <h1>yeahh</h1>
        <section>{dataAside}</section>
      </aside>
      <main className="main">
        <h2>Ohhh</h2>
        <Article nContent={nContent} />
        <div>
          <Pagination
            nPages={nPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </main>
    </section>
  );
};
