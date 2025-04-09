
import { useState, useEffect } from "react";

export default function useOverviewData() {
  const [overview, setOverview] = useState({
    turnover: null,
    profit: null,
    newCustomer: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [turnoverRes, profitRes, newCustomerRes] = await Promise.all([
          fetch("http://localhost:3001/turnover"),
          fetch("http://localhost:3001/profit"),
          fetch("http://localhost:3001/new-customer"),
        ]);

        const turnover = await turnoverRes.json();
        const profit = await profitRes.json();
        const newCustomer = await newCustomerRes.json();
// Mỗi Response cần gọi .json() để lấy dữ liệu thật dưới dạng object.
        setOverview({
          turnover,
          profit,
          newCustomer,
        });
      } catch (error) {
        console.error("Failed to fetch overview data:", error);
      }
    };

    fetchData();
  }, []);

  return overview;
}
