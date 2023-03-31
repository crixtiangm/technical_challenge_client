import { useEffect, useState } from 'react';
import { listPhonesEp } from '../../services/phone.services';
import { Link } from 'react-router-dom';

const CardPhone = () => {
    
    const [phones, setPhones] = useState([]);

    useEffect(()=> {
        const allList = async () =>{
            const listPhones = await listPhonesEp();
            if(listPhones.data){
                return setPhones(listPhones.data);
            }
            return setPhones([]);
        }
        allList()
            .catch(console.error);
    },[]);

    return(
        <>
        {phones.map((phone, idx) => (
        <div key={idx} className="flex justify-center">
            <div className=" block flex-row ">
                <div className="max-w-sm rounded overflow-hidden shadow-lg mt-5">
                    <img className="w-full" src={require(`../../assets/images/${phone.imageFileName}`)} alt={phone.imageFileName.split("_")[0].toLowerCase()} />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{phone.name}</div>
                        <p className="text-gray-700 text-base text-justify">{phone.description}</p>
                    </div>
                    <div className='flex mx-6 my-3'>
                        <Link to={`/phone/${phone.id}`} className=' cursor-pointer'>
                            <span className="font-semibold whitespace-nowrap text-blue-700">View Detail</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        ))}
        </>
    )
}

export default CardPhone;