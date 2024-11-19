import { useEffect, useState } from "react";
import { toast } from "react-toastify";
const useGetTask = (id, setTask) => {
	const getTask = () => {
		fetch(`${import.meta.env.VITE_BACKEND_URL}/api/task/${id}`, {
			method: "GET",
			headers: { "Content-Type": "application/json" },
		})
			.then((response) => response.json())
			.then((json) => {
				if (json?.message === "success") {
					setTask(json.data);
				} else {
					toast.error("Something went wrong");
				}
			})
			.catch((error) => {
				console.error("Error:", error);
				toast.error("Something went wrong");
			});
	};
	useEffect(() => {
		getTask();
	}, []);
};

export default useGetTask;