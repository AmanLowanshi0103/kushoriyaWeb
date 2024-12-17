import React from "react";

const OfficeLocations = () => {
  const locations = [
    {
      country: "United State",
      address: "9765 Keystone Court, Clarence, NY 14031, USA",
      phone: "+1 (650) 488-7911",
    },
    {
      country: "Canada",
      address: "1100 Caven St., Suite PH11, Mississauga, ON L5G 4N3 Canada",
      phone: "+1 (416) 726-4662, +1 (650) 488-7911",
    },
    {
      country: "Brazil",
      address:
        "Bispo César da Corso Filho, 1266, San Carlos, São Paulo, Boa Vista, Brazil, 13575-331",
    },
    {
      country: "South Africa",
      address: "12 IbisWay, Sunnydale, Fish Hoek 7985, Western Cape, South Africa",
      phone: "+27 824507091",
    },
    {
      country: "UAE",
      address:
        "118, JLT Cluster V, Al Sarayat St, opposite Damas jewellery, Dubai, United Arab Emirates, Dubai 91929",
    },
    {
      country: "Italy",
      address: "Viale dell'Esperanto, 71, Formia, Italy, Lazio IT",
    },
    {
      country: "Australia",
      address:
        "Unit 14G, 3 Darling Point Road, Darling Point, Sydney, NSW, Australia, 2027",
    },
  ];

  return (
    <div className="p-6 bg-white">
      <h2 className="text-center text-3xl font-bold text-orange-500 mb-6">
        We are all over the world
      </h2>

      {/* Flexbox Container */}
      <div className="flex flex-wrap justify-center gap-2">
        {locations.map((location, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 w-48 rounded-lg"
          >
            <h3 className="text-xl font-bold mb-2 text-black">
              📍 {location.country}
            </h3>
            <p className="text-gray-600 text-center mb-2">{location.address}</p>
            {location.phone && (
              <p className="text-gray-500 font-semibold">{location.phone}</p>
            )}
          </div>
        ))}
      </div>

      {/* Fixed Contact Icons */}
      <div className="fixed bottom-10 right-5 flex flex-col space-y-2">
        <a
          href="#"
          className="bg-red-500 text-white p-3 rounded-full shadow-lg hover:bg-red-600"
        >
          📞
        </a>
        <a
          href="#"
          className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600"
        >
          ✅
        </a>
        <a
          href="#"
          className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600"
        >
          💬
        </a>
        <a
          href="#"
          className="bg-orange-500 text-white p-3 rounded-full shadow-lg hover:bg-orange-600"
        >
          📧
        </a>
      </div>
    </div>
  );
};

export default OfficeLocations;
