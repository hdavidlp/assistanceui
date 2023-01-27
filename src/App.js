import logo from './logo.svg';
//import './App.css';

import PeriodsShortTable from './Components/Period/ShortTableDetails/PeriodsShortTable'
import CoursesShortTable from './Components/Courses/ShortTableDetails/CoursesShortTable'
import GroupsShortTable from './Components/Groups/ShortTableDetails/GroupsShortTable'
import StudentsShortTable from './Components/Students/ShortTableDetails/StudentsShortTable';




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PeriodsShortTable />
        <GroupsShortTable />
        <CoursesShortTable />
        <StudentsShortTable />
      </header>
    </div>
  );
}

export default App;
