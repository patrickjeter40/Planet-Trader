export default function orbitalMinMax() {

  return (
    <div className='mw-200'>
      <h4 className='m-0 mb-15'>Orbital Period in Days:</h4>
      <div className='d-flex justify-between'>
        <TextField
          id="outlined-error-helper-text"
          label="Min"
          type= 'number'
          name='orbit-min'
          value={searchOrbitMinValue}
          onChange={handleOrbMinChange}
          onKeyPress={handleKeyPress}
          size='small'
        />
        <TextField
          id="outlined-error-helper-text"
          label="Max"
          type= 'number'
          name='orbit'
          value={searchOrbitMaxValue}
          onChange={handleOrbMaxChange}
          onKeyPress={handleKeyPress}
          size='small'
        />
      </div>
    </div>

  );
}