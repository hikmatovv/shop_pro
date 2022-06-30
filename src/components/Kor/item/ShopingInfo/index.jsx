import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import InputBase from "@mui/material/InputBase";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

export default () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "background.paper",
    boxShadow: 24,
  };

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [studentId, setStudentId] = useState(1);
  const handleOsh = () => {
    dispatch({
      type: "ADD_STUDENT",
      payload: { id: studentId, name, lastName, email, age, phone, address },
    });
    setStudentId(studentId + 1);
  };

  const handleOpen = () => {
    setOpen(true);
    dispatch({
      type: "ADD_STUDENT",
      payload: { id: studentId, name, lastName, email, age, phone, address },
    });
    setStudentId(studentId + 1);
    setName("");
    setLastName("");
    setEmail("");
    setAge("");
    setPhone("");
    setAddress("");
  };

  const functionn = () => {
    handleOsh();
    handleClose();
  };
  const dell = (val) => {
    dispatch({ type: "DEL_MEVAALL", payload: val });
    setOpen(false);
  };
  

  return (
    <>
      <Grid>
        <Box
          sx={{
            flexGrow: 1,
            backgroundColor: `rgba(211,205,249,.30196078431372547)`,
            marginTop: "50px",
            borderRadius: "15px",
          }}
        >
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            sx={{ padding: "30px 20px" }}
          >
            <Grid item xs={12} sm={4} md={6}>
              <Typography>First Name</Typography>
              <InputBase
                sx={{
                  ml: 1,
                  flex: 1,
                  backgroundColor: "white",
                  width: "350px",
                  height: "50px",
                  color: "black",
                  borderRadius: "10px",
                }}
                onChange={(e) => setName(e.target.value)}
                value={name}
                placeholder="     Jhon"
                inputProps={{ "aria-label": "search google maps" }}
              />
            </Grid>
            <Grid item xs={12} sm={4} md={6}>
              <Typography>Last Name</Typography>
              <InputBase
                sx={{
                  ml: 1,
                  flex: 1,
                  backgroundColor: "white",
                  width: "350px",
                  height: "50px",
                  color: "black",
                  borderRadius: "10px",
                }}
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
                placeholder="     Doe"
                inputProps={{ "aria-label": "search google maps" }}
              />
            </Grid>
            <Grid item xs={12} sm={4} md={6}>
              <Typography>Email</Typography>
              <InputBase
                sx={{
                  ml: 1,
                  flex: 1,
                  backgroundColor: "white",
                  width: "350px",
                  height: "50px",
                  color: "black",
                  borderRadius: "10px",
                }}
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="     example@gmail.com"
                inputProps={{ "aria-label": "search google maps" }}
              />
            </Grid>
            <Grid item xs={12} sm={4} md={6}>
              <Typography>Age</Typography>
              <InputBase
                sx={{
                  ml: 1,
                  flex: 1,
                  backgroundColor: "white",
                  width: "350px",
                  height: "50px",
                  color: "black",
                  borderRadius: "10px",
                }}
                onChange={(e) => setAge(e.target.value)}
                value={age}
                placeholder="     Age"
                inputProps={{ "aria-label": "search google maps" }}
              />
            </Grid>
            <Grid item xs={12} sm={4} md={6}>
              <Typography>Number</Typography>
              <InputBase
                sx={{
                  ml: 1,
                  flex: 1,
                  backgroundColor: "white",
                  width: "350px",
                  height: "50px",
                  color: "black",
                  borderRadius: "10px",
                }}
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                placeholder="     +33(__)___-__-__"
                inputProps={{ "aria-label": "search google maps" }}
              />
            </Grid>
            <Grid item xs={12} sm={4} md={6}>
              <Typography>Address</Typography>
              <InputBase
                sx={{
                  ml: 1,
                  flex: 1,
                  backgroundColor: "white",
                  width: "350px",
                  height: "50px",
                  color: "black",
                  borderRadius: "10px",
                }}
                onChange={(e) => setAddress(e.target.value)}
                value={address}
                placeholder="     Address"
                inputProps={{ "aria-label": "search google maps" }}
              />
            </Grid>
          </Grid>
        </Box>
        <Button
          sx={{
            backgroundColor: "#bec8f4",
            width: "30%",
            color: "black",
            borderRadius: "20px",
          }}
          onClick={handleOpen}
          // onClick={functionn}
          // onClick={handleOpen}
        >
          Add to card
        </Button>
      </Grid>
      {state.students.map((val) => {
        return (
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Box
                pl="2"
                pr="4%"
                pt="5%"
                pb="3%"
                textAlign="center"
                sx={{
                  backgroundColor: "#E8E5FC",
                  borderBottom: "3px solid #A795FF",
                }}
              >
                <Typography sx={{ fontFamily: "arial black" }}>
                  Your Order has been received !
                </Typography>
              </Box>
              <Typography
                pl="3%"
                sx={{ fontFamily: "arial black", fontSize: "20px" }}
              >
                Customer info
              </Typography>
              <Divider variant="middle" />
              <Box pl="3%" pr="3%">
                <Grid
                  mt="2%"
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography sx={{ display: "flex", flexDirection: "row" }}>
                    <Typography color="#83B4EA">First name:</Typography>
                    <Typography> {val.name}</Typography>
                  </Typography>
                  <Typography sx={{ display: "flex", flexDirection: "row" }}>
                    <Typography color="#83B4EA">Last name:</Typography>
                    <Typography>{val.lastName}</Typography>{" "}
                  </Typography>
                </Grid>

                <Typography
                  mt="2%"
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography color="#83B4EA"></Typography>
                  <Typography color="#83B4EA"></Typography>
                </Typography>

                <Grid
                  mt="2%"
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography sx={{ display: "flex", flexDirection: "row" }}>
                    <Typography color="#83B4EA">Email:</Typography>
                    <Typography> {val.email}</Typography>
                  </Typography>
                  <Typography sx={{ display: "flex", flexDirection: "row" }}>
                    <Typography ml="-5%" color="#83B4EA">
                      Age:
                    </Typography>
                    <Typography>{val.age}</Typography>
                  </Typography>
                </Grid>

                <Typography
                  mt="2%"
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography color="#83B4EA"></Typography>
                  <Typography color="#83B4EA"></Typography>
                </Typography>

                <Grid
                  mt="2%"
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography sx={{ display: "flex", flexDirection: "row" }}>
                    <Typography color="#83B4EA"> Phone: :</Typography>
                    <Typography> {val.phone}</Typography>
                  </Typography>
                  <Typography sx={{ display: "flex", flexDirection: "row" }}>
                    <Typography color="#83B4EA"> Address :</Typography>
                    <Typography> {val.address}</Typography>
                  </Typography>
                </Grid>
              </Box>
              <Typography
                mt="3%"
                pl="3%"
                sx={{ fontFamily: "arial black", fontSize: "20px" }}
              >
                Customer info
              </Typography>

              {state.shopCart.map((val, index) => {
                return (
                  <>
                    <Card
                      sx={{ display: "flex", marginTop: "30px" }}
                      key={{ index }}
                    >
                      <CardMedia
                        component="img"
                        sx={{
                          width: 110,
                          height: 100,
                          margin: "20px",
                          borderRadius: "15px",
                        }}
                        image={val.imgSrc}
                        alt="Something went wrong"
                      />
                      <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <CardContent sx={{ flex: "1 0 auto" }}>
                          <Grid container>
                            <Grid item md={3}>
                              <Typography component="div" variant="h6">
                                {val.title}
                              </Typography>

                              <Typography
                                variant="subtitle1"
                                color="text.secondary"
                                component="div"
                                sx={{ width: "600px", display: "inline-block" }}
                              >
                                Color: {val.color}
                              </Typography>

                              <Typography variant="subtitle1" component="div">
                                Articul:{val.articul}
                              </Typography>
                            </Grid>
                            <Grid
                              item
                              md={3}
                              justifyContent="center"
                              sx={{
                                display: "flex",
                                flexDirection: "row",
                                fontWeight: "600",
                                marginTop: "7%",
                              }}
                            >
                              <Typography>{val.amount}</Typography>
                              <Typography>{val.price}UAH</Typography>{" "}
                            </Grid>
                          </Grid>
                        </CardContent>
                      </Box>
                    </Card>
                    {/* <Grid
                  item
                  md={3}
                  justifyContent="center"
                  sx={{ marginTop: "7%" }}
                >
                  Total:
                  {val.amount * val.price}UAH
                </Grid> */}
                  </>
                );
              })}

              <Button
                sx={{
                  backgroundColor: "#bec8f4",
                  width: "40%",
                  color: "black",
                  borderRadius: "20px",
                }}
                onClick={dell}
              >
                Add to card
              </Button>
            </Box>
          </Modal>
        );
      })}
    </>
  );
};
