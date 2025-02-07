export const transformListingData = (listing) => {
  return {
    id: listing.id,
    title: listing.description?.title || "No Title",
    year: listing.general?.year || "N/A",
    transmission:
      listing.powertrain?.transmission?.type?.display_value || "N/A",
    fuel:
      listing.powertrain?.engine?.energy?.type?.code?.display_value || "N/A",
    mileage: listing.condition?.odometer?.formatted || "N/A",
    price:
      listing.sales_conditions?.pricing?.asking?.in_eur?.formatted || "N/A",
    image: listing.images?.[0]?.src || "https://via.placeholder.com/300",
    location: listing.advertiser?.city || "N/A",
    make: listing.general?.make?.name || "N/A",
    model: listing.general?.model?.name || "N/A",
    type: listing.general?.type?.name || "N/A",
  };
};
