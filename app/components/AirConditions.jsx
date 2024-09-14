import React from 'react';
function AirConditions() {
  return (
    <div class="air-conditions">
    <div class="condition1">
    <h1>Qualité de l'air : <b>Moyenne</b></h1>
        <div class="condition-item">
                <b><p> 🌡️   Ressenti</p></b>
                <h3>17°</h3>
        </div>
        <div class="condition-item">
                <b><p> 💧   Précipitations</p></b>
                <h3>0%</h3>
        </div>
    </div>
    <div class="condition2">
        <div class="condition-item">
                <b><p> 💨   Vent</p></b>
                <h3>0.2 km/h</h3>
        </div>
        <div class="condition-item">
                <b><p> ☀️ Indice UV</p></b>
                <h3>3</h3>
        </div>
    </div>
</div>
  );
}

export default AirConditions;