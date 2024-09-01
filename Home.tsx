import React from 'react';
import Button from '../components/Forms/Button';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {

    const navigate = useNavigate();

    const handleEventCreate = () => {
        navigate('/create-event/create');
    };
    return (
        <div className='flex flex-col min-h-screen'>
            <div className='flex-1'>
                <div className="relative">
                    <img
                        src="src/assets/Frontend_Branding.png"
                        alt="Top Image"
                        className="w-full h-full object-cover mb-8"
                    />

                    <div className='absolute inset-x-0 top-3/4 flex justify-center'>
                        <Button
                            btntype="button"
                            text="CREATE EVENT"
                            className="px-4 py-2 bg-blue-400 text-white rounded"
                            onClick={handleEventCreate}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
