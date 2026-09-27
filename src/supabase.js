import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://igpemghgwajjxrwmitfr.supabase.co";
const supabaseKey = "sb_publishable_bh347nPx2Av1x1Yc9svh5w_wQT_YNxc";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);