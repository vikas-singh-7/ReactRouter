import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const Home = () => {
  const [gif, setGif] = useState(false);
  function handleClick() {
    setGif(!gif);
  }
  return (
    <div className="grid grid-cols-12">
      <div className="a short heading col-span-6 ">
        {gif ? (
          <Outlet />
        ) : (
          <h1>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda
            eius doloremque illo nesciunt accusamus placeat, voluptatum, sunt,
            fugit optio illum sint dolorum. Libero esse veritatis iusto quisquam
            explicabo! Similique officia et est beatae quia modi, quaerat fugiat
            aut molestias exercitationem nisi numquam ad ut vitae a veniam at
            reiciendis incidunt dolorum error porro mollitia asperiores esse!
            Exercitationem optio tempore iusto velit. Autem vero iusto eveniet
            eaque eos, veritatis obcaecati iure molestiae cum aliquid nulla
            dolores accusamus ab incidunt quas explicabo sed quos, quisquam
            doloribus ad corrupti a saepe consequuntur repudiandae. Incidunt
            expedita corrupti delectus voluptatum quae aliquid ut harum, dolore
            ea tempore neque officia inventore eius iusto quia repellendus
            labore saepe voluptate, quasi culpa. Unde, voluptate nemo cum
            laudantium earum perferendis ab adipisci aperiam incidunt, aut sunt
            quos suscipit ipsum dolores consequuntur, facere labore praesentium
            quidem fuga quo officiis expedita dolore deleniti sapiente!
            Veritatis illum quod esse incidunt minima in quaerat excepturi a
            iste unde distinctio magni quisquam laudantium harum dolore quo nisi
            alias laborum et, non enim, repudiandae nostrum vel cumque?
            Perferendis, enim quasi magni culpa cupiditate molestiae obcaecati
            recusandae eius veritatis, maiores pariatur veniam debitis ipsa
            officia dicta doloribus deserunt doloremque laudantium architecto!
            Blanditiis dolores cupiditate alias maxime corporis distinctio
            velit, ab voluptate atque nobis id necessitatibus aperiam tempora
            nulla voluptas. A doloribus, hic natus nisi repellat necessitatibus
            laudantium quam. Esse, voluptatem placeat cum atque nostrum sunt
            rerum voluptatum minus, omnis, fugit dicta? Assumenda est tempora
            mollitia consectetur architecto quo magni quia illum. Commodi
            accusantium dignissimos reprehenderit et ipsa distinctio voluptate
            alias quae animi, eius expedita tempore vero natus maxime
            exercitationem ullam. Earum atque ipsum eaque praesentium cum
            aliquid non blanditiis adipisci sunt maxime, voluptatibus aut, ab
            laboriosam! Odio debitis, incidunt consectetur quo quod mollitia
            eos, atque pariatur a ea quos dolorem eveniet enim similique,
            ratione soluta asperiores!
          </h1>
        )}
      </div>
      <div className="col-span-6 overflow-hidden relative items-center gap-3 p-4">
        {" "}
        <div className="grid-cols-12 grid gap-3">
          <h1 className="text-2xl col-span-12 h-[90px] bg-teal-500 rounded-md flex justify-center items-center">
            the power machine...{" "}
            <span className="text-white font-bold">
              <NavLink to={"/Bmw"} onClick={handleClick}>
                bmw
              </NavLink>
            </span>
          </h1>
          <img
            className="col-span-12 rounded-md "
            src="https://www.bmw.in/content/dam/bmw/common/all-models/3-series/sedan/2022/highlights/bmw-3-series-sedan-cp-design-ext-desktop.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
