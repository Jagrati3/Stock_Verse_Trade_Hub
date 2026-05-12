import React, { useEffect, useState } from "react";

const TopCoins = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const res = await fetch(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false${
            import.meta.env.VITE_CG_API_KEY
              ? `&x_cg_pro_api_key=${import.meta.env.VITE_CG_API_KEY}`
              : ""
          }`
        );

        const data = await res.json();

        if (Array.isArray(data)) {
          setCoins(data);
        } else {
          console.error("Unexpected API response:", data);
          setCoins([]);
        }

        setLoading(false);
      } catch (err) {
        console.error("Error fetching coins:", err);
        setLoading(false);
      }
    };

    fetchCoins();
  }, []);

  return (
    <div className="coins-container">
      <h2>Top 10 Cryptocurrencies</h2>

      {loading ? (
        <p>Loading coins...</p>
      ) : coins.length > 0 ? (
        <table className="coins-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Coin</th>
              <th>Price</th>
              <th>24h Change</th>
              <th>Market Cap</th>
            </tr>
          </thead>

          <tbody>
            {coins.map((coin, index) => {
              const change = coin.price_change_percentage_24h;

              return (
                <tr key={coin.id}>
                  <td>{index + 1}</td>

                  <td>
                    <img
                      src={coin.image}
                      alt={coin.name}
                      style={{ width: "24px", marginRight: "8px" }}
                    />
                    {coin.name} ({coin.symbol.toUpperCase()})
                  </td>

                  <td>
                    ${coin.current_price?.toLocaleString() ?? "N/A"}
                  </td>

                  <td
                    style={{
                      color:
                        change > 0 ? "green" : change < 0 ? "red" : "gray",
                    }}
                  >
                    {change !== null && change !== undefined
                      ? change.toFixed(2) + "%"
                      : "N/A"}
                  </td>

                  <td>
                    ${coin.market_cap?.toLocaleString() ?? "N/A"}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <p>No coins found.</p>
      )}
    </div>
  );
};

export default TopCoins;