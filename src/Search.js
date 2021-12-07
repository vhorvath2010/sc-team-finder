import React from "react";
import { CssBaseline } from "@material-ui/core";
import MenuBar from './components/MenuBar'
import SearchResults from "./components/SearchResults";
import { getAllUserData } from './firebase';

export default class Search extends React.Component {

    constructor() {
        super()
        this.state = {
            users: null,
        }
    }

    componentDidMount() {
        getAllUserData().then(data => {
            this.setState({ users: data });
        });
    }

    render() {
        return (
            <div className="FindTeammates">
                <CssBaseline />
                <MenuBar />
                <SearchResults users={this.state.users} />
            </div>
        )
    }
}