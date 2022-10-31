import Main from "./Main";
import Gallery from "./Gallery";
import Title from "./Title";
import { useEffect, useState } from "react";
import "./style.css";

const url = "https://www.fishwatch.gov/api/species";

function App() {
  let [isLoaded, setIsLoaded] = useState(false);
  let [feesh, setFeesh] = useState([]);
  let [index, setIndex] = useState(0);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        let data = res.json();
        return data;
      })
      .then((data) => {
        setIsLoaded(true);
        setFeesh(data);
      })
      .catch((err) => {
        console.error("this ain't right", err);
      });
  }, []);

  const increase = () => {
    setIndex(index + 1);
    if (index >= feesh.length) {
      setIndex(0);
    }
  };

  const decrease = () => {
    if (index == 0) {
      setIndex(feesh.length);
    }
    setIndex(index - 1);
  };

  if (!isLoaded) {
    return <div>Loading...</div>;
  }
 
  return (
    <div>
      <h1 className="title">All The Fish In The Sea</h1>
      <Title name={feesh[index]} />
      <section>
        <div className="prev" onClick={decrease}>-</div>
          <Gallery img={feesh[index]["Image Gallery"]} />
        <div className="next" onClick={increase}>+</div>
      </section>
      {/* <Main text={feesh[index]} isLoaded={isLoaded} /> */}
    </div>
  );
}

export default App;
