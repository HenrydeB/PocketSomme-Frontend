import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <section className="font-default text-center p-10">
            <h1 className="text-4xl text-black font-bold mb-4">
                Welcome to PocketSomme
            </h1>
            <p className="text-xl text-burgundy mb-6">
                Your wine expert and guide
            </p>
            <Link
                className="bg-burgundy text-cream hover:bg-cream hover:text-burgundy hover:border hover:border-burgundy px-6 py-3 shadow-xl rounded-full font-semibold"
                to={'/auth'}
            >
                Sign Up Now
            </Link>
        </section>
    );
};

export default Home;
