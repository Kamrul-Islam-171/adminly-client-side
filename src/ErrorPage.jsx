import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800">
            <div className="max-w-md text-center space-y-6 p-6">
                <div className="relative inline-block">
                    <h1 className="text-9xl font-bold text-gray-300 absolute top-0 left-0 transform -translate-y-1/4 -translate-x-1/4 blur-sm">404</h1>
                    <h1 className="text-7xl font-black text-gray-800 relative z-10">404</h1>
                </div>
                
                <h2 className="text-2xl font-semibold">
                    Oops! Something went wrong.
                </h2>
                
                <p className="text-gray-500 text-lg">
                    We can't seem to find the page you're looking for. How about heading back?
                </p>
                
                <div className="flex justify-center space-x-3">
                    <Link to="/" className="bg-gray-800 text-white py-2 px-5 rounded-lg font-semibold hover:bg-gray-900 transition duration-300 ease-in-out">
                        Back to Home
                    </Link>
                    <Link to="/contact" className="border border-gray-800 text-gray-800 py-2 px-5 rounded-lg font-semibold hover:bg-gray-800 hover:text-white transition duration-300 ease-in-out">
                        Contact Support
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;
