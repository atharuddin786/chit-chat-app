import { createContext, useContext, useEffect, useState } from "react";
import { auth, database } from "../misc/firebase";
import { off, onValue, ref } from "firebase/database";
import { onAuthStateChanged } from "firebase/auth";

const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let userRef;

    const authUnsub = onAuthStateChanged(auth, (authObj) => {
      if (authObj) {
        userRef = ref(database, `/profiles/${authObj.uid}`);
        onValue(userRef, (snapshot) => {
          const profileData = snapshot.val();
          if (profileData) {
            const data = {
              name: profileData.name,
              uid: authObj.uid,
              email: authObj.email,
              createdAt: profileData.createdAt,
            };
            setProfile(data);
          } else {
            setProfile(null);
          }
          setIsLoading(false);
        });
      } else {
        if (userRef) {
          off(userRef); // Unsubscribe from the Firebase Realtime Database listener
        }
        setProfile(null);
        setIsLoading(false);
      }
    });

    return () => {
      authUnsub(); // Unsubscribe from the Firebase Auth listener when component unmounts
      if (userRef) {
        off(userRef); // Unsubscribe from the Firebase Realtime Database listener when component unmounts
      }
    };
  }, []);

  return (
    <ProfileContext.Provider value={{ isLoading, profile }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => useContext(ProfileContext);
