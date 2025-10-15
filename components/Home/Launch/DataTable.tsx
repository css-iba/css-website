"use client"

import React from "react"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

type Row = Record<string, any>

export default function DataTable({ data }: { data: Row[] }) {
    if (!data || data.length === 0) {
        return (
            <div className="p-8 text-center text-lg text-gray-600">
                No registrations yet.
            </div>
        )
    }

    const columns = Object.keys(data[0])

    return (
        <div className="overflow-x-auto">
            <Table>
                <TableHeader>
                    <TableRow>
                        {columns.map((col) => (
                            <TableHead key={col} className="text-left">
                                {col.replace(/_/g, " ")}
                            </TableHead>
                        ))}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data.map((row, idx) => (
                        <TableRow key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                            {columns.map((col) => (
                                <TableCell key={col} className="align-top">
                                    {String(row[col] ?? "")}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}
