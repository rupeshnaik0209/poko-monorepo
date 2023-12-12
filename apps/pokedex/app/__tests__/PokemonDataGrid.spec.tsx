import React from "react";
import renderer from "react-test-renderer";
import PokemonDataGrid from "../PokemonDataGrid/PokemonDataGrid";

it("renders correctly", () => {
  const tree = renderer.create(<PokemonDataGrid />).toJSON();
  expect(tree).toMatchSnapshot();
});
