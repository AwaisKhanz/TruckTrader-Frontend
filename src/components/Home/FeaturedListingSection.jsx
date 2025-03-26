import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  A11y,
  Navigation,
  Pagination,
  Scrollbar,
  Mousewheel,
} from "swiper/modules";
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ListingCard from "../../components/Common/ListingCard";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { transformListingData } from "../../utils/common";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function FeaturedListingSection({ listings, loading }) {
  const { t } = useTranslation();
  return (
    <Box sx={{ background: "#EDEDED" }}>
      <Box sx={{ maxWidth: "90%", mx: "auto", mt: "40px", py: "40px" }}>
        {/* Title and Show All Button */}
        <Link to={"/filter"}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: "20px",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                color: "#212121",
                fontSize: { xs: "24px", md: "32px" },
              }}
            >
              {t("featureListings.title")}
            </Typography>
            <Button variant="contained" color="secondary">
              {t("latestListings.showAll")} <ChevronRightIcon />
            </Button>
          </Box>
        </Link>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Mousewheel]}
          autoplay={500}
          spaceBetween={20}
          mousewheel={{ forceToAxis: true }}
          slidesPerView="auto"
          breakpoints={{
            1024: { spaceBetween: 20 },
            768: { spaceBetween: 15 },
            480: { spaceBetween: 10 },
          }}
        >
          {loading
            ? Array.from(new Array(5)).map((_, index) => (
                <SwiperSlide
                  key={index}
                  style={{ width: "325px", height: "auto" }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      height: "400px",
                      bgcolor: "#f0f0f0",
                      borderRadius: "12px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        width: "90%",
                        height: "180px",
                        bgcolor: "#e0e0e0",
                        borderRadius: "8px",
                      }}
                    />
                    <Box
                      sx={{
                        width: "80%",
                        height: "20px",
                        bgcolor: "#e0e0e0",
                        borderRadius: "4px",
                        mt: 2,
                      }}
                    />
                    <Box
                      sx={{
                        width: "60%",
                        height: "20px",
                        bgcolor: "#e0e0e0",
                        borderRadius: "4px",
                        mt: 1,
                      }}
                    />
                  </Box>
                </SwiperSlide>
              ))
            : listings?.map((item) => (
                <SwiperSlide
                  key={item.id}
                  style={{ width: "325px", height: "auto" }}
                >
                  <ListingCard data={transformListingData(item)} />
                </SwiperSlide>
              ))}
        </Swiper>
      </Box>
    </Box>
  );
}
