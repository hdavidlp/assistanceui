import { Route, Routes } from "react-router-dom";
import RequestNewPeriod from "../Insert/RequestNewPeriod";
import Period from "../PeriodDetail/Period";
import { PeriodLayout } from "../PeriodLayout";
import PeriodsShortTable from '../ShortTableDetails/PeriodsShortTable'

export function PeriodRoutes (){
	return(
		<div className="container">
			
			<Routes>
				<Route index element={<PeriodsShortTable />} />
				<Route path=':id' element={<Period />} />
				<Route path='new' element={<RequestNewPeriod />} />


				{/* 
				This option is using when you render the PeriodLayout using
				the component Period Layout
				
				<Route element={<PeriodLayout />}>
					<Route index element={<PeriodsShortTable />} />
					<Route path=':id' element={<Period />} />
					<Route path='new' element={<RequestNewPeriod />} />
				</Route> */}
			</Routes>
		</div>
	)
}
 
