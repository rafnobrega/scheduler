import React from "react";
import { render, cleanup } from "@testing-library/react";
import Appointment from "components/Appointment";


afterEach(cleanup);

// FIRST TEST:
describe("Appointment", () => {
  it("renders without crashing", () => {
    render(<Appointment />);
  });

});
