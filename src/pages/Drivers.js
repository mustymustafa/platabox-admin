import React, { useEffect, useState } from "react";
import axios from "axios";
import { getDrivers } from "../environment";
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

export default function Drivers() {
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
      const res = await axios.get(getDrivers);
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
          Find Driver
        </Button>
      </section>

      <div className="wrap">
        <div className="heading">
          <p>Drivers</p>
        </div>
        <div className="title">
          <p>Pic</p>
          <p>Name</p>
          <p>Vehicle</p>
          <p>No. Plate</p>
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
                <p>{d.vmodel}</p>
                <p>{d.plate}</p>
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
                          <div>Confirmation Code - {d.confirmationCode}</div>
                          <div>
                            Area1 - {d.area1} | Area2 - {d.area2}
                          </div>
                          <div>
                            Ratings -{" "}
                            {Math.round(
                              d.rating.reduce((a, b) => a + b, 0) /
                                d.rating.length
                            )}
                          </div>
                          <div>Id expiry - {d.id_expiry}</div>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <div>Vehicle Image - </div>
                            {"  "}
                            <img src={`${d.vpic}`} alt={`${d.vmodel}`} />{" "}
                          </div>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <div>ID card - </div>
                            {"  "}
                            <img src={`${d.idCard}`} alt="id card" />{" "}
                          </div>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <div>Insurance - </div>
                            {"  "}
                            <img src={`${d.insurance}`} alt="insurance" />
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
