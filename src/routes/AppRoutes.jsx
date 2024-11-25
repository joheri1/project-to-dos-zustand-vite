import { Route } from "react-router-dom";
import Checklist from "../components/checklist/Checklist";
import PageNotFound from "./components/pages/PageNotFound";

export const appRoutes = (
  <>
    {/* Route for the Checklist page */}
    <Route path="/" element={<Checklist />} />

    {/* Fallback for unmatched paths */}
    <Route path="*" element={<PageNotFound />} />
  </>
);

export default appRoutes;