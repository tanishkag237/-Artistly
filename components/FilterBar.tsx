import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

interface Filters {
  category: string;
  location: string;
  feeRange: string;
}

interface FilterBarProps {
  filters: Filters;
  onChange: (field: keyof Filters, value: string) => void;
}

export default function FilterBar({ filters, onChange }: FilterBarProps) {
  return (
    <div className="flex p-2 flex-wrap gap-4 mb-6">
      {/* Category Filter */}
      <Select value={filters.category} onValueChange={(value) => onChange("category", value)}>
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="All Categories" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Categories</SelectItem>
          <SelectItem value="Singer">Singer</SelectItem>
          <SelectItem value="Dancer">Dancer</SelectItem>
          <SelectItem value="DJ">DJ</SelectItem>
          <SelectItem value="Speaker">Speaker</SelectItem>
          <SelectItem value="Others">Others</SelectItem>
        </SelectContent>
      </Select>

      {/* Location Filter */}
      <Select value={filters.location} onValueChange={(value) => onChange("location", value)}>
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="All Locations" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Locations</SelectItem>
          <SelectItem value="Delhi">Delhi</SelectItem>
          <SelectItem value="Mumbai">Mumbai</SelectItem>
          <SelectItem value="Bangalore">Bangalore</SelectItem>
          <SelectItem value="Kolkata">Kolkata</SelectItem>
          <SelectItem value="Other">Other</SelectItem>
        </SelectContent>
      </Select>

      {/* Fee Range Filter */}
      <Select value={filters.feeRange} onValueChange={(value) => onChange("feeRange", value)}>
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="All Price Ranges" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Price Ranges</SelectItem>
          <SelectItem value="₹10,000 - ₹30,000">₹10,000 - ₹30,000</SelectItem>
          <SelectItem value="₹20,000 - ₹50,000">₹20,000 - ₹50,000</SelectItem>
          <SelectItem value="₹30,000 - ₹60,000">₹30,000 - ₹60,000</SelectItem>
          <SelectItem value="₹50,000 - ₹1,00,000">₹50,000 - ₹1,00,000</SelectItem>
          <SelectItem value="Negotiable">Negotiable</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
