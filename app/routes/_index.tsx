import type { MetaFunction } from "@remix-run/node";
import RemixLogo from "~/assets/remix-logo-glowing-R.svg?react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <>
      <RemixLogo height={40} width={40} stroke="red" strokeWidth={10} />
      <div>index file datas test</div>
    </>
  );
}
