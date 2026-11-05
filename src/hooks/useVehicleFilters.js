import { useCallback, useMemo, useState } from "react";
import { priceRanges } from "../data/vehicles";

const initialFilters = {
  search: "",
  type: "all",
  brand: "All brands",
  price: "all",
  sort: "featured",
};

/** Search, category, brand, price and sort state for the marketplace. */
export const useVehicleFilters = (vehicles, initial = {}) => {
  const [filters, setFilters] = useState({ ...initialFilters, ...initial });

  const updateFilter = useCallback((key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  }, []);

  const resetFilters = useCallback(() => {
    setFilters(initialFilters);
  }, []);

  const results = useMemo(() => {
    const query = filters.search.trim().toLowerCase();
    const range = priceRanges.find((item) => item.id === filters.price) ?? priceRanges[0];

    const filtered = vehicles.filter((vehicle) => {
      const matchesType = filters.type === "all" || vehicle.type === filters.type;
      const matchesBrand = filters.brand === "All brands" || vehicle.brand === filters.brand;
      const matchesPrice = vehicle.price >= range.min && vehicle.price < range.max;
      const haystack = `${vehicle.brand} ${vehicle.model} ${vehicle.year} ${vehicle.type} ${vehicle.bodyType} ${vehicle.color}`.toLowerCase();
      const matchesSearch = !query || haystack.includes(query);
      return matchesType && matchesBrand && matchesPrice && matchesSearch;
    });

    switch (filters.sort) {
      case "price-asc":
        return [...filtered].sort((a, b) => a.price - b.price);
      case "price-desc":
        return [...filtered].sort((a, b) => b.price - a.price);
      case "year-desc":
        return [...filtered].sort((a, b) => b.year - a.year);
      case "mileage-asc":
        return [...filtered].sort((a, b) => a.mileage - b.mileage);
      default:
        return [...filtered].sort((a, b) => Number(b.featured) - Number(a.featured));
    }
  }, [vehicles, filters]);

  const activeCount = useMemo(() => {
    let count = 0;
    if (filters.search.trim()) count += 1;
    if (filters.type !== "all") count += 1;
    if (filters.brand !== "All brands") count += 1;
    if (filters.price !== "all") count += 1;
    if (filters.sort !== "featured") count += 1;
    return count;
  }, [filters]);

  return { filters, updateFilter, resetFilters, results, activeCount };
};

export default useVehicleFilters;
