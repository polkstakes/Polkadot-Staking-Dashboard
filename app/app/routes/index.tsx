import type { MetaFunction } from "remix";
import { ValidatorsDashboard } from "~/components/ValidatorsDashboard";


export let meta: MetaFunction = () => {
  return {
    title: "Remix Starter",
    description: "Welcome to remix!"
  };
};

export default function Index() {
  return (
    <div className="remix__page">
      <ValidatorsDashboard />
    </div>
  );
}
