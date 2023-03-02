import logo from './logo.svg';
import { Link, Route, Routes } from 'react-router-dom';
//import './App.css';
import './CustomCSS.css';


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
import MainMenu from './Components/Shared/MainMenu/MainMenu';
import { AllInOneRoutes } from './Components/AllInOne/Routes/AllINOneRoutes';

function App() {
  return (
    <>
      <div id='main-container'>
        <header>
          <h1>Assistance</h1>
        </header>
        
        <MainMenu />
        
        <div className='clear-fix'></div>
      

        <section id='main-content'>
          <Routes>
            <Route path='/' element={<Welcome />} />
            <Route path='/periods/*' element={<PeriodRoutes />} />
            <Route path='/courses/*' element={<CourseRoutes />} />
            <Route path='/groups/*' element={<GroupRoutes />}/>
            <Route path='/students/*' element={<StudentRoutes />}/>
            <Route path='/allinone/*' element={<AllInOneRoutes />}/>

            {/*<Route path='/courses/*' element={<CoursesLayout />} />*/}

            {/* <Route path='/periods' element={<PeriodsShortTable />}/>
            <Route path='/periods/:id' element={<Period />}/>
            <Route path='/periods/new' element={<RequestNewPeriod />}/>
            <Route path='/groups' element={<GroupsShortTable />}/>
            <Route path='/courses' element={<CoursesShortTable />}/>
            <Route path='/students' element={<StudentsShortTable />}/> */}
            <Route path='*' element={<NotFound />}/>
          </Routes>

        </section>



        <div className='clear-fix'></div>

        <footer>
          Fin de la aplicacion
        </footer>
      </div>
      
      
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
