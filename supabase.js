// Konfigurasi Klien Supabase untuk SMK Taruna Harapan 2
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

// URL dan Anon Key resmi dari Supabase SMK Taruna Harapan 2
const SUPABASE_URL = 'https://sfzurfsovwfqucwnfkdc.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_z9Q9dF6IcFqRpnCl362uWQ_BCfFHGfQ';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Fungsi Login Universal
export async function loginLMS(nisnNip, password) {
    try {
        const { data, error } = await supabase
            .from('users')
            .select('*')
            .eq('nisn_nip', nisnNip)
            .eq('password', password)
            .single();

        if (error || !data) {
            alert('NISN/NIP atau Password salah!');
            return null;
        }

        localStorage.setItem('user_session', JSON.stringify(data));
        return data;
    } catch (err) {
        console.error('Terjadi kesalahan koneksi:', err);
        return null;
    }
}