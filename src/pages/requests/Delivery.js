import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Skeleton,
  useToast,
  Input,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/core";
import { Deliveries } from "../../environment";

export default function Delivery() {
  const initialFocusRef = React.useRef();
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
      const res = await axios.get(Deliveries);
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

  // console.log(data);

  function filter(e) {
    e.preventDefault();
    if (search === "") {
      query();
      return;
    }
    const filtered = data.filter(
      (d) => d.artisan_name === search.toLowerCase()
    );
    if (filtered.length === 0) {
      query();
    }
    setData(filtered);
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

      <section className="header">
        <form>
          <Input
            type="search"
            placeholder="search by name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button variantColor="green" size="sm" fontSize="sm" onClick={filter}>
            Filter
          </Button>
        </form>
      </section>

      <div className="wrap">
        <div className="heading">
          <p>DELIVERY REQUESTS</p>
        </div>
        <div className="title">
          <p>Artisan Name</p>
          <p>From</p>
          <p>To</p>
          <p>Time</p>
        </div>
        <div>
          {data &&
            data.map((d) => (
              <div key={d._id} className="list">
                <p>{d.artisan_name}</p>
                <p>{d.from}</p>
                <p>{d.to}</p>
                <p>{d.time}</p>
                <section className="modal">
                  <Popover
                    initialFocusRef={initialFocusRef}
                    placement="bottom"
                    closeOnBlur={false}
                  >
                    <PopoverTrigger>
                      <Button variantColor="green" size="sm">
                        More
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent
                      zIndex={4}
                      color="white"
                      bg="blue.800"
                      borderColor="blue.800"
                    >
                      <PopoverHeader pt={4} fontWeight="bold" border="0">
                        {d.name}
                      </PopoverHeader>
                      <PopoverArrow />
                      <PopoverCloseButton />
                      <PopoverBody>
                        <div className="pop-over-body">
                          <div>Price - {d.price}</div>
                          <div>Distance - {d.distance}</div>
                          <div>Status - {d.status}</div>
                          <div>Created At - {d.createdAt}</div>
                          <div>P time - {d.pTime}</div>
                          <div>Active - {d.active}</div>
                          <div>City - {d.city}</div>
                          <div>Dest. Lat - {d.destLat}</div>
                          <div>Dest. Lat2 - {d.destLat2}</div>
                          <div>Dest. Lat3 - {d.destLat3}</div>
                          <div>Dest. Lat4 - {d.destLat4}</div>
                          <div>Dest. Lat5 - {d.destLat5}</div>
                          <div>Dest. Long - {d.destLong}</div>
                          <div>Dest. Long2 - {d.destLong2}</div>
                          <div>Dest. Long3 - {d.destLong3}</div>
                          <div>Dest. Long4 - {d.destLong4}</div>
                          <div>Dest. Long5 - {d.destLong5}</div>
                          <div>Lat - {d.lat}</div>
                          <div>Long - {d.long}</div>
                          <div>Now - {d.now}</div>
                          <div>to2 - {d.to2}</div>
                          <div>to3 - {d.to3}</div>
                          <div>to4 - {d.to4}</div>
                          <div>to5 - {d.to5}</div>
                        </div>
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                </section>
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
