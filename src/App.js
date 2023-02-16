import logo from './logo.svg';
import { Link, Route, Routes } from 'react-router-dom';
//import './App.css';


import CoursesShortTable from './Components/Courses/ShortTableDetails/CoursesShortTable'
import GroupsShortTable from './Components/Groups/ShortTableDetails/GroupsShortTable'
import StudentsShortTable from './Components/Students/ShortTableDetails/StudentsShortTable';



import RequestNewPeriod from './Components/Period/Insert/RequestNewPeriod';
import RequestNewCourse from './Components/Courses/Insert/RequestNewCourse';
import StudentShortDetailRow from './Components/Students/ShortTableDetails/TableDetails/StudentShortDetailRow';



import Period from './Components/Period/PeriodDetail/Period';

import NotFound from './Components/NotFound/NotFound';
import { PeriodLayout } from './Components/Period/PeriodLayout.js';
import Welcome from './Components/Home/Welcome';
import { PeriodRoutes } from './Components/Period/Routes/PeriodRoutes';
import { CourseRoutes } from './Components/Courses/Routes/CourseRoutes';
import { GroupRoutes } from './Components/Groups/Routes/GroupRoutes';
import { StudentRoutes } from './Components/Students/Routes/StudentRoutes';

function App() {
  return (
    <>
      <nav>
        <ul>
          <li><Link to={'/'}>Home</Link> </li>
          <li> <Link to={'/periods'}>Periods</Link></li>
          <li><Link to={'/courses'}>Courses</Link></li>
          <li><Link to={'/groups'}>Groups</Link></li>
          <li><Link to={'/students'}>Students</Link></li>
          <li><Link to={'/students'}>Extra</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/periods/*' element={<PeriodRoutes />} />
        <Route path='/courses/*' element={<CourseRoutes />} />
        <Route path='/groups/*' element={<GroupRoutes />}/>
        <Route path='/students/*' element={<StudentRoutes />}/>



        {/*<Route path='/courses/*' element={<CoursesLayout />} />*/}

        {/* <Route path='/periods' element={<PeriodsShortTable />}/>
        <Route path='/periods/:id' element={<Period />}/>
        <Route path='/periods/new' element={<RequestNewPeriod />}/>
        <Route path='/groups' element={<GroupsShortTable />}/>
        <Route path='/courses' element={<CoursesShortTable />}/>
        <Route path='/students' element={<StudentsShortTable />}/> */}
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <RequestNewCourse />
    //     <CoursesShortTable />

    //     <RequestNewPeriod />
    //     <PeriodsShortTable />
    //     {/*<GroupsShortTable />
    //     <CoursesShortTable />
    //     <StudentsShortTable /> */}
    //   </header>
    // </div>
  );
}

export default App;
