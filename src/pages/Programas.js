import React from 'react'
import Table from 'react-bootstrap/Table';

const Programas = () => {
  return (
    <div className='progra'> 
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>MODALIDAD</th>
            <th>DIAS</th>
            <th>HORARIOS</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Virtuak</td>
            <td>Lunes-Viernes</td>
            <td>16:00-18:00</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Presencial</td>
            <td>Lunes-Miercoles-Viernes</td>
            <td>13:00-14:00</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Virtuak</td>
            <td>Martes-Jueves-Sabado</td>
            <td>10:00-12-15</td>
          </tr>
        </tbody>
      </Table>
    </div>

  )
}
export default Programas;