import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Button, Row, Col } from 'react-bootstrap';

const Nopresupuesto = ({setActivarNopresupuesto}) => {

    const [activeRemove, setActiveRemove] = useState(false);
    const [activo, setActivo] = useState(false);
    const [gastos] = useState(JSON.parse(localStorage.getItem('gastos')))
    const [presupuestoGeneral] = useState(JSON.parse(localStorage.getItem('simuladorPresupuestoGeneral')))

    const toggleClick = () => {
        localStorage.setItem('gastos', JSON.stringify([]));
        localStorage.setItem('simuladorPresupuestoGeneral', JSON.stringify(0));
        localStorage.setItem('noPresupuesto', false);
        setActiveRemove(true);
    }

    useEffect(() => {
        localStorage.setItem('noPresupuesto', true);
        if(activeRemove){
            setActivarNopresupuesto(false);
        }
    })

    return (
        <>
            <div className="container-nopresupuesto d-flex flex-column align-items-center px-5">
                <h4 className="title-presupuesto text-center">¿Qué quieres hacer?</h4>
                <Button className="width-100 mt-4" onClick={() => setActivo(true)} variant="success">Ver registros anteriores</Button>
                <Button className="width-100 mt-3" onClick={() => toggleClick()} variant="success">Nuevo presupuesto</Button>
            </div>
            {
                (activo) ? (
                    <div className="width-100 d-flex flex-column align-items-center">
                        <div className="mt-3">
                            <h3 className="title-presupuesto">Presupuesto Inicial</h3>
                            <div className="noPresupuesto-genPre-container mt-4">
                                {presupuestoGeneral}
                            </div>
                        </div>
                        <h4 className="mt-3 title-presupuesto">Gastos</h4>
                        <div className="width-100">
                            {
                                gastos.map( ({id, nombre, presupuesto}) => 
                                    (
                                        <Row key={id} className=" d-flex my-3 mx-5 noPresupuesto-gasRow">
                                            <Col xs={8} className="text-center noPresupuesto-gasCol py-3">
                                                {nombre}
                                            </Col>
                                            <Col xs={4} className="text-center noPresupuesto-gasCol noPresupuesto-gasCol-presupuesto py-3">
                                                {presupuesto}
                                            </Col>
                                        </Row>
                                        
                                    )
                                )
                            }
                        </div>
                    </div>
                ) : null
            }
        </>
    )
}

Nopresupuesto.propTypes = {
    setActivarNopresupuesto : PropTypes.func.isRequired
}

export default Nopresupuesto
