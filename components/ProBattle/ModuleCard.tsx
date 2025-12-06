import { Users, Tag, User, Link as LinkIcon } from 'lucide-react';
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
}

export function ModuleCard({
    name,
    description,
    minParticipants,
    maxParticipants,
    price,
    guideLink,
}: ModuleCardProps) {

    const isSingleParticipant = maxParticipants === 0;
    const ParticipantIcon = isSingleParticipant ? User : Users;
    
    return (
        <div className="flex flex-col h-full w-full md:w-[90%] max-w-sm p-6 border bg-[#1a2236] border-gray-700 rounded-lg shadow-md hover:shadow-xl hover:scale-[1.02] hover:border-gray-400 transition-all duration-200">
            {/* Module Name */}
            <h3 className="text-2xl md:text-2xl font-semibold font-heading colour-text mb-3">
                {name}
            </h3>

            {/* Description - flex-grow to push content below to bottom */}
            <p className="text-md colour-text font-text text-justify mb-4 leading-relaxed flex-grow">
                {description}
            </p>

            {/* Separator */}
            <Separator className="my-4" />

            {/* Participants & Price Row */}
            <div className="flex items-center justify-between mb-7">
                {/* Participants Range */}
                <div className="flex items-center gap-2">
                    <ParticipantIcon className="w-6 h-6 colour-text" />
                    <span className="text-lg font-semibold font-text colour-text">
                        {isSingleParticipant ? `${minParticipants} person` : `${minParticipants} - ${maxParticipants} persons`}
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
            <Badge variant="destructive" className="w-full justify-center mt-auto p-1">
                <Link
                    href={guideLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 colour-text font-text text-lg transition-colors"
                >
                    View Module Guide
                    <LinkIcon className="w-6 h-6" />
                </Link>
            </Badge>
        </div>
    );
}