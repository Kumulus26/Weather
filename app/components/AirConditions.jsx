import React from 'react';

function AirConditions() {
  return (
    <div className="air-conditions">
        <div className="condition1">
                <h1>Qualité de l'air : <b>Moyenne</b></h1>
                <div className="condition-item">
                        <b><p> 🌡️   Ressenti</p></b>
                        <h3>14°</h3>
                </div>
                <div className="condition-item">
                        <b><p> 💧   Précipitations</p></b>
                        <h3>0%</h3>
                </div>
        </div>
        <div className="condition2">
                <div className="condition-item">
                        <b><p> 💨   Vent</p></b>
                        <h3>3.6 km/h</h3>
                </div>
                <div className="condition-item">
                        <b><p> ☀️ Indice UV</p></b>
                        <h3>3</h3>
                </div>
        </div>
</div>
  );
}

export default AirConditions;