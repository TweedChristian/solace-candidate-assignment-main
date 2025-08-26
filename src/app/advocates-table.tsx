"use client";
import { Badge } from "@/components/ui/badge";
import { DataTable } from "@/components/ui/data-table";
import { Input } from "@/components/ui/input";
import { Advocate } from "@/lib/contract";
import { ColumnDef } from "@tanstack/react-table";
import { useState } from "react";

const columns: ColumnDef<Advocate>[] = [
  {
    accessorKey: "firstName",
    header: "First Name",
  },
  {
    accessorKey: "lastName",
    header: "Last Name",
  },
  {
    accessorKey: "city",
    header: "City",
  },
  {
    accessorKey: "degree",
    header: "Degree",
  },
  {
    accessorFn: (row) =>
      row.specialties
        .map((specialty) => specialty.specialtyTitle)
        .sort((a, b) => a.localeCompare(b))
        .join(", "),
    header: "Specialties",
    id: "specialties",
    cell: (props) => {
      return (
        <div className="flex flex-row flex-wrap gap-2">
          {props.cell.row.original.specialties
            .sort((a, b) => a.specialtyTitle.localeCompare(b.specialtyTitle))
            .map((specialty) => (
              <Badge key={specialty.id}>{specialty.specialtyTitle}</Badge>
            ))}
        </div>
      );
    },
  },
  {
    accessorKey: "yearsOfExperience",
    header: "Years of Experience",
  },
  {
    accessorKey: "phoneNumber",
    header: "Phone Number",
  },
];

export default function AdvocatesTable({
  advocates,
  searchTerm,
  setSearchTerm,
}: Readonly<{
  advocates: Advocate[];
  searchTerm: string;
  setSearchTerm: (s: string) => void;
}>) {
  return (
    <>
      <div className="flex justify-end">
        <Input
          placeholder="Filter Advocates"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mb-2"
        />
      </div>

      <DataTable
        columns={columns}
        data={advocates}
        globalFilter={searchTerm}
      ></DataTable>
    </>
  );
}
