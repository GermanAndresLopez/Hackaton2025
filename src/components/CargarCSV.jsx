import React, { useState } from 'react';
import { cargarCSV } from '../services/registroApi';
import { toast } from 'react-toastify';

const CargarCSV = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      toast.error('Selecciona un archivo CSV');
      return;
    }
    const formData = new FormData();
    formData.append('file', file);
    try {
      const data = await cargarCSV(formData);
      toast.success(data.message);
      if (data.alertas.length > 0) {
        data.alertas.forEach(alerta => toast.warn(alerta));
      }
    } catch (error) {
      toast.error('Error al cargar CSV');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" accept=".csv" onChange={handleFileChange} />
      <button type="submit">Subir CSV</button>
    </form>
  );
};

export default CargarCSV;
