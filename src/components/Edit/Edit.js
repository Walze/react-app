import React, { Component } from 'react';

export default class Edit extends Component {
  render() {
    return (
      <div class="container">
        <h3>Editar</h3>
        <br />
        <div class='row'>

          <div class="form-group col-6">
            <label>Nome</label>
            <input type="text" class="form-control form-control-sm" />
          </div>

          <div class="form-group col-6">
            <label>Email</label>
            <input type="email" class="form-control form-control-sm" placeholder="exemplo@telelistas.net" />
          </div>

          <div class="form-group col-6">
            <label>Área</label>
            <select name='area' class="form-control form-control-sm">
              <option value='0' disabled selected>Escolha uma Área</option>

            </select>
          </div>


          <div class="form-group col-6">
            <label>Região</label>
            <select class="form-control form-control-sm">
              <option value='0' disabled selected>Escolha uma Região</option>

            </select>
          </div >

          <div class="form-group col-6">
            <label>Prova</label>
            <select class="form-control form-control-sm" >
              <option value='0' disabled selected>Resultado</option>
              <option value="1">Desistente</option>
              <option value="2">Aprovado</option>
              <option value="3">Reprovado</option>
              <option value="4">Faltou</option>
            </select>
          </div >

          <div class="form-group col-6">
            <label>Prova prática</label>
            <select class="form-control form-control-sm">
              <option value='0' disabled selected>Selecione caso houver</option>
              <option value="null">Sem prova prática</option>
              <option value="1">Desistente</option>
              <option value="2">Aprovado</option>
              <option value="3">Reprovado</option>
              <option value="4">Faltou</option>
            </select>
          </div >

          <div class="form-group col-6">
            <label>Entrevista RH</label>
            <select class="form-control form-control-sm">
              <option value='0' disabled selected>Resultado</option>
              <option value="1">Desistente</option>
              <option value="2">Aprovado</option>
              <option value="3">Reprovado</option>
              <option value="4">Faltou</option>
            </select>
          </div >

          <div class="form-group col-6">
            <label>Entrevista Gestor</label>
            <select class="form-control form-control-sm">
              <option value='0' disabled selected>Resultado</option>
              <option value="1">Desistente</option>
              <option value="2">Aprovado</option>
              <option value="3">Reprovado</option>
              <option value="4">Faltou</option>
            </select>
          </div >

          <div class="form-group col-6">
            <label>Criado</label>
            <input disabled type="text" class="form-control form-control-sm" />
          </div>

          <div class="form-group col-6">
            <label>Última atualização</label>
            <input disabled type="text" class="form-control form-control-sm" />
          </div>


          <div class="form-group col-12">
            <label for="exampleFormControlTextarea1">Observações</label>
            <textarea placeholder="Digite uma observação caso necessário" class="form-control form-control-sm" id="exampleFormControlTextarea1"
              rows="3"></textarea>
          </div >

          <div class="form-check col-6">
            <label class="form-check-label">
              <input type="checkbox" class="form-check-input" /> Contactado
          </label>
          </div>

          <br />
          <br />

          <div class="col-12 row form-group">
            <div class="col-1">
              <button type="submit" class="btn btn-primary">Enviar</button>
            </div>
            <div class="col-10"></div>
            <div class="col-1">
              <button type="submit" class="btn btn-danger">Deletar</button>
            </div>
          </div>


        </div >

      </div >

    );
  }
}