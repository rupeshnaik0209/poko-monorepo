"use client";
import React from "react";
// import { useNavigate } from "react-router-dom";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

interface Pokeman {
  id: string;
  name: string;
}

interface Pokemans extends Array<Pokeman> {}

interface Props {
  pokemans: Pokemans;
}

const PokemonDataGrid: React.FC<Props> = ({ pokemans }) => {
  // const history = useNavigate();
  const pokemonData = pokemans;

  const columns: GridColDef[] = [
    { field: "name", headerName: "Name", width: 150 },
  ];

  const handleRowClick = (params: any) => {
    const pokemonUrl = params.row.url;
    const pokemonId = parseInt(pokemonUrl.split("/").slice(-2, -1)[0], 10);
    // history(`/pokemon/${pokemonId}`);
  };

  const rows = pokemonData.map((row: any, index: any) => ({
    id: index + 1,
    name: row.name.toUpperCase(),
    url: row.url,
  }));

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        autoPageSize
        onRowClick={handleRowClick}
      />
    </div>
  );
};

export default PokemonDataGrid;
