import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import PokemonDataGrid, {
  PokemansType,
} from "@/PokemonDataGrid/PokemonDataGrid";

const mockPokemans: PokemansType = [
  { id: "1", name: "Bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" },
];

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

describe("PokemonDataGrid", () => {
  it("renders the component with mock data", () => {
    render(<PokemonDataGrid pokemans={mockPokemans} />);
    const gridElement = screen.getByRole("grid");
    expect(gridElement).toBeInTheDocument();
  });
});
