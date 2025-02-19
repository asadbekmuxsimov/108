import React from "react"; 

const DashboardCircleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"} {...props}>
    <circle cx="17.75" cy="6.25" r="4.25" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="6.25" cy="6.25" r="4.25" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="17.75" cy="17.75" r="4.25" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="6.25" cy="17.75" r="4.25" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

export default DashboardCircleIcon;