import { supabase } from '../Launch/Supabase/client';


interface RegistrationFormData {
    participantName: string;
    email: string;
    phoneNumber: string;
}

export async function insertRegistration(registrationData: RegistrationFormData) {
    console.log('Attempting to insert registration data:', registrationData);
    try {
        // Use an array to insert a single record reliably and request the inserted row back
        const { data, error } = await supabase
            .from('codeclash2')
            .insert([registrationData])
            .select()
            .single();

        if (error) {
            // log richer information for debugging
            // console.error('Supabase Insertion Error:', {
            //     message: error.message,
            //     details: error.details,
            //     hint: error.hint,
            //     code: error.code,
            // });
            return { error };
        }

        // console.log('Supabase Insertion Success:', data);
        return { error: null };
    } catch (err) {
        // Sometimes the SDK throws; capture and log it
        // console.error('Unexpected error during Supabase insert:', err);
        return { error: err };
    }
}

export async function GetData() {
    try {
        const { data, error } = await supabase
            .from('codeclash2')
            .select('*');

        if (error) {
            // console.error('Supabase Fetch Error:', {
            //     message: error.message,
            //     details: error.details,
            //     hint: error.hint,
            //     code: error.code,
            // });
            return { error };
        }

        // console.log('Supabase Fetch Success:', data);
        return { data, error: null };
    } catch (err) {
        // console.error('Unexpected error during Supabase fetch:', err);
        return { error: err };
    }
}
