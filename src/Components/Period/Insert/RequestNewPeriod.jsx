import React  from "react";
import { useState, useEffect } from "react";
import _defaultMaxTime, {_APIAssistence} from '../../../API/APIConfig'
import '../../css/baseExtra.css'
import "bootstrap/dist/css/bootstrap.min.css"
import axios from "axios";


const MonthNotSelected = 'Month not Selected'
const unassigned = "???"

const initValues = {
	longDescription: unassigned,
	shortDescription: unassigned
}


const RequestNewPeriod =()=>{

	const [fromMonth, setFromMonth] = useState(MonthNotSelected)
	const [toMonth, setToMonth] = useState(MonthNotSelected)
	const [toYear, setToYear]= useState('2023')
	const [data, setData] = useState(initValues)
	const [isReadyToSave, setReadyToSave] = useState(false)
	const [isSaving, setSaving] = useState(false)

	function simulateNetworkRequest() {
		return new Promise((resolve) => setTimeout(resolve, 2000));
	}

	useEffect (()=>{

		if (isSaving){
			setReadyToSave(false)
			simulateNetworkRequest().then(()=>{
				Save()
			})
		}

	},[isSaving])

	const Save = () =>{
		axios.post(_APIAssistence + 'Period',{
			shortDescription: data['shortDescription'],
			longDescription : data['longDescription']
		})
		.then(()=>{
			console.log('salvado')
			setSaving(false)
		})
		.catch(()=>{
			console.log('error en guarar')
			setSaving(false)
		})
	}

	const handleSave = () =>{
		setSaving(true)
	}

	const handleChange = (e) => {
		const { name, value } = e.target
		console.log(value)

		setData((current) => ({
			...current, ...{ [name]: value }
		}))
	}

	function applyFormatDescription(initMonth, endMonth, year){

		setReadyToSave(initMonth!==MonthNotSelected && endMonth !==MonthNotSelected)

		if (initMonth===MonthNotSelected) initMonth = unassigned
		if (endMonth===MonthNotSelected)  endMonth  = unassigned
		if (initMonth === unassigned )

		console.log(initMonth, endMonth, unassigned )
		
		const longDescription = 
					initMonth + ' - ' + endMonth +  ' ' + year
		const shortDescription = 
					initMonth.substring(0,3) + ' - ' + endMonth.substring(0,3) +  ' ' + year.substring(-2)

		setData({
			['longDescription']: longDescription,
			['shortDescription']: shortDescription 
		})
	}

	const handleChangeFromMonth = (e) => {
		const { name, value } = e.target
		setFromMonth(value)
		applyFormatDescription(value.toString(), toMonth, toYear)
	}

	const handleChangeToMonth = (e) => {
		const { name, value } = e.target
		setToMonth(value)
		applyFormatDescription(fromMonth, value.toString(), toYear)
	}

	const handleChnageToYear =(e)=>{
		const { name, value } = e.target
		setToYear(value)
		applyFormatDescription(fromMonth, toMonth, value.toString())
	}

	const selectAll =(e)=>{
    e.target.select()
  }

	

	return (
		<div className="request-container" >
			<div className="request-head-container">Request a new Period</div>
			<div className="request-body-container">
				<form>
					<div className="mb-3">
						<label className="form-label">From month</label>
						<select className="form-select" aria-label="Default select example"
							onChange={handleChangeFromMonth}>
							<option >{MonthNotSelected}</option>
							<option value="January" >January</option>
							<option value="February">February</option>
							<option value="March">March</option>
							<option value="April">April</option>
							<option value="May">May</option>
							<option value="June">June</option>
							<option value="July">July</option>
							<option value="August">August</option>
							<option value="September">September</option>
							<option value="October">October</option>
							<option value="November">November</option>
							<option value="December">December</option>
						</select>
					</div>

					<div className="mb-3">
						<label  className="form-label">To month</label>
							<select className="form-select" aria-label="Default select example"
							onChange={handleChangeToMonth}>
								<option >{MonthNotSelected}</option>
								<option value="January" >January</option>
								<option value="February">February</option>
								<option value="March">March</option>
								<option value="April">April</option>
								<option value="May">May</option>
								<option value="June">June</option>
								<option value="July">July</option>
								<option value="August">August</option>
								<option value="September">September</option>
								<option value="October">October</option>
								<option value="November">November</option>
								<option value="December">December</option>
							</select>
					</div>

					<div className="mb-3">
						<label  className="form-label">Year</label>
						<select className="form-select" aria-label="Default select example"
						onChange={handleChnageToYear}>
							<option value="2023" >2023</option>
							<option value="2024">2024</option>
						</select>
					</div>

					<div className="mb-3">
						<label  className="form-label">Short Description</label>
						<input 
						type= "text" 
						className="form-control" 
						id="shortDescription" 
						placeholder="MMM-MMM YY"

						name = 'shortDescription'
						value={data['shortDescription']} 
						onFocus={selectAll}
						onChange={handleChange}>
						</input>
					</div>

					<div className="mb-3">
						<label  className="form-label">Long Description</label>
						<input 
						type= "text" 
						className="form-control" 
						id="longDescription" 
						placeholder="MMMM-MMMM YYYY"
						name = 'longDescription'
						value={data['longDescription']} 
						onFocus={selectAll}
						onChange={handleChange}>
						</input>
					</div>

					<div >
						<button type="button" className="btn btn-primary"	onClick={handleSave}
							disabled = {!isReadyToSave} >
							Sav{isSaving ? 'ing ...':'e'} 
						</button>
					</div>
				</form>
			</div>
		</div>
  )
}


export default  RequestNewPeriod