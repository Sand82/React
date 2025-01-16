import { useState, useEffect } from "react";

const useAuthHook = () => {

    const [user, setUser] = useState({});    
    
    return {
        user
    }
}