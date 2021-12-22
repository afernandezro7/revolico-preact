import { h } from 'preact';
import { useContext } from 'preact/hooks';
import { BsCart3 } from "react-icons/bs";
import { CarContext } from '../../hooks/carContext';
import { useForm } from '../../hooks/useForm/useForm';
import style from './style.css';


const DetailsActions = ({ product }) => {

    const {options, id } = product
    const [ state, handleInputChange] = useForm({
        color: options.colors[0].code,
        storage:options.storages[0].code
    })
    const {color, storage} = state

    const { startaddItemCar } = useContext(CarContext)

    const handleSubmit = async (e)=>{
        e.preventDefault()

        startaddItemCar({
            id,
            colorCode: color,
            storageCode: storage
        })
        

    }

    return (
        <form onSubmit={handleSubmit}>
            <div class={style.actionsWrapper}>

                <div class={style.selectorsWrapper}>
                    <div class={style.formGroup}>
                        <select class={style.formSelect} name='color' value={color} onChange={handleInputChange} >
                            {
                                options.colors.map(color => (
                                    <option key={color.code} value={color.code}>{color.name}</option>
                                ))
                            }
                        </select>
                        <label>Color</label>
                    </div>
                    <div class={style.formGroup}>
                        <select class={style.formSelect} name='storage' value={storage} onChange={handleInputChange}>
                            {
                                options.storages.map(mem => (
                                    <option key={mem.code} value={mem.code}>{mem.name}</option>
                                ))
                            }
                        </select>
                        <label>Almacenamiento</label>
                    </div>
                </div>

                <div class={style.addCar}>
                    <button class={style.btn} type='submit'>
                        Agregar Producto <BsCart3 />
                    </button> 

                </div>

            </div>
        </form>

    );
    
}



export default DetailsActions;
