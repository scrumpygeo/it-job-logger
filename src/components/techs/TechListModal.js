import React, { useState, useEffect } from 'react';
import TechItem from './TechItem';

const TechListModal = () => {
  // create our state
  const [techs, setTechs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getTechs();
    // eslint-disable-next-line
  }, []); // pass [] so it just runs once

  const getTechs = async () => {
    setLoading(true);

    const res = await fetch('/techs');
    const data = await res.json(); // formats and gives us the data

    setTechs(data); // the action.
    setLoading(false);
  };

  return (
    <div id='tech-list-modal' className='modal'>
      <div className='modal-content'>
        <h4>Technician List</h4>
        <ul className='collection'>
          {!loading &&
            techs.map(tech => <TechItem tech={tech} key={tech.id} />)}
        </ul>
      </div>
    </div>
  );
};

export default TechListModal;
