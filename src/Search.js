import { useAuth0 } from "@auth0/auth0-react";
import { CssBaseline } from "@material-ui/core";
import MenuBar from "./components/MenuBar";

export default function Search(props) {

    const { user } = useAuth0();

    return (
        <div className="FindTeammates">
            <CssBaseline />
            <MenuBar userLoggedIn={user != null} />
        </div>
    )
}
