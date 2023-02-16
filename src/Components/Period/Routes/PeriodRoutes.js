import { Route, Routes } from "react-router-dom";
import RequestNewPeriod from "../Insert/RequestNewPeriod";
import Period from "../PeriodDetail/Period";
import { PeriodLayout } from "../PeriodLayout";
import PeriodsShortTable from '../ShortTableDetails/PeriodsShortTable'

export function PeriodRoutes (){
	return(
		<div className="container">
			<Routes>
				<Route element={<PeriodLayout />}>
					<Route index element={<PeriodsShortTable />} />
					<Route path=':id' element={<Period />} />
					<Route path='new' element={<RequestNewPeriod />} />
				</Route>
			</Routes>
		</div>
	)
}
 
