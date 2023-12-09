import React, { useState } from 'react';
import { get } from 'lodash';
import './App.css';

function App() {
  const [fields, setFields] = useState([{ name: '', value: '' }]);

  const changeValue = (i, key, val) => {
    let tmpFields = fields.map((field, index) => {
      console.log(index, i)
      if (index === i) {
        field[key] = val;
        return field;
      }
      return field;
    });
    setFields(tmpFields);
  }

  const renderTable = (type) => {
    return (
      <div className='tableWrap'>
        <table cellPadding={0} cellSpacing={0} className='jTable'>
          <tbody>
            <tr>
              <td className='s'><textarea></textarea></td>
              <td className='s'><textarea></textarea></td>
              <td className='s'><textarea></textarea></td>
              <td className='s'><textarea></textarea></td>
            </tr>
            <tr>
              <td className='s'><textarea></textarea></td>
              <td colSpan={2} rowSpan={2}>{type === 1 ? 'இராசி' : 'அம்சம்'}</td>
              <td className='s'><textarea></textarea></td>
            </tr>
            <tr>
              <td className='s'><textarea></textarea></td>
              <td className='s'><textarea></textarea></td>
            </tr>
            <tr>
              <td className='s'><textarea></textarea></td>
              <td className='s'><textarea></textarea></td>
              <td className='s'><textarea></textarea></td>
              <td className='s'><textarea></textarea></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
  return (
    <div className="wrappper">
      <div className="printableArea">
        <div className="heading">அகரம் ஜோதிடம் (செந்தில் பட்டர்)</div>
        <div className="subHeading">Phone: 94431 20975</div>
        <div className="hr"></div>
        {fields.map((field, i) => {
          return (
            <div className="formRow" key={i}>
              <div className="left">
                <div className="desktop">
                  <input type="text" onChange={(e) => changeValue(i, 'name', e.target.value)} />
                </div>
                <div className="print">{get(field, 'name')}</div>
                <span className="colon">:</span>
              </div>
              <div className="right">
                <div className="desktop">
                  <input type="text" onChange={(e) => changeValue(i, 'value', e.target.value)} />
                </div>
                <div className="print">{get(field, 'value')}</div>
              </div>
            </div>
          );
        })}
        <div className='squareWrap'>
          <div className='left'>
            {renderTable(1)}
          </div>
          <div className='right'>
            {renderTable(2)}
          </div>
        </div>
      </div>
      <div className="pt-20px">
        <button className="button" onClick={() => setFields([...fields, { name: '', value: '' }])}>Add Row</button>
        <button className="button" onClick={() => window.print()}>Print</button>
      </div>
    </div>
  );
}

export default App;
