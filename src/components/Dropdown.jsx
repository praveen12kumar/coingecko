import React  from 'react';

const Dropdown = ({days, setDays}) => {
  

  const handleChange = (event) => {
    setDays(event.target.value);
  };

  return (
    <div className='flex items-center gap-4'>
      <label className='text-xl font-poppins font-medium' htmlFor="daysDropdown">Price Change in the last </label>
      <select className='text-md font-nunito border border-slate-600 px-4 py-1 rounded-md' id="daysDropdown" value={days} onChange={handleChange}>
        <option value="7">7 days</option>
        <option value="30">30 days</option>
        <option value="60">60 days</option>
        <option value="90">90 days</option>
      </select>
    </div>
  );
};

export default Dropdown;
