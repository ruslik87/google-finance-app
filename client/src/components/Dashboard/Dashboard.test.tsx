import { render } from "@testing-library/react";
import { Dashboard } from "./Dashboard";
import { Provider } from "react-redux";
import store from "../../redux/store";

test("renders SearchInput and PersonalTickersList when isHasTickers is true", () => {
  const { getByTestId } = render(
    <Provider store={store}>
      <Dashboard isHasTickers={true} />
    </Provider>
  );

  expect(getByTestId("search-input")).toBeInTheDocument();
  expect(getByTestId("personal-tickers-list")).toBeInTheDocument();
});

test("displays correct message when isHasTickers is false", () => {
  const { getByText } = render(
    <Provider store={store}>
      <Dashboard isHasTickers={false} />
    </Provider>
  );

  expect(
    getByText("Select a ticker to add it to the dashboard...")
  ).toBeInTheDocument();
});
