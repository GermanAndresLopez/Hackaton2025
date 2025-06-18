import React, { useState } from 'react';
import { cargarCSV } from '../services/registroApi';
import { toast } from 'react-toastify';

const CargarCSV = () => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile.size > 10000 * 1024 * 1024) { 
        toast.error('El archivo no puede superar los 10Gb');
        setFile(null);
        e.target.value = ''; 
      } else {
        setFile(selectedFile);
      }
    }
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
      setLoading(true);
      const data = await cargarCSV(formData);
      toast.success(data.message);

      if (data.alertas?.length > 0) {
        data.alertas.forEach(alerta => toast.warn(alerta));
      }
    } catch (error) {
      console.error('Error al subir el CSV:', error);
      
    } finally {
      setLoading(false);
      setFile(null);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="file"
        accept=".csv"
        onChange={handleFileChange}
        disabled={loading}
      />
      <button type="submit" disabled={!file || loading}>
        {loading ? 'Subiendo...' : 'Subir CSV'}
      </button>
    </form>
  );
};

export default CargarCSV;
