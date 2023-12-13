"use client";
import React from "react";
import { useRouter } from "next/navigation";
// import { useNavigate } from "react-router-dom";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

interface row {
  name: string;
  url: string;
}

export interface PokemanType {
  id: string;
  name: string;
  url: string;
}

export interface PokemansType extends Array<PokemanType> {}

interface Props {
  pokemans: PokemansType;
}

const PokemonDataGrid: React.FC<Props> = ({ pokemans }: Props) => {
  // const history = useNavigate();
  const pokemonData = pokemans;
  const router = useRouter();

  const columns: GridColDef[] = [
    {
      field: "name",
      headerName: "Name",
      width: 300,
      headerClassName: "super-app-theme--header",
    },
  ];

  const datagridClasses = {
    border: 2,
    borderColor: "primary.light",
    backgroundColor: "rgba(255, 7, 0, 0.55)",
    "& .MuiDataGrid-cell:hover": {
      color: "primary.main",
    },
    ".MuiDataGrid-columnSeparator": {
      display: "none",
    },
    "&.MuiDataGrid-root": {
      border: "none",
    },
  };

  const handleRowClick = (params: { row: row }) => {
    const pokemonUrl = params.row.url;
    const pokemonId = parseInt(pokemonUrl.split("/").slice(-2, -1)[0], 10);
    router.push(`/PokemonDetail/${pokemonId}`);
  };

  const rows = pokemonData.map((row: PokemanType, index: number) => ({
    id: index + 1,
    name: row.name.toUpperCase(),
    url: row.url,
  }));

  return (
    <div className="datagrid">
      <DataGrid
        rows={rows}
        columns={columns}
        sx={...datagridClasses}
        autoPageSize
        onRowClick={handleRowClick}
      />
    </div>
  );
};

export default PokemonDataGrid;
