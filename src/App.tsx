import React from 'react';
import { Route, Switch } from 'wouter';
import Header from './Header';
import DailyChallengeCard from './DailyChallengeCard';
import DailyChallengeUpload from './DailyChallengeUpload';
import StudentPosts from "./StudentPosts";
import Welcome from "./Welcome";
import CreateAccount from "./CreateAccount";
import Leaderboard from "./Leaderboard";

const App: React.FC = () => {
    return (
        <>
            <Header />
            <Switch>
                <Route path="/" component={Welcome} />
                <Route path="/createaccount" component={CreateAccount} />
                <Route path="/dailychallenge" component={DailyChallengeCard} />
                <Route path="/upload" component={DailyChallengeUpload} />
                <Route path="/student-posts" component={StudentPosts} />
                <Route path="/leaderboard" component={Leaderboard} />
                <Route>404 - Page Not Found</Route>
            </Switch>
        </>
    );
};

export default App;

