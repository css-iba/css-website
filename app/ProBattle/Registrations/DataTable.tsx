'use client'

import React, { useState, useMemo, useEffect } from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
    TableCaption,
} from '@/components/ui/table'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Copy, Search, RefreshCw, Users, User, ChevronDown } from 'lucide-react'
import { getParticipantRegistrations, getAttendeeRegistrations } from './api'

type AttendeeRow = {
    id: string;
    created_at: string;
    name: string;
    email: string;
    phone_number: string;
    cnic: string;
    institute_name: string;
    reference_number: string;
    brand_ambassador_code?: string;
}

type ParticipantRow = {
    id: string;
    created_at: string;
    team_lead_email: string;
    module_name: string;
    participant1_name: string;
    participant1_phone: string;
    participant1_cnic: string;
    participant2_name?: string;
    participant2_phone?: string;
    participant2_cnic?: string;
    participant3_name?: string;
    participant3_phone?: string;
    participant3_cnic?: string;
    participant4_name?: string;
    participant4_phone?: string;
    participant4_cnic?: string;
    institute_name: string;
    reference_number: string;
    brand_ambassador_code?: string;
}

type Row = AttendeeRow | ParticipantRow

interface RegistrationData {
    attendees: AttendeeRow[]
    participants: ParticipantRow[]
}

const ATTENDEE_LABEL_MAP: Record<string, string> = {
    id: 'ID',
    name: 'Name',
    email: 'Email',
    phone_number: 'Phone',
    cnic: 'CNIC',
    institute_name: 'Institute',
    reference_number: 'Reference #',
    brand_ambassador_code: 'Brand Ambassador Code',
}

const PARTICIPANT_LABEL_MAP: Record<string, string> = {
    id: 'ID',
    team_lead_email: 'Team Lead Email',
    module_name: 'Module',
    participant1_name: 'P1 Name',
    participant1_phone: 'P1 Phone',
    participant1_cnic: 'P1 CNIC',
    participant2_name: 'P2 Name',
    participant2_phone: 'P2 Phone',
    participant2_cnic: 'P2 CNIC',
    participant3_name: 'P3 Name',
    participant3_phone: 'P3 Phone',
    participant3_cnic: 'P3 CNIC',
    participant4_name: 'P4 Name',
    participant4_phone: 'P4 Phone',
    participant4_cnic: 'P4 CNIC',
    institute_name: 'Institute',
    reference_number: 'Reference #',
    brand_ambassador_code: 'Brand Ambassador Code',
}

// Module color mapping - light pastel colors for row backgrounds
// cspell:ignore Escapistan
const MODULE_COLORS: Record<string, string> = {
    'Web Development': 'bg-blue-50',
    'Business Intelligence': 'bg-amber-50',
    'Natural Language Processing': 'bg-purple-50',
    'Machine Learning': 'bg-emerald-50',
    'UI/UX Design': 'bg-pink-50',
    'Database Design': 'bg-cyan-50',
    'Capture The Flag': 'bg-red-50',
    'Speed Debugging': 'bg-orange-50',
    'Competitive Programming': 'bg-lime-50',
    'Maze Following Robot': 'bg-teal-50',
    'Robot War Light Weight': 'bg-green-50',
    'Robot Soccer': 'bg-violet-50',
    'Line Following Robot': 'bg-fuchsia-50',
    'Vibe Coding': 'bg-rose-50',
    'Escapistan': 'bg-sky-50',
    'Escapistan (Solo)': 'bg-indigo-50',
    'Tech Tank': 'bg-slate-100',
    'Competitive Programming (High School)': 'bg-yellow-50',
    'Speed Debugging (High School)': 'bg-stone-100',
    'Innovate Lab': 'bg-zinc-100',
    'Cipher': 'bg-neutral-100',
}

const getModuleRowColor = (row: ParticipantRow): string => {
    const moduleName = row.module_name
    return MODULE_COLORS[moduleName] || 'bg-gray-50'
}

export default function RegistrationDataTable() {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState<RegistrationData>({ attendees: [], participants: [] })
    const [activeTab, setActiveTab] = useState<'attendee' | 'participant'>('attendee')
    const [searchColumn, setSearchColumn] = useState<string>('')
    const [searchValue, setSearchValue] = useState<string>('')
    const [copiedId, setCopiedId] = useState<string | null>(null)

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        setLoading(true)
        const [attendeesRes, participantsRes] = await Promise.all([
            getAttendeeRegistrations(),
            getParticipantRegistrations(),
        ])
        setData({
            attendees: attendeesRes.data as AttendeeRow[],
            participants: participantsRes.data as ParticipantRow[],
        })
        setLoading(false)
    }

    const currentData = activeTab === 'attendee' ? data.attendees : data.participants
    const labelMap = activeTab === 'attendee' ? ATTENDEE_LABEL_MAP : PARTICIPANT_LABEL_MAP

    // Get columns - exclude created_at and id
    const rawColumns = useMemo(() => {
        if (currentData.length === 0) return []
        return Object.keys(currentData[0]).filter((c) => c !== 'created_at' && c !== 'id')
    }, [currentData, activeTab])

    // Set default search column to first column
    useEffect(() => {
        if (rawColumns.length > 0 && !searchColumn) {
            setSearchColumn(rawColumns[0])
        }
    }, [rawColumns, searchColumn])

    const columns = ['index', ...rawColumns]

    // Filter data based on search
    const filteredData = useMemo(() => {
        if (!searchValue || !searchColumn) return currentData
        return currentData.filter((row) => {
            const cellValue = String(row[searchColumn as keyof typeof row] ?? '')
            return cellValue.toLowerCase().includes(searchValue.toLowerCase())
        })
    }, [currentData, searchColumn, searchValue])

    if (loading) {
        return (
            <div className="p-8 text-center text-lg text-gray-600">
                Loading registrations...
            </div>
        )
    }

    const handleCopy = (email: string, rowId: string) => {
        navigator.clipboard.writeText(email).then(() => {
            setCopiedId(rowId)
            setTimeout(() => setCopiedId(null), 2000)
        }).catch(() => {
            // Fallback
            const el = document.createElement('input')
            el.value = email
            document.body.appendChild(el)
            el.select()
            try {
                document.execCommand('copy')
            } catch {}
            document.body.removeChild(el)
            setCopiedId(rowId)
            setTimeout(() => setCopiedId(null), 2000)
        })
    }

    const isCopyableColumn = (col: string) => {
        return col === 'email' || col === 'team_lead_email' || col === 'phone_number' || col === 'participant1_phone'
    }

    return (
        <div className="w-full space-y-6">
            {/* Tabs */}
            <div className="flex gap-2 p-1 bg-gray-100 rounded-xl">
                <button
                    onClick={() => {
                        setActiveTab('attendee')
                        setSearchValue('')
                        setSearchColumn('')
                    }}
                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 font-semibold rounded-lg transition-all ${
                        activeTab === 'attendee'
                            ? 'bg-white text-gray-900 shadow-sm'
                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                >
                    <User className="w-4 h-4" />
                    Attendees ({data.attendees.length})
                </button>
                <button
                    onClick={() => {
                        setActiveTab('participant')
                        setSearchValue('')
                        setSearchColumn('')
                    }}
                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 font-semibold rounded-lg transition-all ${
                        activeTab === 'participant'
                            ? 'bg-white text-gray-900 shadow-sm'
                            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                >
                    <Users className="w-4 h-4" />
                    Participants ({data.participants.length})
                </button>
            </div>

            {/* Search Section */}
            {currentData.length > 0 && (
                <div className="flex flex-col sm:flex-row gap-4 items-end p-4 bg-gray-50 rounded-xl border border-gray-200">
                    <div className="flex-1 space-y-2">
                        <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                            <Search className="w-4 h-4" />
                            Search by
                        </label>
                        <div className="relative">
                            <select
                                value={searchColumn}
                                onChange={(e) => setSearchColumn(e.target.value)}
                                className="w-full px-4 py-2.5 pr-10 border border-gray-300 rounded-lg bg-white text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none cursor-pointer transition-all hover:border-gray-400"
                            >
                                {rawColumns.map((col) => (
                                    <option key={col} value={col}>
                                        {labelMap[col] ?? col.replace(/_/g, ' ')}
                                    </option>
                                ))}
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
                        </div>
                    </div>
                    <div className="flex-1 space-y-2">
                        <label className="text-sm font-semibold text-gray-700">Search value</label>
                        <Input
                            type="text"
                            placeholder="Enter search term..."
                            value={searchValue}
                            onChange={(e) => setSearchValue(e.target.value)}
                            className="border-gray-300 focus:border-blue-500 bg-white py-2.5"
                        />
                    </div>
                    {searchValue && (
                        <Button
                            variant="outline"
                            onClick={() => setSearchValue('')}
                            className="mb-0 border-gray-300 hover:bg-gray-100"
                        >
                            Clear
                        </Button>
                    )}
                </div>
            )}

            {/* Module Color Legend - Only show for participants */}
            {activeTab === 'participant' && data.participants.length > 0 && (
                <div className="flex flex-wrap gap-2 p-3 bg-white rounded-lg border border-gray-200">
                    <span className="text-sm font-semibold text-gray-700 mr-2">Module Colors:</span>
                    {Object.entries(MODULE_COLORS).map(([module, colorClass]) => (
                        <span key={module} className={`text-xs px-2 py-1 rounded-md ${colorClass} text-gray-700 font-medium`}>
                            {module}
                        </span>
                    ))}
                </div>
            )}

            {/* Table */}
            {filteredData.length === 0 ? (
                <div className="p-8 text-center text-lg text-gray-600 bg-gray-50 rounded-xl border border-gray-200">
                    {searchValue ? `No results found for "${searchValue}"` : 'No registrations yet.'}
                </div>
            ) : (
                <div className="overflow-x-auto rounded-xl border border-gray-200">
                    <Table>
                        <TableCaption className="text-sm py-3">
                            {filteredData.length} registration{filteredData.length !== 1 ? 's' : ''} found
                            {searchValue && ` (filtered from ${currentData.length})`}
                        </TableCaption>
                        <TableHeader>
                            <TableRow className="bg-gray-100">
                                {columns.map((col) => (
                                    <TableHead key={col} className="text-left font-semibold text-gray-700">
                                        {col === 'index' ? '#' : (labelMap[col] ?? col.replace(/_/g, ' '))}
                                    </TableHead>
                                ))}
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {filteredData.map((row, idx) => {
                                // For participants, use module-based color; for attendees, alternate
                                const rowBgClass = activeTab === 'participant' 
                                    ? getModuleRowColor(row as ParticipantRow)
                                    : (idx % 2 === 0 ? 'bg-white' : 'bg-gray-50')
                                
                                return (
                                    <TableRow key={idx} className={`${rowBgClass} hover:brightness-95 transition-all`}>
                                        {columns.map((col) => {
                                            const cellValue = String(row[col as keyof typeof row] ?? '')

                                            // Special rendering for copyable columns (email and phone)
                                            if (isCopyableColumn(col)) {
                                                const isCopied = copiedId === `${row.id}-${col}`
                                                return (
                                                    <TableCell key={col} className="align-top">
                                                        <div className="flex items-center gap-2">
                                                            <span className="truncate text-sm">{cellValue}</span>
                                                            <Button
                                                                size="icon"
                                                                variant="ghost"
                                                                className="p-2 h-auto hover:bg-white/50"
                                                                onClick={() =>
                                                                    handleCopy(cellValue, `${row.id}-${col}`)
                                                                }
                                                                aria-label={
                                                                    isCopied ? 'Copied' : 'Copy'
                                                                }
                                                            >
                                                                {isCopied ? (
                                                                    <span className="text-xs px-1.5 py-0.5 text-emerald-600 font-semibold whitespace-nowrap">
                                                                        Copied!
                                                                    </span>
                                                                ) : (
                                                                    <Copy className="w-4 h-4" />
                                                                )}
                                                            </Button>
                                                        </div>
                                                    </TableCell>
                                                )
                                            }

                                            return (
                                                <TableCell key={col} className="align-top text-sm">
                                                    {col === 'index' ? String(idx + 1) : cellValue}
                                                </TableCell>
                                            )
                                        })}
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </div>
            )}

            {/* Refresh Button */}
            <div className="flex justify-end">
                <Button onClick={fetchData} variant="outline" className="flex items-center gap-2 border-gray-300 hover:bg-gray-100">
                    <RefreshCw className="w-4 h-4" />
                    Refresh
                </Button>
            </div>
        </div>
    )
}
