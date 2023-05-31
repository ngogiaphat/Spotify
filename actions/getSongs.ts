import {Song} from "@/types";
import {cookies} from "next/headers";
import {createServerComponentClient} from "@supabase/auth-helpers-nextjs";
const getSongs = async(): Promise<Song[]> => {
	const supabase = createServerComponentClient({cookies: cookies});
	const {data, error} = await supabase.from("songs").select("*").order("create_at", {ascending: false});
	if(error){
		console.log(error.message);
	};
	return (data as any) || []
};
export default getSongs;