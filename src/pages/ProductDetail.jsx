import React, { useState, useEffect } from "react";
import { Box, Grid, Typography, Divider } from "@mui/material";
import { useParams } from "react-router-dom";
import ProductDetailHeader from "../components/ProductDetail/ProductDetailHeader";
import ProductDetailSwipperCard from "../components/ProductDetail/ProductDetailSwipperCard";
import api from "../services/api";
import Loading from "../components/Common/Loading";
import Error from "../components/Common/Error";
import { useTranslation } from "react-i18next";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { t, i18n } = useTranslation();

  useEffect(() => {
    setLoading(true);
    const fetchProductDetails = async () => {
      try {
        const response = await api.get(`/vehicle?_fieldset=details&id=${id}`, {
          params: {
            _locale: i18n.language === "en" ? "en_GB" : "nl_NL",
          },
        });
        const vehicleData = response.data.vehicle;

        // Destructure necessary data
        const {
          general,
          description,
          images,
          advertiser,
          condition,
          sections,
          sales_conditions,
        } = vehicleData;

        const generalInfo = sections.find((s) => s.key === "general");
        const technicalInfo = sections.find((s) => s.key === "technical");
        const emissionHistory = sections.find(
          (s) => s.key === "maintenance_history_condition"
        );
        const environmentConsumption = sections.find(
          (s) => s.key === "environment_and_consumption"
        );
        const advertiserInfo = sections.find((s) => s.key === "advertiser");

        // Extract location, amount, and product name
        const location = advertiser?.city || "Unknown Location";
        const amount =
          sales_conditions?.pricing?.asking?.in_eur?.formatted ||
          "Price on request";
        const productName = description?.title || "No Title";

        // Extract additional vehicle details for the grid
        const vehicleYear = general?.year || "N/A";
        const transmission =
          technicalInfo?.subsections?.[0]?.fields?.find(
            (f) => f.key === "powertrain.transmission.formatted"
          )?.display_value || "N/A";
        const fuelType =
          technicalInfo?.subsections?.[0]?.fields?.find(
            (f) => f.key === "powertrain.engine.energy.type.code"
          )?.display_value || "N/A";
        const tonnage =
          sections
            .find((s) => s.key === "measures_and_weights")
            ?.subsections?.[0]?.fields?.find((f) => f.key === "weights.payload")
            ?.display_value || "N/A";
        const vehicleType = general?.type?.name || "N/A";
        const make = general?.make?.name || "N/A";
        const model = general?.model?.name || "N/A";
        const odometerReading = condition?.odometer?.formatted || "N/A";

        setProduct({
          title: productName,
          images: images || [],
          generalInfo: generalInfo || {},
          technicalInfo: technicalInfo || {},
          emissionHistory: emissionHistory || {},
          environmentConsumption: environmentConsumption || {},
          advertiser: advertiserInfo || {},
          condition: odometerReading,
          sections,
          location,
          amount,
          vehicleYear,
          transmission,
          fuelType,
          tonnage,
          vehicleType,
          make,
          model,
        });
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [id, t]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error message={error || "Error"} />;
  }

  return (
    <Box>
      <ProductDetailHeader id={id} product={product} />

      {/* Always Visible Cards */}
      <ProductDetailSwipperCard
        images={product.images}
        title={product.title}
        location={product.location}
        amount={product.amount}
        vehicleYear={product.vehicleYear}
        transmission={product.transmission}
        fuelType={product.fuelType}
        tonnage={product.tonnage}
        vehicleType={product.vehicleType}
        odometerReading={product.condition}
      />

      {/* Dynamic Section Display */}
      <Box sx={{ mt: 4 }}>
        <Box
          sx={{
            maxWidth: "90%",
            mx: "auto",
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
          }}
        >
          {product?.sections?.map((section) => {
            if (section.subsections?.length > 0) {
              return (
                <Box
                  key={section.key}
                  sx={{
                    flex: "1 1 calc(50% - 10px)", // 2 per row on desktop
                    minWidth: "100%", // 1 per row on mobile
                    backgroundColor: "#FFFFFF",
                    borderRadius: "20px",
                    padding: { xs: "26px", md: "36px" },
                    height: "auto",
                    "@media (min-width: 600px)": {
                      minWidth: "calc(50% - 10px)",
                    }, // 2 per row on medium screens
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      color: "#BD0000",
                      mb: "16px",
                      fontSize: { xs: "20px", md: "24px" },
                    }}
                  >
                    {section.title}
                  </Typography>
                  <Divider sx={{ mb: "28px" }} />
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                    }}
                  >
                    {section.subsections.map((subsection) => (
                      <Box key={subsection.key}>
                        {/* Render fields if they exist */}
                        {subsection.fields
                          ?.filter((field) => field.display_value)
                          .map((field) => (
                            <Box
                              key={field.key}
                              sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                borderRadius: "5px",
                              }}
                            >
                              <Typography
                                sx={{ fontWeight: 600, color: "#555" }}
                              >
                                {field.label}:
                              </Typography>
                              <Typography
                                sx={{ textAlign: "right", fontWeight: 500 }}
                              >
                                {field.display_value}
                              </Typography>
                            </Box>
                          ))}

                        {/* Render features if they exist */}
                        {subsection.features?.map((feature) => (
                          <Box
                            key={feature.key}
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              borderRadius: "5px",
                            }}
                          >
                            <Typography sx={{ fontWeight: 600, color: "#555" }}>
                              {feature.label}:
                            </Typography>
                            <Typography
                              sx={{ textAlign: "right", fontWeight: 500 }}
                            >
                              {/* If there's a display_value, show it; otherwise, just show the label */}
                              {feature.display_value || "Yes"}
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                    ))}
                  </Box>
                </Box>
              );
            }
            return null;
          })}
        </Box>
      </Box>
    </Box>
  );
}
