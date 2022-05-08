import React, { useEffect, useState } from "react";
import { CRYPTO_MARKETS_BASE_URL, getCoin } from "../../../services/api";
import Coin from "../Coin";
import Loader from "../Loader";
import SearchInput from "../SearchInput";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import "./index.scss";
import axios from "axios";

const Landing = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        `${CRYPTO_MARKETS_BASE_URL}/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h`
      )
      .then((res) => setCoins(res.data))
      .catch((err) => console.log(err));
  }, []);

  const searchHandeler = (event) => {
    setSearch(event.target.value);
  };

  const searchCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <SearchInput value={search} onChange={searchHandeler} />

      {coins.length ? (
        <div className="d-flex">
          <Swiper
            navigation={true}
            slidesPerView={5}
            modules={[Navigation]}
            className="mySwiper"
            centeredSlides
            loop
            grabCursor
          >
            {searchCoins.map((coin) => (
              <SwiperSlide key={coin.id}>
                <Coin
                  name={coin.name}
                  image={coin.image}
                  symbol={coin.symbol}
                  price={coin.current_price}
                  marketCap={coin.market_cap}
                  priceChange={coin.price_change_percentage_12h}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Landing;
