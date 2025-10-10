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
            .insert(registrationData)
            .single();

        if (error) {
            // log richer information for debugging
            console.error('Supabase Insertion Error:', {
                message: error.message,
                details: error.details,
                hint: error.hint,
                code: error.code,
            });
            return { error };
        }

        console.log('Supabase Insertion Success:', data);
        return { error: null };
    } catch (err) {
        // Sometimes the SDK throws; capture and log it
        console.error('Unexpected error during Supabase insert:', err);
        return { error: err };
    }
}
