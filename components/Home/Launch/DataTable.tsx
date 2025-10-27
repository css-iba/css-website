"use client"

import React from "react"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
    TableCaption,
} from "@/components/ui/table"

type Row = {
    id: number;
    created_at: string;
    participant1Name: string;
    participant2Name: string;
    teamLeadEmail: string;
    studentYear: 'freshman' | 'sophomore' | 'junior' | 'senior' | '';
    difficulty: 'easy' | 'hard' | '';
    [key: string]: string | number | undefined;
}

export default function DataTable({ data }: { data: Row[] }) {
    if (!data || data.length === 0) {
        return (
            <div className="p-8 text-center text-lg text-gray-600">
                No registrations yet.
            </div>
        )
    }
    // derive column keys from the first row, exclude created_at
    const rawCols = Object.keys(data[0]).filter((c) => c !== 'created_at')

    // prepare display label mapping
    const labelMap: Record<string, string> = {
        id: 'ID',
        participant1Name: 'Name 1',
        participant2Name: 'Name 2',
        teamLeadEmail: 'Email',
        studentYear: 'Year',
        difficulty: 'Difficulty',
    }

    // final columns: index (generated) + remaining raw columns
    const columns = ['index', ...rawCols]

    return (
        <div className="overflow-x-auto">
            <Table>
                <TableCaption className="text-sm">
                    {data.length} registration{data.length !== 1 ? 's' : ''}
                </TableCaption>
                <TableHeader>
                    <TableRow>
                        {columns.map((col) => (
                            <TableHead key={col} className="text-left">
                                {col === 'index' ? '#' : (labelMap[col] ?? col.replace(/_/g, ' '))}
                            </TableHead>
                        ))}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data.map((row, idx) => (
                        <TableRow key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                            {columns.map((col) => {
                                // special rendering for Year and Difficulty columns
                                if (col === 'studentYear' || col === 'difficulty') {
                                    const year = String(row['studentYear'] ?? '') as string
                                    const difficulty = String(row['difficulty'] ?? '') as string

                                    // determine badge style per row rules:
                                    // - if freshman -> green badge
                                    // - else if not freshman -> red badge
                                    // - otherwise blue badge
                                    let badgeClass = 'bg-blue-100 text-blue-800'
                                    if (year === 'freshman' && difficulty === 'easy') {
                                        badgeClass = 'bg-emerald-100 text-emerald-800'
                                    } else if (year === 'sophomore' && difficulty === 'hard') {
                                        badgeClass = 'bg-rose-100 text-rose-800'
                                    }

                                    return (
                                        <TableCell key={col} className="align-top">
                                            <span className={`inline-block px-1.5 py-0.5 text-sm font-semibold ${badgeClass}`}>
                                                {String(row[col] ?? '')}
                                            </span>
                                        </TableCell>
                                    )
                                }

                                return (
                                    <TableCell key={col} className="align-top">
                                        {col === 'index' ? String(idx + 1) : String(row[col] ?? '')}
                                    </TableCell>
                                )
                            })}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}
