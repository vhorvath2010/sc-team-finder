import { useAuth0 } from "@auth0/auth0-react";
import { CssBaseline } from "@material-ui/core";
import { useEffect, useState } from "react";
import MenuBar from "./components/MenuBar";
import SearchResults from './components/SearchResults';
import { getAllUserData } from './firebase';

export default function Search(props) {

    const { user } = useAuth0();

    // Load users
    const [users, setUsers] = useState([]);
    useEffect(() => {
        getAllUserData().then(data => {
            setUsers(data);
        });
    });

    return (
        <div className="FindTeammates">
            <CssBaseline />
            <MenuBar userLoggedIn={user != null} />
            <SearchResults users={users}/>
        </div>
    )
}
