import { createClient } from "@supabase/supabase-js";
import key from './key.js';
const supabase = createClient("https://lvvmyhlducflakyynoax.supabase.co",key());
export async function getData() {
    const { data, error } = await supabase.from('acc_ms').select('*');
    if (error) console.log('query error', error);
    else return data;
}