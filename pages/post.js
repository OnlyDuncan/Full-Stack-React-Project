import { auth, db } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Post() {
    return(
        <div>
            <form>
                <h1>Create a new post</h1>
                <div>
                    <h3>Description</h3>
                    <textarea></textarea>
                </div>
            </form>
        </div>
    );
}