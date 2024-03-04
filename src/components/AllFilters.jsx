import React, { useEffect, useState } from 'react';
import CheckBox from './CheckBox';
import styles from './AllFilters.module.css';
import { useJobs } from '../contexts/JobsContext';

const AllFilters = ({ filters }) => {
  const { setJobFilters } = useJobs();
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleCheckboxChange = (id) => {
    const index = selectedFilters.indexOf(id);
    if (index === -1) {
      setSelectedFilters([...selectedFilters, id]);
    } else {
      const updatedFilters = [...selectedFilters];
      updatedFilters.splice(index, 1);
      setSelectedFilters(updatedFilters);
    }
  };

  useEffect(() => {
    const selectedFiltersObject = selectedFilters.reduce((acc, filterId) => {
      Object.keys(filters).forEach((category) => {
        const filter = filters[category].find((f) => f.id === filterId);
        if (filter) {
          if (!acc[category]) {
            acc[category] = [filter.label];
          } else {
            acc[category].push(filter.label);
          }
        }
      });
      return acc;
    }, {});

    setJobFilters(selectedFiltersObject);
  }, [filters, selectedFilters]);


  if (!filters) {
    return <div>No filters available</div>;
  }

  return (
    <div>
      <div className={styles.appliedFilters}>
        <p>Applied filters ( {selectedFilters.length} )</p>
      </div>
      {Object.keys(filters).map((sectionKey) => (
        <div key={sectionKey} className={styles.filterSection}>
          <div className={styles.hr} />
          <p>{sectionKey.toUpperCase()}</p>
          <div className={styles.checkboxSection}>
            {filters[sectionKey].map((filter) => (
              <CheckBox
                key={filter.id}
                id={filter.id}
                label={filter.label}
                checked={selectedFilters.includes(filter.id)}
                onChange={() => handleCheckboxChange(filter.id)}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllFilters;
