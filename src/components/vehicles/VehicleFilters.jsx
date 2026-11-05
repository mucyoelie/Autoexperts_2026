import { Search, SlidersHorizontal, X } from "lucide-react";
import { brands, priceRanges, vehicleTypes } from "../../data/vehicles";
import { cn } from "../../utils/cn";
import { Select, TextInput } from "../common/FormField";

const sortOptions = [
  { id: "featured", label: "Featured first" },
  { id: "price-asc", label: "Price: low to high" },
  { id: "price-desc", label: "Price: high to low" },
  { id: "year-desc", label: "Newest year" },
  { id: "mileage-asc", label: "Lowest mileage" },
];

const counts = (vehicles) => ({
  all: vehicles.length,
  electric: vehicles.filter((vehicle) => vehicle.type === "electric").length,
  hybrid: vehicles.filter((vehicle) => vehicle.type === "hybrid").length,
});

const VehicleFilters = ({ vehicles, filters, updateFilter, resetFilters, activeCount, resultCount }) => {
  const vehicleCounts = counts(vehicles);

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Vehicle type">
          {vehicleTypes.map((type) => (
            <button
              key={type.id}
              type="button"
              role="tab"
              aria-selected={filters.type === type.id}
              onClick={() => updateFilter("type", type.id)}
              className={cn(
                "inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition-all",
                filters.type === type.id
                  ? "bg-navy text-white shadow-card"
                  : "border border-navy-100 bg-white text-navy-600 hover:border-electric hover:text-electric",
              )}
            >
              {type.label}
              <span
                className={cn(
                  "rounded-full px-2 py-0.5 text-[0.65rem] font-bold",
                  filters.type === type.id ? "bg-white/15 text-white" : "bg-mist text-navy-500",
                )}
              >
                {vehicleCounts[type.id]}
              </span>
            </button>
          ))}
        </div>

        <p className="text-sm text-navy-500" aria-live="polite">
          <span className="font-semibold text-navy">{resultCount}</span> vehicle{resultCount === 1 ? "" : "s"} found
        </p>
      </div>

      <div className="rounded-2xl border border-navy-100 bg-white p-4 shadow-card sm:p-5">
        <div className="flex items-center justify-between gap-3 sm:hidden">
          <p className="inline-flex items-center gap-2 text-sm font-semibold text-navy">
            <SlidersHorizontal className="h-4 w-4 text-electric" aria-hidden="true" />
            Search &amp; filters
            {activeCount > 0 ? (
              <span className="rounded-full bg-electric px-2 py-0.5 text-[0.65rem] font-bold text-white">
                {activeCount}
              </span>
            ) : null}
          </p>
          {activeCount > 0 ? (
            <button
              type="button"
              onClick={resetFilters}
              className="inline-flex items-center gap-1 text-xs font-semibold text-navy-500 hover:text-electric"
            >
              <X className="h-3.5 w-3.5" aria-hidden="true" />
              Clear
            </button>
          ) : null}
        </div>

        <div className="mt-4 grid gap-3 sm:mt-0 sm:grid-cols-2 lg:grid-cols-12">
          <div className="relative lg:col-span-4">
            <label htmlFor="vehicle-search" className="sr-only">
              Search vehicles by brand, model or colour
            </label>
            <Search
              className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-navy-300"
              aria-hidden="true"
            />
            <TextInput
              id="vehicle-search"
              name="search"
              type="search"
              placeholder="Search brand, model, colour…"
              value={filters.search}
              onChange={(event) => updateFilter("search", event.target.value)}
              className="pl-10"
            />
          </div>

          <div className="lg:col-span-2">
            <label htmlFor="filter-brand" className="sr-only">
              Filter by brand
            </label>
            <Select
              id="filter-brand"
              name="brand"
              value={filters.brand}
              onChange={(event) => updateFilter("brand", event.target.value)}
            >
              {brands.map((brand) => (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              ))}
            </Select>
          </div>

          <div className="lg:col-span-2">
            <label htmlFor="filter-price" className="sr-only">
              Filter by price
            </label>
            <Select
              id="filter-price"
              name="price"
              value={filters.price}
              onChange={(event) => updateFilter("price", event.target.value)}
            >
              {priceRanges.map((range) => (
                <option key={range.id} value={range.id}>
                  {range.label}
                </option>
              ))}
            </Select>
          </div>

          <div className="lg:col-span-2">
            <label htmlFor="filter-sort" className="sr-only">
              Sort results
            </label>
            <Select
              id="filter-sort"
              name="sort"
              value={filters.sort}
              onChange={(event) => updateFilter("sort", event.target.value)}
            >
              {sortOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.label}
                </option>
              ))}
            </Select>
          </div>

          <div className="lg:col-span-2">
            <button
              type="button"
              onClick={resetFilters}
              disabled={activeCount === 0}
              className="hidden h-full w-full items-center justify-center gap-2 rounded-xl border border-navy-200 px-4 py-3 text-sm font-semibold text-navy transition hover:border-electric hover:text-electric disabled:cursor-not-allowed disabled:opacity-40 lg:inline-flex"
            >
              <X className="h-4 w-4" aria-hidden="true" />
              Reset
              {activeCount > 0 ? <span className="text-xs text-electric">({activeCount})</span> : null}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleFilters;
