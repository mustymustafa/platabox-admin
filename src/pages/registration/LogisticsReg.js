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
import { getLogRegistartion } from "../../environment";

export default function LogisticsReg() {
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

  async function activate(id) {
    if (window.confirm(`Are you sure you want to activate this user`)) {
      try {
        const res = await axios.post(
          `https://hawk-server.herokuapp.com/api/v1/${id}/activate`
        );
        console.log(res);
      } catch (err) {
        console.log(err.message);
      }
    }
  }

  function filter(e) {
    e.preventDefault();

    if (search === "") {
      query();
      return;
    }
    const filtered = data.filter((d) => d.name === search.toLowerCase());
    if (filtered.length === 0) {
      query();
    }
    setData(filtered);
  }

  return (
    <div className="logistics-reg">
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
          <p>LOGISTICS REGISTRATION</p>
        </div>
        <div className="title">
          <p>Name</p>
          <p>Email</p>
          <p>Phone</p>
          <p>Confirmed</p>
        </div>
        <div>
          {data &&
            data.map((d) => (
              <div key={d._id} className="list">
                <p>{d.name}</p>
                <p>{d.email}</p>
                <p>{d.phone}</p>
                <p>{d.isConfirmed ? "true" : "false"}</p>
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
                          <div>Vehicle Color - {d.vcolor}</div>
                          <div>Vehicle Expiry - {d.vl_expiry}</div>
                          <div>Vehicle Model - {d.vmodel}</div>
                          <div>Vehicle Year - {d.year}</div>
                          <div>S Name - {d.sname}</div>
                          <div>S Phone - {d.sphone}</div>
                          <div>Confirmation Code - {d.confirmationCode}</div>
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
                          <Button
                            variantColor="red"
                            onClick={() => {
                              activate(d._id);
                            }}
                          >
                            Activate
                          </Button>
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
