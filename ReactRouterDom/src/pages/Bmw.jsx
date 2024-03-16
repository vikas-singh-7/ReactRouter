import React from "react";

const Bmw = () => {
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "0",
          paddingBottom: "47%",
          position: "relative",
        }}
      >
        <iframe
          src="https://giphy.com/embed/rfyhcSaiRsaha"
          width="100%"
          height="100%"
          style={{ position: "absolute" }}
          frameBorder="0"
          class="giphy-embed"
          allowFullScreen
        ></iframe>
      </div>
      <p className="text-xl">
        BMW(268 articles) BMW is a german luxury automobile, motorcycle and
        engine manufacturing company founded in 1916. the brand produces
        motorcycles under BMW motorrad, and plug-in electric cars under BMW i.
        today, the BMW group has 31 production and assembly facilities in 14
        countries, and is one of the leading manufacturers of premium
        automobiles and motorcycles in the world.
      </p>
    </>
  );
};

export default Bmw;
