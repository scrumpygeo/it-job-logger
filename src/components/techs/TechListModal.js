import React, { useState, useEffect, Profiler } from 'react';
import { connect } from 'react-redux';
import TechItem from './TechItem';
import PropTypes from 'prop-types';
import { getTechs } from '../../actions/techActions';

const TechListModal = ({ getTechs, tech: { techs, loading } }) => {
  useEffect(() => {
    getTechs();
    // eslint-disable-next-line
  }, []); // pass [] so it just runs once

  return (
    <div id='tech-list-modal' className='modal'>
      <div className='modal-content'>
        <h4>Technician List</h4>
        <ul className='collection'>
          {!loading &&
            techs !== null &&
            techs.map(tech => <TechItem tech={tech} key={tech.id} />)}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  tech: state.tech // get entire state
});

TechListModal.propTypes = {
  tech: PropTypes.object.isRequired,
  getTechs: PropTypes.func.isRequired
};

export default connect(mapStateToProps, { getTechs })(TechListModal);
