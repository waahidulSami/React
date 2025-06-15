import React from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
    const { userid } = useParams();
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200">
            <div className="bg-white rounded-xl shadow-lg p-10 flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-blue-200 flex items-center justify-center mb-4">
                    <span className="text-3xl font-bold text-blue-700">
                        {userid?.charAt(0).toUpperCase()}
                    </span>
                </div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">User Profile</h2>
                <p className="text-gray-600">
                    <span className="font-medium">User ID:</span> {userid}
                </p>
            </div>
        </div>
    );
};

export default User;