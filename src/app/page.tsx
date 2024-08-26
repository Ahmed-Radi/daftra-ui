import JobSidebar from "@/app/_components/jobSidebar/JobSidebar";
import JobDetails from "@/app/_components/mainContent/JobDetails";
import Sidebar from "./_components/sidebar/Sidebar";

export default function Home() {
	return (
		<main className={`lg:px-5 lg:p-0 p-5 grid grid-cols-[1fr] lg:grid-cols-[1fr_2fr_1.5fr] md:grid-cols-[1fr_2fr] gap-2.5 md:gap-y-2.5`}>
			<Sidebar />
      <JobDetails />
      <JobSidebar />
		</main>
	);
}