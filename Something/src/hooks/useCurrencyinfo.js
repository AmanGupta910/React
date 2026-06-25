import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  const url = `https://api.frankfurter.app/latest?from=${currency}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => setData(res.rates))
      .catch((error) => console.error(error));
  }, [currency]);

  return data;
}

export default useCurrencyInfo;