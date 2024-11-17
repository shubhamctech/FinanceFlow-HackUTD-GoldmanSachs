"use server";

import { signIn } from "@/lib/auth/authConfig";

export const handleGoogleSignIn = async() => {
    try{
        await signIn("google", {redirectTo: "/dashboard"});
    }catch(error){
        console.error("Error while handling google sign in\n", error);
    }
}