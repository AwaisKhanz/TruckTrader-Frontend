import React, { useRef, useState } from "react";
import { Box, Typography, Button, Grid, Dialog } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useTranslation } from "react-i18next";
import CalenderIcon from "../../assets/Home/FeatureListingSection/Calendar.png";
import GasIcon from "../../assets/Home/FeatureListingSection/Gas.png";
import SuspensionIcon from "../../assets/Home/FeatureListingSection/Suspension.png";
import TonIcon from "../../assets/Home/FeatureListingSection/Ton.png";
import TransmissionIcon from "../../assets/Home/FeatureListingSection/Transmission.png";
import WheelIcon from "../../assets/Home/FeatureListingSection/Wheel.png";
import ContactDrawer from "./ContactDrawer";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailIcon from "@mui/icons-material/Mail";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

export default function ProductDetailSwipperCard({
  images,
  title,
  location,
  amount,
  vehicleYear,
  transmission,
  fuelType,
  tonnage,
  vehicleType,
  odometerReading,
}) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const mainSwiperRef = useRef(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [openImageIndex, setOpenImageIndex] = useState(null);

  const { t } = useTranslation();

  return (
    <Box
      sx={{
        maxWidth: "90%",
        mx: "auto",
        backgroundColor: "#fff",
        mt: "20px",
        borderRadius: "20px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        {/* Left Section */}
        <Box
          sx={{
            width: { xs: "100%", md: "45%" },
            p: { xs: "16px", md: "30px" },
          }}
        >
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              justifyContent: "space-between",
              mb: { xs: "20px", md: "36px" },
            }}
          >
            <Box>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 600,
                  fontSize: { xs: "20px", md: "24px" },
                }}
              >
                {title}
              </Typography>
              <Typography sx={{ color: "#808080", fontWeight: 400 }}>
                <LocationOnIcon /> {location}
              </Typography>
            </Box>
            <Box
              sx={{
                fontSize: {
                  xs: amount === "Op aanvraag" ? "24px" : "16px",
                },
                fontWeight: 600,
                whiteSpace: "nowrap",
              }}
            >
              {amount}
            </Box>
          </Box>
          {/* Main Swiper */}
          <Swiper
            modules={[Navigation, Pagination, A11y, Thumbs]}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            onSwiper={(swiper) => (mainSwiperRef.current = swiper)}
            thumbs={{ swiper: thumbsSwiper }}
            pagination={{ clickable: true }}
          >
            {images.map((image, index) => (
              <SwiperSlide key={index} onClick={() => setOpenImageIndex(index)}>
                <img
                  loading="lazy"
                  src={image.largest}
                  alt={`Product Image ${index + 1}`}
                  style={{
                    width: "100%",
                    height: "300px",
                    borderRadius: "20px",
                    objectFit: "cover",
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          {/* Thumbnail Swiper */}
          <Swiper
            modules={[Navigation, Pagination, A11y, Thumbs]}
            slidesPerView={3}
            onSwiper={setThumbsSwiper}
            watchSlidesProgress
            className="mt-[12px] md:mt-[20px]"
            breakpoints={{
              1024: { slidesPerView: 3, spaceBetween: 20 },
              768: { slidesPerView: 3, spaceBetween: 15 },
              480: { slidesPerView: 2.5, spaceBetween: 9 },
            }}
          >
            {images.map((image, index) => (
              <SwiperSlide
                key={index}
                onClick={() => mainSwiperRef.current.slideTo(index)}
                style={{ cursor: "pointer" }}
              >
                <img
                  loading="lazy"
                  src={image.src}
                  alt={`Product Thumbnail ${index + 1}`}
                  style={{
                    width: "188px",
                    height: "125px",
                    borderRadius: "20px",
                    objectFit: "cover",
                    border: "2px solid transparent",
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>

        {/* Right Section */}
        <Box
          sx={{
            width: { xs: "100%", md: "55%" },
            p: { xs: "16px", md: "30px" },
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                justifyContent: "space-between",
                mb: { xs: "20px", md: "36px" },
                gap: 6,
              }}
            >
              <Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 600,
                    fontSize: { xs: "20px", md: "24px" },
                  }}
                >
                  {title}
                </Typography>
                <Typography sx={{ fontWeight: 400 }}>
                  <LocationOnIcon sx={{ mb: "3px", fontSize: "20px" }} />{" "}
                  <span style={{ color: "#808080" }}> {location}</span>
                </Typography>
              </Box>
              <Box
                sx={{
                  fontSize: {
                    xs: amount === "Op aanvraag" ? "24px" : "20px",
                    md: amount === "Op aanvraag" ? "24px" : "32px",
                  },
                  fontWeight: 600,
                  whiteSpace: "nowrap",
                }}
              >
                {amount}
              </Box>
            </Box>

            <Typography
              sx={{
                mb: { xs: "20px", md: "36px" },
                color: "#808080",
                fontSize: { xs: "14px", md: "16px" },
              }}
            >
              {title}
            </Typography>

            <Grid
              container
              spacing={{ xs: "20px", md: "36px" }}
              sx={{ mb: { xs: "30px", md: "36px" } }}
            >
              <Grid item xs={4} sx={{ display: "flex", alignItems: "center" }}>
                <img loading="lazy" src={CalenderIcon} alt="calendar" />
                <Typography
                  sx={{ color: "#292D32", ml: "4px", fontSize: "12px" }}
                >
                  {vehicleYear}
                </Typography>
              </Grid>
              <Grid item xs={4} sx={{ display: "flex", alignItems: "center" }}>
                <img loading="lazy" src={TransmissionIcon} alt="transmission" />
                <Typography
                  sx={{ color: "#292D32", ml: "4px", fontSize: "12px" }}
                >
                  {transmission}
                </Typography>
              </Grid>
              <Grid item xs={4} sx={{ display: "flex", alignItems: "center" }}>
                <img loading="lazy" src={GasIcon} alt="fuel type" />
                <Typography
                  sx={{ color: "#292D32", ml: "4px", fontSize: "12px" }}
                >
                  {fuelType}
                </Typography>
              </Grid>
              <Grid item xs={4} sx={{ display: "flex", alignItems: "center" }}>
                <img loading="lazy" src={TonIcon} alt="tonnage" />
                <Typography
                  sx={{ color: "#292D32", ml: "4px", fontSize: "12px" }}
                >
                  {tonnage}
                </Typography>
              </Grid>
              <Grid item xs={4} sx={{ display: "flex", alignItems: "center" }}>
                <img loading="lazy" src={WheelIcon} alt="vehicle type" />
                <Typography
                  sx={{ color: "#292D32", ml: "4px", fontSize: "12px" }}
                >
                  {vehicleType}
                </Typography>
              </Grid>
              <Grid item xs={4} sx={{ display: "flex", alignItems: "center" }}>
                <img loading="lazy" src={SuspensionIcon} alt="odometer" />
                <Typography
                  sx={{ color: "#292D32", ml: "4px", fontSize: "12px" }}
                >
                  {odometerReading}
                </Typography>
              </Grid>
            </Grid>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: "16px",
              width: "100%",
            }}
          >
            {/* <Button
              fullWidth
              sx={{
                backgroundColor: "#F6F6F6",
              }}
              variant="contained"
              color="secondary"
              endIcon={<CallIcon sx={{ mt: "-3px" }} />}
            >
              {t("productDetail.swipper.viewPhoneNumber")}
            </Button> */}
            <Button
              fullWidth
              variant="contained"
              endIcon={<MailIcon sx={{ mt: "-1px" }} />}
              onClick={() => setIsDrawerOpen(true)}
            >
              {t("productDetail.swipper.messageSeller")}
            </Button>
          </Box>
        </Box>
      </Box>

      <ContactDrawer
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />

      <Dialog
        open={openImageIndex !== null}
        onClose={() => setOpenImageIndex(null)}
        // fullScreen
        maxWidth="lg"
        sx={{
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          "& .MuiDialog-paper": {
            backgroundColor: "transparent",
          },
        }}
      >
        {/* Close Button */}
        <IconButton
          onClick={() => setOpenImageIndex(null)}
          sx={{
            position: "absolute",
            top: 20,
            zIndex: 100,
            right: 20,
            color: "white",
            backgroundColor: "rgba(0,0,0,0.6)",
            "&:hover": {
              backgroundColor: "rgba(0,0,0,0.8)",
            },
          }}
        >
          <CloseIcon />
        </IconButton>

        {/* Fullscreen Swiper with Correct Starting Slide */}
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={10}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          initialSlide={openImageIndex}
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image.largest}
                alt={`Fullscreen Image ${index + 1}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Dialog>
    </Box>
  );
}
