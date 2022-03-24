import React, { useState } from 'react';
import FormStyle, { 
  FormControl, 
  FormTitle, 
  FormHour, 
  FormBPM } 
  from './Form.style';
import time from '../../../data/hours.json';
import iconBPM from '../../assets/images/iconbpm.png' 
import iconPA from '../../assets/images/icon.png' 
import formFields from '../../assets/utils/formFields';
import Axios from 'axios';

function Form() {
	const [inputs, setInputs] = useState({
		name: '',
		birthday: '',  
	});

  function showBPM() {
    const buttons = document.querySelectorAll('.form__hour')
    buttons.forEach(button => {
      button.addEventListener('click', function() {
        button.classList.toggle('active')
      })
    })
  }

  const [metrics, setMetrics] = useState({
    meditionDay: '',
    bpm: 0,
    arterialSystolic: 0,
    arterialDiastole: 0,
  })

  const handleMetricSubmit = (event) => {
    event.preventDefault()
    console.log(metrics)
    Axios.post('http://localhost:3001/metrics', metrics)
  }

  const handleMetricChange = (event) => {
    metrics[event.target.name] = event.target.value;
	  setMetrics(metrics);
  }

	const handleFormSubmit = (e) => {
		e.preventDefault();
      console.log(inputs)
    Axios.post('http://localhost:3001/register', inputs)  
	};

	const handleInputChange = (event) => {
		inputs[event.target.name] = event.target.value;
		setInputs(inputs);
	};

  return (
		<FormStyle>
			<form onSubmit={handleFormSubmit}>
				<FormTitle>
					<h2>Diário de Saúde</h2>
					<p>Crie o seu relatório de saúde</p>
				</FormTitle>

				{formFields.map(({ id, label, type, placeholder, name }) => (
					<FormControl key={id}>
						<label id={id}>{label}</label>
						<input
							type={type}
							id={id}
							name={name}
							placeholder={placeholder}
							onChange={handleInputChange}
						/>
					</FormControl>
				))}
				<FormHour onSubmit={handleMetricSubmit}>
          <label id="meditionDay">
            Para qual dia você deseja gerar o gráfico de saúde?
          </label>
          <input 
          type="text" 
          name="meditionDay" 
          id="meditionDay" 
          onChange={handleMetricChange} 
          />

					<p>Selecione a hora para preencher os dados</p>
					<div className="form__hours">
						{time.map((time) => (
              <div className="form__hour" key={time.time} onClick={showBPM}>
								{time.time}
							</div>
						))}
					</div>
              <FormBPM>
                <div className="form__bpm">
                  <div className="form__wrapper">
                    <div className="form__image">
                    <img src={iconBPM} alt="" />
                    <span>BPM:</span>
                    </div>
                    <input type="number" name="bpm" id="bpm" />
                  </div>

                  <div className="form__wrapper">
                    <div className="form__image">
                      <img src={iconPA} alt="" />
                      <span>PRESSÃO ARTERIAL</span>
                    </div>
                    <input type="number" />
                    <input type="number" />
                  </div>
                </div>
              </FormBPM>
				</FormHour>

		<input type="submit" value="Gerar Diário de Saúde" />
			</form>
		</FormStyle>
	);
}

export default Form;
