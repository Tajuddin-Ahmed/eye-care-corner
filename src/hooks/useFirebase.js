import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, updateProfile } from "firebase/auth";
import { useState, useEffect } from 'react';

import initializeAuthentication from '../pages/Login/Firebase/firebase.init';
initializeAuthentication();
const auth = getAuth();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setpassword] = useState('');
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(false);

    const signInUsingGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
            })
    }
    const handleRegistration = (e) => {
        e.preventDefault();
        if (password.length < 6) {
            setError('Password must be at least 6 characters long');
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Password must contain two uppercase');
            return;
        }
        isLogin ? processLogin(email, password) : registerNewUser(email, password);
    }
    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(() => { })
    }
    const toggleLogin = e => {
        setIsLogin(e.target.checked);
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const handleNameChange = (e) => {
        setName(e.target.value);
    }
    const handlePasswordChange = (e) => {
        setpassword(e.target.value);
    }

    const registerNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setError('');
                setUserName();

            })
            .catch(error => {
                setError(error.message);
            })

    }
    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);
                setError('');
            })
            .catch(error => {
                setError(error.message);
            })
    }
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
        })
        return () => unsubscribed;

    }, [])
    const logOut = () => {
        signOut(auth)
            .then(() => { })
    }

    return {
        user,
        isLogin,
        toggleLogin,
        handleEmailChange,
        handleNameChange,
        handlePasswordChange,
        handleRegistration,
        signInUsingGoogle,
        processLogin,
        error,
        logOut
    }
}
export default useFirebase;