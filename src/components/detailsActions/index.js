import { h } from 'preact';
import { BsCart3 } from "react-icons/bs";
import { useForm } from '../../hooks/useForm/useForm';
import style from './style.css';


const DetailsActions = ({ product }) => {

    const [ state, handleInputChange] = useForm({
        color: product.colors[0],
        storage:product.internalMemory[0]
    })
    const {color, storage} = state

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log("color", color)
        console.log("storage", storage)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div class={style.actionsWrapper}>

                <div class={style.selectorsWrapper}>
                    <div class={style.formGroup}>
                        <select class={style.formSelect} name='color' value={color} onChange={handleInputChange} >
                            {
                                product.colors.map(color => (
                                    <option key={color} value={color}>{color}</option>
                                ))
                            }
                        </select>
                        <label>Color</label>
                    </div>
                    <div class={style.formGroup}>
                        <select class={style.formSelect} name='storage' value={storage} onChange={handleInputChange}>
                            {
                                product.internalMemory.map(mem => (
                                    <option key={mem} value={mem}>{mem}</option>
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
