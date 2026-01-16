import React from "react";
import { Fan, Sun, Layers } from "lucide-react";
import AgricultureSubPageTemplate from "../../components/AgricultureSubPageTemplate";

import coolingPad1 from "../../assets/Agriculture/greenhouses/Cooling Pad 1.jpg";
import coolingPad2 from "../../assets/Agriculture/greenhouses/Cooling Pad 2.jpg";
import shadeNet1 from "../../assets/Agriculture/greenhouses/Shade Net 1.jpg";
import shadeNet2 from "../../assets/Agriculture/greenhouses/Shade Net 2.jpg";
import groundCover1 from "../../assets/Agriculture/greenhouses/Ground Cover 1.jpg";
import groundCover2 from "../../assets/Agriculture/greenhouses/Ground Cover 2.jpg";

const GreenHouses = () => {
  const categories = [
    {
      title: "Cooling Pads",
      icon: Fan,
      description: "Evaporative cooling systems for temperature control in greenhouses.",
      products: [
        {
          name: "Cellulose Cooling Pads",
          desc: "High-efficiency cellulose pads for evaporative cooling.",
          images: [coolingPad1, coolingPad2],
        },
      ],
    },
    {
      title: "Shade Nets",
      icon: Sun,
      description: "Protective netting to reduce heat and UV exposure.",
      products: [
        {
          name: "UV Shade Nets",
          desc: "UV-resistant nets for plant protection.",
          images: [shadeNet1, shadeNet2],
        },
      ],
    },
    {
      title: "Ground Covers",
      icon: Layers,
      description: "Mulching materials to protect soil and retain moisture.",
      products: [
        {
          name: "Plastic Ground Covers",
          desc: "Durable plastic sheets for weed control and moisture retention.",
          images: [groundCover1, groundCover2],
        },
      ],
    },
  ];

  return (
    <AgricultureSubPageTemplate
      title="Green Houses"
      description="Essential equipment for maintaining optimal greenhouse environments."
      categories={categories}
      helmetTitle="Green Houses | Agriculture | Kahf Greens"
    />
  );
};

export default GreenHouses;
