import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/RoleSelect.css';

function RoleSelect() {
  const navigate = useNavigate();

  const handleSelect = (role) => {
    navigate(`/register?role=${role}`);
  };

  return (
    <div className="role-container">
      <h1>Join eHandicrafts</h1>
      <p>Select how you want to continue</p>

      <div className="role-cards">
        <div className="card" onClick={() => handleSelect('buyer')}>
          <h2>🛍️ Buyer</h2>
          <p>Browse & purchase beautiful handicrafts</p>
        </div>

        <div className="card" onClick={() => handleSelect('seller')}>
          <h2>🏪 Merchant</h2>
          <p>Sell your handmade products online</p>
        </div>
      </div>
    </div>
  );
}

export default RoleSelect;