import React, { useState } from 'react';
import { agregarRegistro } from '../services/registroApi';
import { toast } from 'react-toastify';

const FormularioRegistro = () => {
  const [formData, setFormData] = useState({
    Fecha: '',
    Temperatura_C: '',
    Voltaje_V: '',
    Eficiencia_Porcentaje: '',
    Alarma: 0,
    Tipo_Alarma: '',
    Alarma_Calculada: 0
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await agregarRegistro(formData);
      toast.success(data.message);
      if (data.alerta) toast.warn(data.alerta);
    } catch (error) {
      toast.error('Error al agregar registro');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="Fecha" type="date" onChange={handleChange} required /><br />
      <input name="Temperatura_C" type="number" placeholder="Temperatura" onChange={handleChange} required /><br />
      <input name="Voltaje_V" type="number" placeholder="Voltaje" onChange={handleChange} required /><br />
      <input name="Eficiencia_Porcentaje" type="number" placeholder="Eficiencia %" onChange={handleChange} required /><br />
      <input name="Alarma" type="number" placeholder="Alarma (0 o 1)" onChange={handleChange} required /><br />
      <input name="Tipo_Alarma" type="text" placeholder="Tipo Alarma" onChange={handleChange} required /><br />
      <input name="Alarma_Calculada" type="number" placeholder="Alarma Calculada (0 o 1)" onChange={handleChange} required /><br />
      <button type="submit">Agregar Registro</button>
    </form>
  );
};

export default FormularioRegistro;
