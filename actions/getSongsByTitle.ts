import {Song} from "@/types";
import {cookies, headers} from "next/headers";
import {createServerComponentClient} from "@supabase/auth-helpers-nextjs";
import getSongs from "./getSongs";
const getSongsByTitle = async(title: string): Promise<Song[]> => {
	const supabase = createServerComponentClient({cookies: cookies});
	if(!title){
		const allSongs = await getSongs();
		return allSongs;
	};
	const {data, error} = await supabase.from("songs").select("*").order("create_at", {ascending: false}).ilike("title", `%${title}%`);
	if(error){
		console.log(error.message);
	};
	return (data as any) || [];
};
export default getSongsByTitle;