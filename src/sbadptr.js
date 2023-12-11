import { createClient } from "@supabase/supabase-js";
import key from './key.js';
const supabase = createClient("https://lvvmyhlducflakyynoax.supabase.co", key());
export async function getData() {
    const { data, error } = await supabase.from('acc_ms').select('*');
    if (error) console.log('query error', error);
    else return data;
}

export async function getDataUsername(username) {
    const { data, error } = await supabase.from('acc_ms').select('*').eq('username', username);
    if (error) console.log('query error', error);
    else {
        console.log(data);
        return data;
    }
}