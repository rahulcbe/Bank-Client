import { createContext, useState } from "react";
const UserContext = createContext();
export const UserProvider = ({ children }) => {
    const [users, setUsers] = useState([
        {
            name: "Rahul",
            email: "rahul04cbe@gmail.com",
            password: "Rahul4504",
            amount: 1000
        }
    ]);
    return (
        <UserContext.Provider value={{ users, setUsers }}>
            {children}
        </UserContext.Provider>
    );
};
export default UserContext;