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

  const dataAside = content.map(({ title, id }) => (
    <div key={id}>
      <h1>{title}</h1>
    </div>
  ));

  return (
    <section className="main_container">
      <aside >
        <h1>aside</h1>
        {dataAside}

      </aside>
      <main >
        <div className="article">
          <Article nContent={nContent} />
        </div>
        <div className="pagination">
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
