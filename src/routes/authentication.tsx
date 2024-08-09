import SignInForm from "../components/sign-in-form";
import SignUpForm from "../components/sign-up-form";

const Authentication: React.FC = () => {

    return (
        <div className="authentication-container flex justify-between w-[900px] mx-auto my-8">
           <SignInForm/>
           <SignUpForm/> 
        </div>
    )
}

export default Authentication