import React from 'react'

const Gastos = ({gastosData}) => {
    return (
        <div>
            {
                (gastosData.length > 0) ? (
                    gastosData.map(({nombre, presupuesto, id}) => 
                        (
                            <div key={id} className="gasto-container d-flex my-4 ">
                                <div className="nombre-container">
                                    {nombre} 
                                </div>
                                <div className="presupuesto-container text-left">
                                    ${presupuesto}
                                </div>
                            </div>
                        )
                    )
                ) : (
                    <h5 className="title-danger">No hay gastos</h5>
                )
            }
        </div>
    )
}

export default Gastos