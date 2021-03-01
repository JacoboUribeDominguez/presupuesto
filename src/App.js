import React, { useState, useEffect } from 'react';
import './App.css';
import { Row, Col } from 'react-bootstrap';
import Presupuesto from './components/Presupuesto'
import ControladorPresupuesto from './components/ControladorPresupuesto'

function App() {

  let presupuestoInicial = JSON.parse(localStorage.getItem('presupuestoGeneral'));

  if(presupuestoInicial < 1){
    presupuestoInicial = 0;
  }

  const [presupuestoGeneral, setPresupuestoGeneral] = useState(presupuestoInicial);

  useEffect(() => {
    localStorage.setItem('presupuestoGeneral', JSON.stringify(presupuestoGeneral));
  }, [presupuestoGeneral])

  return (
    <div className="App">
      <div className="container py-5 app-container d-flex justify-content-center">
        <Row className="row-1 my-5">
          <Col lg={2}>
          </Col>
          <Col lg={8}>
            <div className="application p-4">
              {(presupuestoGeneral < 1) ? ( 
                <Presupuesto setPresupuestoGeneral={setPresupuestoGeneral} /> 
                ) : (
                  <ControladorPresupuesto presupuestoGeneral={presupuestoGeneral}/>
                )}
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
