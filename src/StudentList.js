import React from 'react';

function StudentList(props) {
  const { students } = props;

  return (
    <ul style={styles.list}>
      {students.map((student) => (
        <li key={student} style={styles.listItem}>{student}</li>
      ))}
    </ul>
  );
}

const styles = {
  list: {
    listStyleType: 'disc',
    marginLeft: '20px',
  },
  listItem: {
    marginBottom: '5px',
  },
};

export default StudentList;
