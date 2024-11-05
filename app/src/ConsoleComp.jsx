export default function ConsoleComp({ buildSuccess, errorOnLine }) {
	return (
		<div className=" sm:w-3/4 p-4 mb-4 text-white text-xl font-mono flex items-center bg-[#212630] h-16 mt-4 sm:ml-4 rounded-md">
			{buildSuccess ? (
				<h1 className="text-green-500">Assembling the program...</h1>
			) : errorOnLine !== null ? (
				<h1 className="text-red-500">Error on line {errorOnLine + 1}</h1>
			) : (
				<h1>Console output</h1>
			)}
		</div>
	);
}
