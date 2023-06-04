"use client";
import Modal from "./Modal";
import React, { useEffect } from "react";
import {useRouter} from "next/navigation";
import {Auth} from "@supabase/auth-ui-react";
import useAuthModals from "@/hooks/useAuthModal";
import {ThemeSupa} from "@supabase/auth-ui-shared";
import {useSessionContext, useSupabaseClient} from "@supabase/auth-helpers-react";
const AuthModal = () => {
	const router = useRouter();
	const {session} = useSessionContext();
	const {onClose, isOpen} = useAuthModals();
	const supabaseClient = useSupabaseClient();
	useEffect(() => {
		if(session){
			router.refresh();
			onClose();
		};
	}, [session, router, onClose]);
	const onChange = (open: boolean) => {
		if(!open){
			onClose();
		};
	};
	return(
		<Modal title = "Welcome back" description = "Login to your account." isOpen = {isOpen} onChange = {onChange}>
			<Auth supabaseClient = {supabaseClient} providers = {["github"]} magicLink = {true} 
				appearance = {{
					theme: ThemeSupa,
					variables: {
						default: {
							colors: {
								brand: "A404040",
								brandAccent: "22C55E"
							},
						},
					},
				}}
				theme = "dark"
			/>
		</Modal>
	);
};
export default AuthModal;