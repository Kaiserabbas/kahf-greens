import React from "react";
import { Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";

import LandscapingOverview from "./LandscapingOverview";
import LandscapeDesign from "./Design";
import LandscapePlanters from "./Planters";

const Landscaping = () => {
  return (
    <>
      <Helmet>
        <title>Landscaping Solutions | Kahf Greens</title>
      </Helmet>

      <Routes>
        {/* Overview */}
        <Route index element={<LandscapingOverview />} />

        {/* Sub pages */}
        <Route path="design" element={<LandscapeDesign />} />
        <Route path="planters" element={<LandscapePlanters />} />
      </Routes>
    </>
  );
};

export default Landscaping;
