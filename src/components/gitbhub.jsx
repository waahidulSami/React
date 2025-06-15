import React, { useEffect ,useState} from "react";
import { data } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
function GitHub() {

    const data = useLoaderData();


    // const [data, setData] = useState();

    // useEffect(() =>{
    //     fetch('https://api.github.com/users/waahidulSami')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data);
    //     })
    // } ,[])
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-blue-100 w-full ">
            <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center w-full max-w-sm">
                {data ? (
                    <>
                        <img
                            src={data.avatar_url}
                            alt={data.login}
                            className="w-24 h-24 rounded-full border-4 border-blue-400 shadow mb-4"
                        />
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">{data.name || data.login}</h2>
                        <p className="text-gray-600 mb-4">@{data.login}</p>
                        <div className="flex space-x-6 mb-4">
                            <div className="text-center">
                                <span className="block text-lg font-semibold text-blue-600">{data.followers}</span>
                                <span className="text-xs text-gray-500">Followers</span>
                            </div>
                            <div className="text-center">
                                <span className="block text-lg font-semibold text-blue-600">{data.following}</span>
                                <span className="text-xs text-gray-500">Following</span>
                            </div>
                            <div className="text-center">
                                <span className="block text-lg font-semibold text-blue-600">{data.public_repos}</span>
                                <span className="text-xs text-gray-500">Repos</span>
                            </div>
                        </div>
                        <a
                            href={data.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                        >
                            View Profile
                        </a>
                    </>
                ) : (
                    <div className="text-gray-500 text-lg">Loading...</div>
                )}
            </div>
        </div>
    );
}

export default GitHub;



export const githubloader = async () => {
    const response = await fetch('https://api.github.com/users/waahidulSami');
    if (!response.ok) {
        throw new Error('Failed to fetch GitHub data');
    }
 return response.json();
}