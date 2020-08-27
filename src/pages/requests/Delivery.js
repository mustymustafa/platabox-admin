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
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  ButtonGroup,
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
        <Input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button variantColor="green" size="sm" fontSize="sm">
          Find Delivery Request
        </Button>
      </section>

      <div className="wrap">
        <div className="heading">
          <p>Delivery Request</p>
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
                        </div>
                      </PopoverBody>
                      <PopoverFooter
                        border="0"
                        d="flex"
                        alignItems="center"
                        justifyContent="space-between"
                        pb={4}
                      >
                        <ButtonGroup size="sm">
                          <Button variantColor="red">Deactivate</Button>
                        </ButtonGroup>
                      </PopoverFooter>
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
