import React, { useState } from 'react';
import FormStyle, { FormControl, FormTitle, FormHour } from './Form.style';
import time from '../../../data/hours.json';
function Form() {
  return (
    <FormStyle>
      <form>
        <FormTitle>
          <h2>Diário de Saúde</h2>
          <p>Crie o seu relatório de saúde</p>
        </FormTitle>

        <FormControl>
          <label htmlFor="fullName">Nome completo:</label>
          <input type="text" name="fullName" />
        </FormControl>

        <FormControl>
          <label htmlFor="birthdate">Data de nascimento</label>
          <input type="text" name="birthdate" placeholder="dd/mm/aaaa" />
        </FormControl>

        <FormControl>
          <label htmlFor="meditionDay">
            Para qual dia você deseja gerar o gráfico de saúde?
          </label>
          <input type="text" name="meditionDay" placeholder="dd/mm/aaaa" />
        </FormControl>

        <FormHour>
          <p>Selecione a hora para preencher os dados</p>
          <div className="form__hours">
          {time.map((time) => (
            <button className="form__hour" key={time.time}>
              {time.time}
            </button>
          ))}
          </div>
        </FormHour>
        <input type="submit" value="Gerar Diário de Saúde" />
      </form>
    </FormStyle>
  );
}

export default Form;
