import React, { Component } from 'react';
import './Home.css';

export default class Home extends Component {
  constructor() {
    super();


  }

  render() {
    return (
      <div className="container" >

        <div id="users">
          <div className="row">
            <div className="col-3">
              <input className="form-control form-control-sm" placeholder="Procurar" />
            </div>
          </div>
        </div>

        <br />
        <table className="table">
          <thead>
            <tr>
              <th name='nome' scope="col">Nome</th>
              <th name='email' scope="col">Email</th>
              <th name='obs' scope="col">Observação</th>
              <th name='area_id' scope="col">Área</th>
              <th name='regiao_id' scope="col">Região</th>
            </tr >
          </thead >
          <tbody className='list'>

            <tr>
              <td className='nome'>interpol</td>
              <td className='email'>interpol</td>
              <td className='obs'>interpol</td>
              <td className='area_id'>interpol</td>
              <td className='regiao_id'>interpol</td>
            </tr>

          </tbody >
        </table >

      </div >

    );
  }
}
