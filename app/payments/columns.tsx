"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string;
  amount: number;

  email: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "UWSSM",
    header: "UWSSM"
  },
  {
    accessorKey: "USSM",
    header: "USSM"
  },
  {
    accessorKey: "RWSSM",
    header: "RWSSM"
  },
  {
    accessorKey: "RSSM",
    header: "RSSM"
  },
  {
    accessorKey: "FM",
    header: "FM"
  },
  {
    accessorKey: "RM",
    header: "RM"
  },
  {
    accessorKey: "UOP",
    header: "UOP"
  }
];
