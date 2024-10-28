
import React, { useState } from "react";

const Home = () => {
	const [task, setTask] = useState("");
	const [tasks, setTasks] = useState([]);

	function addTask(e) { 
		if (e.key === "Enter" && task !== "") {
			setTasks([...tasks, task]);
			setTask(""); 
		}
	};

	function removeTask(id) {
		setTasks(tasks.filter((item, index) => index !== id));
	};

	return (
		<div className="container">
			<h1 className="text-center mt-5 title">Pendientes</h1>
			<div className="card">
				<div className="input-group">
					<input
						onChange={(e) => setTask(e.target.value)}
						onKeyDown={(e) => addTask(e)}
						value={task}
						type="text"
						className="form-control"
						aria-label="Sizing example input"
						aria-describedby="inputGroup-sizing-default"
						placeholder="Pendientes"
					/>
				</div>
				<div className="ms-3">
					{tasks.map((item, index) => {
						return (
							<div className="d-flex justify-content-between" key={item + index}>
								<li>{item}</li>
								<button className="btn me-3" onClick={() => removeTask(index)}>
									<i className="fas fa-window-close text-danger"></i> 
								</button>
							</div>
						);
					})}
				</div>
				<div className="card-footer">
					{tasks.length} Tareas
				</div>
			</div>
		</div>
	);
};

export default Home;


