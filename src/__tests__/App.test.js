import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import App from "../App";

test("renders without crashing", () => {
  render(<App />);
  const heading = screen.getByText(/select pizza toppings/i);
  expect(heading).toBeInTheDocument();
});
