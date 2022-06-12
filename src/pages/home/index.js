import { useEffect, useState } from "react"
import api from '../../services/api'
import { MdFlightTakeoff } from 'react-icons/md'
import './home.css'
import { useDispatch } from 'react-redux'
import { addReserveRequest   } from "../../store/modules/reserve/actions"

export default function Home(){
    const dispatch = useDispatch()
    const [trips, setTrips] = useState([])

    useEffect(() =>{
        async function loadAPI(){
            const response = await api.get('trips')
            setTrips(response.data)
        }

        loadAPI()
    },[])

    function handleAdd(id){
        dispatch(addReserveRequest(id))
    }

    return(
        <div>
           <div className="box">
                {trips.map(trip => (
                    <>
                        <li key={trip.id}>
                            <img src={trip.image} alt={trip.title} />
                            <strong>{trip.title}</strong>
                            <span>Status: {trip.status ? 'Disponível' : 'Indisponível' }</span>

                            <button type="button" onClick={() => handleAdd(trip.id)}>
                                <div>
                                    <MdFlightTakeoff size={16} color='#fff' />    
                                </div> 
                                <span>SOLICITAR RESERVA</span>

                            </button>
                        </li>

                       
                    </>
                ))}
            </div>
        </div>
    )
}