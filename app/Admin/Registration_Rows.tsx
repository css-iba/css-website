import { GetData as GetLaunchData } from "@/app/Launch/Supabase/api";
import { GetData as GetCodeClash2Data } from "@/app/CodeClash2/api";

export type StudentYear = "freshman" | "sophomore" | "junior" | "senior" | "";
export type Difficulty = "easy" | "hard" | "";

export type LaunchRecord = {
    id: number;
    created_at: string;
    participant1Name: string;
    participant2Name: string;
    teamLeadEmail: string;
    studentYear: StudentYear;
    difficulty: Difficulty;
    // Allow additional fields without using `any`
    [key: string]: string | number | undefined;
};

export type CodeClash2Record = {
    id: number;
    created_at: string;
    participantName: string;
    email: string;
    phoneNumber: string;
    [key: string]: string | number | undefined;
};

export type AttendeeRow = {
    id: string;
    created_at: string;
    name: string;
    email: string;
    phone_number: string;
    cnic: string;
    institute_name: string;
    reference_number: string;
    brand_ambassador_code?: string;
    [key: string]: string | number | undefined;
}

export type ParticipantRow = {
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
    [key: string]: string | number | undefined;
}

// Map competition keys to their record types
export type CompetitionKey = "Launch" | "CodeClash2" | "ProBattle2026";

type RecordMap = {
    Launch: LaunchRecord;
    CodeClash2: CodeClash2Record;
    ProBattle2026: ParticipantRow | AttendeeRow;
};

export type CompetitionRecord<K extends keyof RecordMap> = RecordMap[K];
export type AnyCompetitionRecord = RecordMap[keyof RecordMap];

export async function fetchCompetitionRows<K extends keyof RecordMap>(competition: K): Promise<{ data?: RecordMap[K][]; error?: unknown }> {
    try {
        if (competition === 'Launch') {
            const res = await GetLaunchData();
            return { data: res.data as RecordMap[K][] | undefined, error: res.error };
        }

        if (competition === 'CodeClash2') {
            const res = await GetCodeClash2Data();
            return { data: res.data as RecordMap[K][] | undefined, error: res.error };
        }

        return { data: undefined };
    } catch (err) {
        return { error: err };
    }
}
