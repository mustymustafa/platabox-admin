import React, { useEffect, useState } from "react";
import axios from "axios";
import { UsersQuery } from "../environment";
import { Spinner, useToast, Input, Button } from "@chakra-ui/core";

export default function Users() {
  const toast = useToast();
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function query() {
      setLoading(true);
      setError(false);
      try {
        const res = await axios.get(UsersQuery);
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
    query();
  }, []);

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
      <section className="users-header">
        <Input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button variantColor="green"> Find User </Button>
      </section>
      <div>
        {data &&
          data.map((d) => (
            <div key={d._id}>
              <p>Emails: {d.email}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
