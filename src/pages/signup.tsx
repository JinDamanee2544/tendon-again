import Signup from "../components/signup";
import ThemeToggle from "../components/ThemeToggle";

const SignupPage = () => {
    return (
        <main
            className="flex flex-col items-center justify-center min-h-screen p-4 bg-slate-300 dark:bg-gray-dark shadow-2xl overflow-hidden"
        >
            <ThemeToggle />
            <Signup />
        </main>
    )
}

export default SignupPage;