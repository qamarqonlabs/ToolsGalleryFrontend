import Navbar from "./assets/components/NavBar.jsx";
import Posts from "./assets/components/posts.jsx";
import Footer from "./assets/components/Footer.jsx";
import Header from "./assets/components/Header.jsx";
import { useEffect, useState } from "react";
import { getAll } from "./assets/components/utilityFunctions/BCom.js";
import "./assets/main.css";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getAll().then((res) => {
      setData(res.data);
      console.log(typeof res);
    });
  }, []);
  return (
    <div className="bg-gray-900 min-h-screen">
      <div className="container mx-auto text-center">
        <Navbar
          categories={[
            "video-editing",
            "photo-editing",
            "graphic-designing",
            "content-creation",
          ]}
          price={[
            "video-editing",
            "photo-editing",
            "graphic-designing",
            "content-creation",
          ]}
          rating={[
            "video-editing",
            "photo-editing",
            "graphic-designing",
            "content-creation",
          ]}
          easeOfUse={[
            "video-editing",
            "photo-editing",
            "graphic-designing",
            "content-creation",
          ]}
          standard={[
            "video-editing",
            "photo-editing",
            "graphic-designing",
            "content-creation",
          ]}
        />
      </div>
      <div className="container mx-auto text-center">
        <Header />
      </div>
      <div className="container mx-auto text-center"></div>
      <div className="container mx-auto text-center">
        <div className="container w-full flex m-auto">
          <Posts data={data} />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
