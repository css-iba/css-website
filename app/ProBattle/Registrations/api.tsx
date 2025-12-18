import { supabase } from '../../Launch/Supabase/client'

/* ---------- PARTICIPANTS ---------- */
interface ParticipantFormData {
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

export async function insertParticipantRegistration(registrationData: ParticipantFormData) {
  console.log('Attempting to insert registration data:', registrationData);
    try {
        // Use an array to insert a single record reliably and request the inserted row back
        const { data, error } = await supabase
            .from('probattle2026_participants')
            .insert([registrationData])
            .select()
            .single();

        if (error) {
            // console.error('Supabase Insertion Error (participants):', JSON.stringify(error, null, 2));
            // console.error('Error message:', error.message);
            // console.error('Error code:', error.code);
            // console.error('Error details:', error.details);
            // console.error('Error hint:', error.hint);
            return { error };
        }

        // console.log('Supabase Insertion Success:', data);
        return { data, error: null };
    } catch (err) {
        // console.error('Unexpected error during Supabase insertion:', err);
        return { error: err };
    }
}

/* ---------- ATTENDEES ---------- */
interface AttendeeFormData {
    name: string;
    email: string;
    phone_number: string;
    cnic: string;
    institute_name: string;
    reference_number: string;
    brand_ambassador_code?: string;
}

export async function insertAttendeeRegistration(registrationData: AttendeeFormData) {
    console.log('Attempting to insert attendee registration data:', registrationData);
    try {
        // Use an array to insert a single record reliably and request the inserted row back
        const { data, error } = await supabase
            .from('probattle2026_attendees')
            .insert([registrationData])
            .select()
            .single();
  
        if (error) {
            // console.error('Supabase Insertion Error (attendees):', {
            //     message: (error as any).message,
            //     details: (error as any).details,
            //     hint: (error as any).hint,
            //     code: (error as any).code,
            // });
            return { error };
        }
        return { data, error: null };
    } catch (err) {
        // console.error('Unexpected error during Supabase insertion (attendees):', err);
        return { error: err };
    }
}

/* ---------- GET PARTICIPANTS ---------- */
export async function getParticipantRegistrations() {
    try {
        const { data, error } = await supabase
            .from('probattle2026_participants')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) {
            // console.error('Error fetching participants:', error);
            return { data: [], error };
        }
        return { data: data || [], error: null };
    } catch (err) {
        // console.error('Unexpected error fetching participants:', err);
        return { data: [], error: err };
    }
}

/* ---------- GET ATTENDEES ---------- */
export async function getAttendeeRegistrations() {
    try {
        const { data, error } = await supabase
            .from('probattle2026_attendees')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) {
            // console.error('Error fetching attendees:', error);
            return { data: [], error };
        }
        return { data: data || [], error: null };
    } catch (err) {
        // console.error('Unexpected error fetching attendees:', err);
        return { data: [], error: err };
    }
}