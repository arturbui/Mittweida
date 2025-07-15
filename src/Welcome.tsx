import './Welcome.css';
import { useLocation } from 'wouter';
import CustomButton from "./CustomButton";
import './DailyChallengeCard.css'

const Welcome = () => {
    const [, setLocation] = useLocation();

    const handleStart = () => {
        setLocation('/createaccount');
    };

    return (
        <div>
            <div className="welcome-title">Welcome!</div>
            <div className="welcome-description">Unlock the secrets <br /> of Mittweida!</div>
            <div className="welcome-description-2">Conquer daily quests <br /> and become the best!</div>
            <div className="button-wrapper">
                <CustomButton text="Start" onClick={handleStart}/>
            </div>
        </div>
    );
};

export default Welcome;


