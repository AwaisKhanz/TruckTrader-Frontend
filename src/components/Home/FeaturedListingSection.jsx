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
import truckImage from "../../assets/Home/FeatureListingSection/truck.png";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const sampleData = [
  {
    id: 1,
    title: "Volvo Mini Truck 2019",
    year: "2019",
    transmission: "Manual",
    fuel: "Diesel",
    weight: "50 Tons",
    mileage: "250,00KM",
    type: "Box Truck",
    location: "De,Berlin",
    price: "$96,340",
    image: truckImage,
  },
  {
    id: 2,
    title: "Volvo Mini Truck 2019",
    year: "2019",
    transmission: "Manual",
    fuel: "Diesel",
    weight: "50 Tons",
    mileage: "250,00KM",
    type: "Box Truck",
    location: "De,Berlin",
    price: "$96,340",
    image: truckImage,
  },
  {
    id: 3,
    title: "Volvo Mini Truck 2019",
    year: "2019",
    transmission: "Manual",
    fuel: "Diesel",
    weight: "50 Tons",
    mileage: "250,00KM",
    type: "Box Truck",
    location: "De,Berlin",
    price: "$96,340",
    image: truckImage,
  },
  {
    id: 4,
    title: "Volvo Mini Truck 2019",
    year: "2019",
    transmission: "Manual",
    fuel: "Diesel",
    weight: "50 Tons",
    mileage: "250,00KM",
    type: "Box Truck",
    location: "De,Berlin",
    price: "$96,340",
    image: truckImage,
  },
  {
    id: 5,
    title: "Volvo Mini Truck 2019",
    year: "2019",
    transmission: "Manual",
    fuel: "Diesel",
    weight: "50 Tons",
    mileage: "250,00KM",
    type: "Box Truck",
    location: "De,Berlin",
    price: "$96,340",
    image: truckImage,
  },
  {
    id: 6,
    title: "Volvo Mini Truck 2019",
    year: "2019",
    transmission: "Manual",
    fuel: "Diesel",
    weight: "50 Tons",
    mileage: "250,00KM",
    type: "Box Truck",
    location: "De,Berlin",
    price: "$96,340",
    image: truckImage,
  },
  {
    id: 8,
    title: "Volvo Mini Truck 2019",
    year: "2019",
    transmission: "Manual",
    fuel: "Diesel",
    weight: "50 Tons",
    mileage: "250,00KM",
    type: "Box Truck",
    location: "De,Berlin",
    price: "$96,340",
    image: truckImage,
  },
];

export default function FeaturedListingSection() {
  return (
    <Box sx={{ background: "#EDEDED" }}>
      <Box sx={{ maxWidth: "90%", mx: "auto", mt: "40px", py: "40px" }}>
        {/* Title and Show All Button */}
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
            Featured listing
          </Typography>
          <Button variant="contained" color="secondary">
            Show All <ChevronRightIcon />
          </Button>
        </Box>

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
          {sampleData.map((item) => (
            <SwiperSlide key={item.id} style={{ width: "325px" }}>
              <ListingCard data={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
}
