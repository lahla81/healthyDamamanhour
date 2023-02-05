import SignUp from "../../components/sign-up/sign-up.component";
import SignIn from "../../components/sign-in/sign-in.component";

import './authentication.style.scss';

const Authentication = () => {
    return (
        <div className="container text-center">
            <div className="row">
                <SignIn />
                <SignUp />
            </div>
        </div>
    )
}

export default Authentication;