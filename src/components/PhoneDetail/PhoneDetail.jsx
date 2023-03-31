import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { detailPhoneEp } from '../../services/phone.services';

const PhoneDetail = () => {

    const [phone, setPhoneDetail] =  useState({});
    const params = useParams();

    useEffect(() => {
        const getDetail = async() => {
            const response = await detailPhoneEp(params.id);
            setPhoneDetail(response.data);
        }
        getDetail()
            .catch(console.error);
    },[])
    
    return(
        <div className="flex justify-center py-5">
            <div className=" block flex-row ">
                <div className="max-w-sm rounded overflow-hidden shadow-lg mt-5">
                <img className="w-full" src={phone.imageFileName ? require(`../../assets/images/${phone.imageFileName}`) : 'image'} alt={phone.imageFileName ? phone.imageFileName : 'phone' } />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{phone ? phone.name : ''}</div>
                        <p className="text-gray-700 text-base text-justify">{phone.description}</p>
                    </div>
                    <div className='flex mx-6 my-3'>
                        <label className='font-bold'>Manofactured:</label>
                        <p className='ml-2'>{phone ? phone.manufacturer : ''}</p>
                    </div>
                    <div className='flex mx-6 my-3'>
                        <label className='font-bold'>Color:</label>
                        <p className='ml-2'>{phone ? phone.color : ''}</p>
                    </div>
                    <div className='flex mx-6 my-3'>
                        <label className='font-bold'>Price:</label>
                        <p className='ml-2'>{phone ? phone.price : ''}</p>
                    </div>
                    <div className='flex mx-6 my-3'>
                        <label className='font-bold'>Screen:</label>
                        <p className='ml-2'>{phone ? phone.screen : ''}</p>
                    </div>
                    <div className='flex mx-6 my-3'>
                        <label className='font-bold'>Processor:</label>
                        <p className='ml-2'>{phone ? phone.processor : ''}</p>
                    </div>
                    <div className='flex mx-6 my-3'>
                        <label className='font-bold'>Ram:</label>
                        <p className='ml-2'>{phone ? phone.ram : ''}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default PhoneDetail;