import type { Restaurant } from "@/features/restaurants/types/restaurant.types";
import { getDistanceKm } from "@/shared/lib/utils";

interface RestaurantItemProps {
  restaurant: Restaurant;
  onSelect: () => void;
  userLocation?: { lat: number; lng: number };
}

export default function RestaurantItem({
  restaurant,
  onSelect,
  userLocation,
}: RestaurantItemProps) {
  const distance = userLocation
    ? `${getDistanceKm(userLocation, restaurant.position).toFixed(1)} km`
    : restaurant.distance;




  const handleImgError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.onerror = null;
    e.currentTarget.src = "/fallback.png";
  };
  

  return (
    <div
      className="p-4 border-b border-gray-200 hover:bg-[#F8F9FA] cursor-pointer"
      onClick={onSelect}
    >
      <div className="flex space-x-3">
        <img
          src={restaurant.imageUrl || "/fallback.png"}
          alt={`${restaurant.name} restaurant`}
          className="w-24 h-24 object-cover rounded-lg"
          onError={handleImgError}
        />
        <div className="flex-grow">
          <h3 className="font-semibold text-lg">{restaurant.name}</h3>
          <div className="flex items-center text-sm text-[#5F6368]">
            <span className="material-icons text-[#FBBC05] text-sm">star</span>
            <span className="ml-1">{restaurant.rating}</span>
            <span className="mx-1">·</span>
            <span>{restaurant.cuisine}</span>
            <span className="mx-1">·</span>
          </div>
          <div>
            <span className="inline-block bg-[#E6F4EA] text-green-800 text-xs font-medium px-2 py-0.5 rounded-full">
              A {distance} de ti
            </span>
          </div>
          <div
            className={`flex items-center text-sm ${
              restaurant.isOpen ? "text-[#34A853]" : "text-[#EA4335]"
            }`}
          >
            <span className="material-icons text-sm">schedule</span>
            <span className="ml-1">
              {restaurant.isOpen
                ? `Abierto hasta las ${restaurant.closingTime}`
                : `Cerrado hasta las ${restaurant.openingTime}`}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
