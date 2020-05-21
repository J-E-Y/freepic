import React, { useState, useEffect } from "react";
import Slogan from "./Slogan";
import ImagesCard from "./ImagesCard";

function Home() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("data: ", data);
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <Slogan />
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-4">
          {images.map((image) => (
            <ImagesCard key={image.id} image={image} />
          ))}
        </div>
      </div>
      )
    </div>
  );
}

export default Home;
