import React from 'react';
import FormularioRegistro from '../components/FormularioRegistro';
import CargarCSV from '../components/CargarCSV';

const Dashboard = () => {
  return (
    <div>
      <h1>Panel de Control</h1>
      
      <FormularioRegistro />
      <CargarCSV />
      
      <h3>Dashboard de PowerBI:</h3>
      <div style={{ marginTop: '20px' }}>
        <iframe
          title="HACKATON"
          width="1024"
          height="1060"
          src="https://app.powerbi.com/view?r=eyJrIjoiNDE2M2Q3MTQtMzg0ZS00MjEzLWE5NWItOGVhMDg4Njg2ZmQ4IiwidCI6IjZjYTM0YWUxLTQ2NmYtNDRiYy1hN2FhLTBhYzVhNzhjNjFiMSIsImMiOjR9"
          frameBorder="0"
          allowFullScreen={true}
        ></iframe>
      </div>
    </div>
  );
};

export default Dashboard;
