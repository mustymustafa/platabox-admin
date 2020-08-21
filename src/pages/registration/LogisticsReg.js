import React, { useEffect, useState } from "react";
import axios from "axios";
import { getLogRegistartion } from "../../environment";
import { Spinner, useToast } from "@chakra-ui/core";

export default function LogisticsReg() {
  const toast = useToast();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    query();
  }, []);

  async function query() {
    setLoading(true);
    setError(false);
    try {
      const res = await axios.get(getLogRegistartion);
      if (res.data) {
        setLoading(false);
        setData(res.data.value);
      }
    } catch (err) {
      setLoading(false);
      setError(true);
      console.log(err.message);
    }
  }

  return (
    <div>
      {error &&
        toast({
          title: "An error occurred.",
          description: "check your internet connection and refresh.",
          status: "error",
          duration: 5000,
          isClosable: true,
        })}
      <div className="indicator" style={{ display: loading ? "flex" : "none" }}>
        {loading && <Spinner speed="1s" />}
      </div>

      <div>
        {data && data.map((d, i) => <div key={i}>{d}</div>)}
        {data ? "no Logistics registration" : ""}
      </div>
    </div>
  );
}
