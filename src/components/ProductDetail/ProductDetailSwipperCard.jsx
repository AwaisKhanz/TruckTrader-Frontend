import React, { useRef, useState } from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useTranslation } from "react-i18next";
import truckImage from "../../assets/ProductDetail/truck.png";
import CallIcon from "@mui/icons-material/Call";

import CalenderIcon from "../../assets/Home/FeatureListingSection/Calendar.png";
import GasIcon from "../../assets/Home/FeatureListingSection/Gas.png";
import SuspensionIcon from "../../assets/Home/FeatureListingSection/Suspension.png";
import TonIcon from "../../assets/Home/FeatureListingSection/Ton.png";
import TransmissionIcon from "../../assets/Home/FeatureListingSection/Transmission.png";
import WheelIcon from "../../assets/Home/FeatureListingSection/Wheel.png";
import ContactDrawer from "./ContactDrawer";

export default function ProductDetailSwipperCard() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const mainSwiperRef = useRef(null);
  const [thumbsSwiper, setThumbsSwiper] = React.useState(null);
  const { t } = useTranslation();

  const sampleImages = [
    {
      id: 1,
      src: truckImage,
      alt: t("productDetail.swipper.imageAlt1"),
    },
    {
      id: 2,
      src: truckImage,
      alt: t("productDetail.swipper.imageAlt2"),
    },
    {
      id: 3,
      src: truckImage,
      alt: t("productDetail.swipper.imageAlt3"),
    },
    {
      id: 4,
      src: truckImage,
      alt: t("productDetail.swipper.imageAlt4"),
    },
  ];

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
                {t("productDetail.swipper.title")}
              </Typography>
              <Typography sx={{ color: "#808080", fontWeight: 400 }}>
                De,Berlin
              </Typography>
            </Box>
            <Box sx={{ fontSize: { xs: "20px", md: "32px", fontWeight: 600 } }}>
              $89,499
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
            {sampleImages.map((image) => (
              <SwiperSlide key={image.id}>
                <img
                  loading="lazy"
                  src={image.src}
                  alt={image.alt}
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
              1024: { slidesPerView: 3, spaceBetween: 20 }, // Space for larger screens
              768: { slidesPerView: 3, spaceBetween: 15 }, // Space for tablets
              480: { slidesPerView: 2.5, spaceBetween: 9 }, // Space for smaller screens
            }}
          >
            {sampleImages.map((image, index) => (
              <SwiperSlide
                key={image.id}
                onClick={() => mainSwiperRef.current.slideTo(index)}
                style={{ cursor: "pointer" }}
              >
                <img
                  loading="lazy"
                  src={image.src}
                  alt={image.alt}
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
          }}
        >
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
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
                {t("productDetail.swipper.title")}
              </Typography>
              <Typography sx={{ color: "#808080", fontWeight: 400 }}>
                De,Berlin
              </Typography>
            </Box>
            <Box sx={{ fontSize: { xs: "20px", md: "32px", fontWeight: 600 } }}>
              $89,499
            </Box>
          </Box>

          <Typography
            sx={{
              mb: { xs: "20px", md: "36px" },
              color: "#808080",
              fontSize: { xs: "14px", md: "16px" },
            }}
          >
            Compact and efficient, the 2019 Volvo Mini Truck offers a 3,500 kg
            payload, fuel-efficient diesel engine, and advanced safety features.
            Its ergonomic cab ensures comfort, making it ideal for urban
            deliveries.
          </Typography>

          <Grid
            container
            spacing={{ xs: "20px", md: "36px" }}
            sx={{ mb: { xs: "30px", md: "36px" } }}
          >
            <Grid item xs={4} sx={{ display: "flex", alignItems: "center" }}>
              <img loading="lazy" src={CalenderIcon} alt={"calendar"} />
              <Typography
                sx={{ color: "#292D32", ml: "4px", fontSize: "12px" }}
              >
                2023/08/12
              </Typography>
            </Grid>
            <Grid item xs={4} sx={{ display: "flex", alignItems: "center" }}>
              <img loading="lazy" src={TransmissionIcon} alt={"calendar"} />
              <Typography
                sx={{ color: "#292D32", ml: "4px", fontSize: "12px" }}
              >
                Automatic
              </Typography>
            </Grid>
            <Grid item xs={4} sx={{ display: "flex", alignItems: "center" }}>
              <img loading="lazy" src={GasIcon} alt={"calendar"} />
              <Typography
                sx={{ color: "#292D32", ml: "4px", fontSize: "12px" }}
              >
                Diesel
              </Typography>
            </Grid>
            <Grid item xs={4} sx={{ display: "flex", alignItems: "center" }}>
              <img loading="lazy" src={TonIcon} alt={"calendar"} />
              <Typography
                sx={{ color: "#292D32", ml: "4px", fontSize: "12px" }}
              >
                60 Tons
              </Typography>
            </Grid>
            <Grid item xs={4} sx={{ display: "flex", alignItems: "center" }}>
              <img loading="lazy" src={WheelIcon} alt={"calendar"} />
              <Typography
                sx={{ color: "#292D32", ml: "4px", fontSize: "12px" }}
              >
                Semi Truck
              </Typography>
            </Grid>
            <Grid item xs={4} sx={{ display: "flex", alignItems: "center" }}>
              <img loading="lazy" src={SuspensionIcon} alt={"calendar"} />
              <Typography
                sx={{ color: "#292D32", ml: "4px", fontSize: "12px" }}
              >
                190,000 Km
              </Typography>
            </Grid>
            <Grid item xs={4} sx={{ display: "flex", alignItems: "center" }}>
              <img loading="lazy" src={SuspensionIcon} alt={"calendar"} />
              <Typography
                sx={{ color: "#292D32", ml: "4px", fontSize: "12px" }}
              >
                190,000 Km
              </Typography>
            </Grid>
            <Grid item xs={4} sx={{ display: "flex", alignItems: "center" }}>
              <img loading="lazy" src={SuspensionIcon} alt={"calendar"} />
              <Typography
                sx={{ color: "#292D32", ml: "4px", fontSize: "12px" }}
              >
                190,000 Km
              </Typography>
            </Grid>
            <Grid item xs={4} sx={{ display: "flex", alignItems: "center" }}>
              <img loading="lazy" src={SuspensionIcon} alt={"calendar"} />
              <Typography
                sx={{ color: "#292D32", ml: "4px", fontSize: "12px" }}
              >
                190,000 Km
              </Typography>
            </Grid>
          </Grid>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: "16px",
              width: "100%",
            }}
          >
            <Button
              fullWidth
              sx={{
                backgroundColor: "#F6F6F6",
              }}
              variant="contained"
              color="secondary"
              endIcon={<CallIcon sx={{ mt: "-3px" }} />}
            >
              {t("productDetail.swipper.viewPhoneNumber")}
            </Button>
            <Button
              fullWidth
              variant="contained"
              endIcon={<CallIcon sx={{ mt: "-3px" }} />}
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
    </Box>
  );
}
