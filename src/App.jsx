import Checklist from "./components/Checklist" // Import Checklist component
import Header from "./components/Header";

export const App = () => {
  return (
    <div>
      <>
      <Header /> {/* Renders the main Header */ }
      <Checklist /> {/* Render the Checklist component */}
      </>
    </div>
  );
};
