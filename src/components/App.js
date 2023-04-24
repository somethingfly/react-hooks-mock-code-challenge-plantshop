import React from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

// Deliverables say "I can mark a plant as "sold out"."
// Does not say if persisted or not.
// The database does not have a key for stock, e.g. "stock": true
// It makes no sense to mark as "sold out" and then have that disappear after session.
// But the Deliverables page states the Request Object, which shows no key for stock.
// Will code as no need for persistence in database.
// Further, no mention if this in-stock needs to persist between renders of the component.
// I.e. Persist at least as state of "plants" in this PlantCard component, if not by persisting on the database.
// And the demo gif in Deliverables doesn't show this either.
// The demo gif shows the search, which effects renders, before the toggling of stock and adding a plant
// if the demo gif were to then re-search, I could see if stock is meant to stay between renders.
// Since again stock has no sensible functionality, I have no clue what would be needed.
// Doing easiest: keeping state on the component itself.
// How to reproduce the side effect of not persisting in database nor "plants" state:
// Click all plants to "Out of Stock"
// type "z" in Search Plants
// only ZZ Plant shows, and still shows as "Out of Stock"
// delete "z" in Search Plants
// all non "ZZ Plant" plants rerender, and with default stock of "In Stock".
// If this was a real client, I would want clarification on persistence in database or between renders.

function App() {
  return (
    <div className="app">
      <Header />
      <PlantPage />
    </div>
  );
}

export default App;
