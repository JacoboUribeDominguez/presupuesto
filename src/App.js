import React, { useState, useEffect } from 'react';
import './App.css';

import { Row, Col } from 'react-bootstrap';

import Presupuesto from './components/Presupuesto'
import ControladorPresupuesto from './components/ControladorPresupuesto'
import Nopresupuesto from './components/Nopresupuesto';

function App() {

  let presupuestoInicial = JSON.parse(localStorage.getItem('presupuestoGeneral'));

  if(presupuestoInicial < 1){
    presupuestoInicial = 0;
    //localStorage.setItem('gastos', JSON.stringify(0));
    localStorage.setItem('presupuestoRestante', JSON.stringify(0));
  }

  const [activarNopresupuesto, setActivarNopresupuesto] = useState(JSON.parse(localStorage.getItem('noPresupuesto')));
  const [presupuestoGeneral, setPresupuestoGeneral] = useState(presupuestoInicial);

  useEffect(() => {
    localStorage.setItem('presupuestoGeneral', JSON.stringify(presupuestoGeneral));
  }, [presupuestoGeneral])

  useEffect(() => {
    if(!activarNopresupuesto && presupuestoInicial === 0){
      setPresupuestoGeneral(0);
    }
  }, [activarNopresupuesto])

  return (
    <div className="App">
      <div className="container py-5 app-container d-flex justify-content-center">
        <Row className="row-1 my-5">
          <Col lg={2}>
          </Col>
          <Col lg={8}>
            <div className="application p-4">
              {
                (!activarNopresupuesto ) ? (
                  (presupuestoGeneral > 0) ? (
                    <ControladorPresupuesto 
                      activarNopresupuesto={activarNopresupuesto} 
                      presupuestoGeneral={presupuestoGeneral} 
                      setActivarNopresupuesto={setActivarNopresupuesto}/>
                    
                  ) : (
                    <Presupuesto setPresupuestoGeneral={setPresupuestoGeneral} />
                  )
                ) : (
                  <Nopresupuesto setActivarNopresupuesto={setActivarNopresupuesto}/>
                )
              }
            </div>
          </Col>
          <Col lg={2}>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default App;
