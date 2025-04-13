import React from "react";

const DineCard = ({ restData }) => {
  return (
    <div className="max-w-sm flex-none mb-5">
      <a target="_blank" href={restData.cta.link}>
        <div className="relative">
          <img
            className="w-80 h-50 object-cover rounded-lg"
            src={
              `https://media-assets.swiggy.com/swiggy/image/upload/` +
              restData?.info?.mediaFiles[0]?.url
            }
            alt={restData?.info?.name}
          />
          <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-black/70 to-transparent rounded-b-lg"></div>
          <div className="absolute bottom-4 w-full flex justify-between px-4 text-white">
            <p className="text-lg font-semibold">{restData.info.name}</p>
            <p className="text-sm">{restData.info.rating.value} ⭐</p>
          </div>
        </div>
        <div className="h-14 w-full p-2 bg-white drop-shadow-xl rounded-2xl">
          <div className="flex justify-between">
            <p>{restData.info.cuisines[0]}</p>
            <p>{restData.info.costForTwo}</p>
          </div>
          <div className="flex justify-between">
            <p>{restData.info.locationInfo.formattedAddress}</p>
            <p>{restData.info.locationInfo.distanceString}</p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default DineCard;
