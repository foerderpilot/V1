export default function LoadingCard() {
    return (
        <div className="loading-card card bg-gray-100 shadow-md p-4 opacity-70 mb-4 min-w-[300px] max-w-md">
            <div className="flex flex-col space-y-6">
                <div className="skeleton w-full h-4 bg-gray-200"></div>
                <div className="skeleton w-full h-4 bg-gray-200"></div>
                <div className="skeleton w-full h-4 bg-gray-200 "></div>
                <div className="h-6"></div>
                <div className="skeleton w-1/2 h-4 bg-gray-200"></div>
                <div className="skeleton w-1/2 h-4 bg-gray-200"></div>
                <div className="skeleton w-1/2 h-4 bg-gray-200"></div>
            </div>
            <div className="flex items-center space-x-4 mt-6">
                <div className="skeleton h-10 w-1/2"></div>
                <span className="loading loading-spinner loading-lg ml-5"></span>
            </div>
        </div>
    );
}
