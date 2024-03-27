import Dashboard from "./dashboard/page";
import DefaultLayout from "./layout/page";


export default function Home() {
  return (
    <DefaultLayout>
      <Dashboard />
    </DefaultLayout>
  );
}
