import React, { useEffect, useState } from "react";
import axios from "axios";
import { getLog } from "../environment";
import {
  useToast,
  Input,
  Button,
  Skeleton,
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

export default function Logistics() {
  const toast = useToast();
  const initialFocusRef = React.useRef();
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
      const res = await axios.get(getLog);
      if (res.data.user) {
        setLoading(false);
        setData(res.data.user);
      }
    } catch (err) {
      setLoading(false);
      setError(true);
      console.log(err.message);
    }
  }

  function filter(e) {
    e.preventDefault();
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
          <p>LOGISTICS</p>
        </div>
        <div className="title">
          <p>Pic</p>
          <p>Name</p>
          <p>Phone</p>
          <p>Completed Rides</p>
        </div>
        <div>
          {data &&
            data.map((d) => (
              <div key={d._id} className="list">
                <p>
                  {" "}
                  <img src={`${d.pic}`} alt={`${d.name}`} />
                </p>
                <p>{d.name}</p>
                <p>{d.phone}</p>
                <p>{d.completed}</p>
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
                          <div>Bio - {d.bio}</div>
                          <div>Email - {d.email}</div>
                          <div>Location - {d.location}</div>
                          <div>Driver Since - {d.createdAt}</div>
                          <div>Confirmation Code - {d.confirmationCode}</div>
                          <div>
                            Area1 - {d.area1} | Area2 - {d.area2}
                          </div>
                          <div>
                            Ratings -{" "}
                            {isNaN(
                              Math.round(
                                d.rating.reduce((a, b) => a + b, 0) /
                                  d.rating.length
                              )
                            )
                              ? 0
                              : Math.round(
                                  d.rating.reduce((a, b) => a + b, 0) /
                                    d.rating.length
                                )}
                          </div>

                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <div>ID card - </div>
                            <a
                              href={`${d.idCard}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Open Image
                            </a>
                          </div>
                          <div>
                            <br />
                            <p style={{ color: "white" }}>Comments</p>
                            <br />
                            {d.comments.map((c, i) => (
                              <p style={{ color: "white" }} key={i}>
                                {c}
                              </p>
                            ))}
                          </div>
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
      <div>
        {error && (
          <section className="indicator">
            <Button onClick={query} variantColor="green">
              {" "}
              Reload
            </Button>
          </section>
        )}
      </div>
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
