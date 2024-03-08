import { useState } from "react";
import { auth, db, signInWithGooglePopup } from "../config/firebase";
import { signOut } from "firebase/auth";
import { getDocs, collection } from "firebase/firestore";

const Auth = () => {
    const [tickets, setTickets] = useState([]);

    const ticketCollectionRef = collection(db, "ticket");

    const signIn = async () => {
        console.log(auth.currentUser)
        try {
            await signInWithGooglePopup();
        } catch (error) {
            console.log(error);
        }
    }

    const logOut = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <input type="text" />
            <input type="text" />

            <button onClick={() => signIn().then(() => console.log(auth.currentUser))}>sign in</button>
            <span>{auth?.currentUser?.email}</span>
            <button onClick={logOut}>Log out</button>
        </div>
    )
}

export default Auth