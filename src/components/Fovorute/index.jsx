import React, { useState } from "react";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import data from "../../data/data.json";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Contaiener from "@mui/material/Container";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Divider from "@mui/material/Divider";

import StarIcon from "@mui/icons-material/Star";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  borderRadius: "17px",
};

export default () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const add = (val) => {
    dispatch({ type: "ADD_PET", payload: val });
    handleClose();
  };

  const addFav = (val) => {
    dispatch({ type: "ADD_FAV", payload: val });
  };

  const del = (val) => {
    dispatch({ type: "D_FAV", payload: val });
  };
  return (
    <Grid>
      <Contaiener>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {state.favourite.map((val, index) => (
              <Grid item xs={12} sm={4} md={3} key={index}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <Box
                      sx={{
                        position: "absolute",
                        right: 1.9,
                        bgcolor: "black",
                        backgroundColor: "#021973",
                        borderBottomLeftRadius: "13px",
                        borderTopRightRadius: "13px",
                        width: "20%",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                      }}
                    >
                      <Button onClick={() => del(val)}>
                        <StarIcon sx={{ fontSize: "30px", color: "white" }} />
                      </Button>
                    </Box>
                    <CardMedia
                      component="img"
                      height="240"
                      image={val.imgSrc}
                      alt="green iguana"
                      sx={{
                        borderTopLeftRadius: "10%",
                        borderTopRightRadius: "10%",
                      }}
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h6"
                        color="primary"
                        component="div"
                      >
                        {val.title}
                      </Typography>
                      <Typography
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography>Color:{val.color}</Typography>
                        <Typography
                          sx={{
                            width: "15px",
                            height: "15px",
                            borderRadius: "50%",
                            bgcolor: `${val.color}`,
                          }}
                        ></Typography>
                      </Typography>
                      <br />
                      <Typography>Articul:{val.articul}</Typography>
                      <br />
                      <Typography>{val.price} UAH</Typography>
                      <br />
                      <Typography>{val.desc}</Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button
                      sx={{
                        backgroundColor: "#bec8f4",
                        width: "90%",
                        color: "black",
                        borderRadius: "20px",
                        "&:hover": { backgroundColor: "blue" },
                      }}
                      onClick={() =>
                        dispatch({ type: "ADD_PET", payload: val })
                      }
                    >
                      Add to card
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Contaiener>
    </Grid>
  );
};
