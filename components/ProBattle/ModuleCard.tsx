import { Users, Tag, User, Link as LinkIcon, Layers, AlertTriangle } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export interface ModuleCardProps {
    name: string;
    description: string;
    minParticipants: number;
    maxParticipants: number;
    price: number;
    guideLink: string;
    Tier?: number[];
}

export function ModuleCard({
    name,
    description,
    minParticipants,
    maxParticipants,
    price,
    guideLink,
    Tier,
}: ModuleCardProps) {

    const isSingleParticipant = minParticipants === 0;
    const ParticipantIcon = isSingleParticipant ? User : Users;

    const formatTier = (tier?: number[]) => {
        if (!tier || tier.length === 0) return null;
        if (tier.length === 1) return `Tier: ${tier[0]}`;
        return `Tier: ${tier[0]} & ${tier[1]}`;
    };
    
    return (
        <div className="flex flex-col h-full w-full md:w-[90%] max-w-sm p-6 border bg-[#1a2236] border-gray-700 rounded-lg shadow-md hover:shadow-xl hover:scale-[1.02] hover:border-gray-400 transition-all duration-200">
            {/* Tier Badge - Top Right */}
            {Tier && Tier.length > 0 && (
                <div className="flex justify-end mb-2">
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#19675b]/20 border border-[#19675b]/40">
                        <Layers className="w-4 h-4 text-[#19c8aa]" />
                        <span className="text-sm font-heading font-semibold text-[#19c8aa]">
                            {formatTier(Tier)}
                        </span>
                    </div>
                </div>
            )}

            {/* Module Name */}
            <h3 className="text-2xl md:text-2xl font-semibold font-heading colour-text mb-3">
                {name}
            </h3>

            {/* Description - flex-grow to push content below to bottom */}
            <p className="text-md colour-text font-text text-justify mb-4 leading-relaxed flex-grow">
                {description}
            </p>

            {/* FIFA-specific details */}
            {name === 'FIFA' && (
                <div className="mb-4 p-3 rounded-lg bg-[#19675b]/15 border border-[#19675b]/30">
                    <ul className="text-[16px] font-text text-gray-300 space-y-1">
                        <li>• Console: <span className="text-[#19c8aa] font-medium">PS5</span></li>
                        <li>• Game: <span className="text-[#19c8aa] font-medium">FC 26 (FIFA 26)</span></li>
                        <li>• Format: <span className="text-[#19c8aa] font-medium">Double Elimination</span></li>
                    </ul>
                </div>
            )}

            {/* Robo Race-specific details */}
            {name === 'Robo Race (High School)' && (
                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-3">
                    <AlertTriangle className="w-6 h-6 text-amber-500 shrink-0 mt-0.5" />
                    <div>
                        <p className="font-semibold text-amber-500 font-heading text-base">Important Note</p>
                        <p className="text-sm text-amber-400/90 font-text mt-1">
                            This module is only for high school and lower level students.
                        </p>
                    </div>
                </div>
            )}

            {/* Line Following Robot (University)-specific details */}
            {name === 'Line Following Robot (University)' && (
                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-3">
                    <AlertTriangle className="w-6 h-6 text-amber-500 shrink-0 mt-0.5" />
                    <div>
                        <p className="font-semibold text-amber-500 font-heading text-base">Important Note</p>
                        <p className="text-sm text-amber-400/90 font-text mt-1">
                            This module is only for university students.
                        </p>
                    </div>
                </div>
            )}

            {/* Separator */}
            <Separator className="my-4" />

            {/* Participants & Price Row */}
            <div className="flex items-center justify-between mb-7">
                {/* Participants Range */}
                <div className="flex items-center gap-2">
                    <ParticipantIcon className="w-6 h-6 colour-text" />
                    <span className="text-lg font-semibold font-text colour-text">
                        {isSingleParticipant ? `${maxParticipants} person` : `${minParticipants} - ${maxParticipants} persons`}
                    </span>
                </div>

                {/* Price Tag */}
                <div className="flex items-center gap-2">
                    <Tag className="w-6 h-6 colour-text" />
                    <span className="text-lg font-semibold font-text colour-text">
                        Rs. {price}
                    </span>
                </div>
            </div>

            {/* Module Guide Link */}
            <Badge 
                variant="destructive" 
                className={`w-full justify-center mt-auto p-1 transition-colors ${
                    guideLink 
                        ? 'bg-[#19675b] hover:bg-[#1e8e73] cursor-pointer' 
                        : 'bg-gray-600 cursor-not-allowed opacity-50'
                }`}
            >
                {guideLink ? (
                    <Link
                        href={guideLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 colour-text font-text text-lg transition-colors"
                    >
                        View Module Guide
                        <LinkIcon className="w-6 h-6" />
                    </Link>
                ) : (
                    <span className="flex items-center gap-2 colour-text font-text text-lg">
                        View Module Guide
                        <LinkIcon className="w-6 h-6" />
                    </span>
                )}
            </Badge>
        </div>
    );
}
