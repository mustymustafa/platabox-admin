import React, { useEffect, useState } from "react";
import axios from "axios";
import { UsersQuery } from "../environment";
import { Skeleton, useToast, Input, Button } from "@chakra-ui/core";

export default function Users() {
  const toast = useToast();
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    query();
  }, []);

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

  function filter(e) {
    e.preventDefault();
    //refetch all data when search is empty
    if (search === "") {
      query();
      return;
    }
    const filtered = data.filter(
      (d) => d.name.toLowerCase() === search.toLowerCase()
    );
    if (filtered.length === 0) {
      query();
    }
    setData(filtered);
  }

  return (
    <div className="user-page">
      {error &&
        toast({
          title: "An error occurred.",
          description: "check your internet connection and refresh.",
          status: "error",
          duration: 5000,
          isClosable: true,
        })}

      <section className="header">
        <form>
          <Input
            type="search"
            placeholder="search by name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button
            type="submit"
            variantColor="green"
            size="sm"
            fontSize="sm"
            onClick={filter}
          >
            Filter
          </Button>
        </form>
      </section>

      <div className="wrap">
        <div className="heading">
          <p>USERS</p>
        </div>
        <div className="title">
          <p>Name</p>
          <p>Email</p>
          <p>Phone</p>
          <p>Confirmation Code</p>
        </div>
        <div>
          {data &&
            data.map((d) => (
              <div key={d._id} className="list">
                <p>{d.name}</p>
                <p>{d.email}</p>
                <p>{d.phone}</p>
                <p>{d.confirmationCode}</p>
              </div>
            ))}
        </div>
      </div>
      {error && (
        <section className="indicator">
          <Button onClick={query} variantColor="green">
            {" "}
            Reload
          </Button>
        </section>
      )}
      <section className="skeleton">
        <div>{loading && <Skeleton height="40px" my="10px" />}</div>
        <div>{loading && <Skeleton height="40px" my="10px" />}</div>
        <div>{loading && <Skeleton height="40px" my="10px" />}</div>
        <div>{loading && <Skeleton height="40px" my="10px" />}</div>
        <div>{loading && <Skeleton height="40px" my="10px" />}</div>
        <div>{loading && <Skeleton height="40px" my="10px" />}</div>
      </section>
    </div>
  );
}
