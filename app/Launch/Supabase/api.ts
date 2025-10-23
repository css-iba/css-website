// cspell:disable-next-line
import { supabase } from './client';


interface RegistrationFormData {
  participant1Name: string;
  participant2Name: string;
  teamLeadEmail: string;
  studentYear: 'freshman' | 'sophomore' | 'junior' | 'senior' | '';
  difficulty: 'easy' | 'hard' | '';
}
    
export async function insertRegistration(registrationData: RegistrationFormData) {
    console.log('Attempting to insert registration data:', registrationData);
    try {
        // Use an array to insert a single record reliably and request the inserted row back
        const { data, error } = await supabase
            .from('registrations')
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
            .from('registrations')
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

// Sign in an existing user with email and password
export async function signIn(email: string, password: string) {
    try {
        const {
            data: { user, session },
            error,
        } = await supabase.auth.signInWithPassword({ email, password });

        if (error) {
            // AuthError from supabase-js has limited fields; stringify for full details
            // console.error('Supabase signIn error:', {
            //     message: error.message,
            //     status: (error as any).status ?? null,
            //     code: (error as any).code ?? null,
            //     raw: JSON.stringify(error),
            // });
            return { error };
        }

        return { user, session, error: null };
    } catch (err) {
        // console.error('Unexpected error during signIn:', err);
        return { error: err };
    }
}
