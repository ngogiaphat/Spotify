import './globals.css'
import Player from '@/components/Player';
import {Figtree} from 'next/font/google';
import Sidebar from '@/components/Sidebar';
import UserProvider from '@/providers/UserProvider';
import ModalProvider from '@/providers/ModalProvider';
import getSongsByUserId from '@/actions/getSongsByUserId';
import ToasterProvider from '@/providers/ToasterProvider';
import SupabaseProvider from '@/providers/SupabaseProvider';
import getActiveProductsWithPrices from '@/actions/getActiveProductsWithPrices';
const font = Figtree({subsets: ['latin']});
export const revalidate = 0;
export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}){
	const products = await getActiveProductsWithPrices();
	const userSongs = await getSongsByUserId();
	return(
		<html lang = "en">
			<body className = {font.className}>
				<ToasterProvider/>
				<SupabaseProvider>
					<UserProvider>
						<ModalProvider products = {products}/>
						<Sidebar songs = {userSongs}>
							{children}
						</Sidebar>
						<Player/>
					</UserProvider>
				</SupabaseProvider>
			</body>
		</html>
	);
};