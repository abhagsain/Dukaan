import styled from "styled-components";
export const IconHome = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    className="navbar-active-icon"
  >
    <path
      fill="#146EB4"
      fillRule="evenodd"
      d="M12.92 2.716l7.5 5.834c.366.284.58.72.58 1.184V20c0 1.105-.895 2-2 2h-3.46l.005-.09v-7.274l-.004-.155C15.461 13.098 14.313 12 12.909 12h-1.818l-.155.004c-1.384.08-2.481 1.228-2.481 2.632v7.273l.004.09L5 22c-1.105 0-2-.895-2-2V9.734c0-.463.214-.9.58-1.184l7.5-5.834c.54-.421 1.3-.421 1.84 0zm-.01 10.92l.108.006c.501.055.891.479.891.994v7.273l.005.09h-3.829l.006-.09v-7.273l.006-.109c.054-.5.478-.89.994-.89h1.818z"
    ></path>
  </svg>
);
export const IconCategories = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    className="navbar-active-icon"
  >
    <g
      fillRule="evenodd"
      strokeLinejoin="round"
      strokeWidth="1.8"
      transform="translate(3.004 3)"
    >
      <rect width="6.991" height="6.991" rx="0.5"></rect>
      <rect width="6.991" height="6.991" x="10.983" rx="0.5"></rect>
      <g transform="translate(0 11.033)">
        <rect width="6.991" height="6.991" rx="0.5"></rect>
        <rect width="6.991" height="6.991" x="10.983" rx="0.5"></rect>
      </g>
    </g>
  </svg>
);
export const IconBag = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    className="navbar-inactive-icon"
  >
    <g strokeWidth="0">
      <path d="M18 1.15H6c-.268 0-.52.126-.68.34l-3 4c-.11.147-.17.326-.17.51v14c0 1.574 1.276 2.85 2.85 2.85h14c1.574 0 2.85-1.276 2.85-2.85V6c0-.184-.06-.363-.17-.51l-3-4c-.16-.214-.412-.34-.68-.34zm-.425 1.7l2.575 3.433V20c0 .635-.515 1.15-1.15 1.15H5l-.125-.007c-.576-.062-1.025-.55-1.025-1.143V6.282L6.424 2.85h11.151z"></path>
      <path d="M21 5.15c.47 0 .85.38.85.85 0 .433-.324.79-.743.843L21 6.85H3c-.47 0-.85-.38-.85-.85 0-.433.324-.79.743-.843L3 5.15h18zM16 9.15c.47 0 .85.38.85.85 0 2.679-2.171 4.85-4.85 4.85S7.15 12.679 7.15 10c0-.47.38-.85.85-.85s.85.38.85.85c0 1.74 1.41 3.15 3.15 3.15s3.15-1.41 3.15-3.15c0-.47.38-.85.85-.85z"></path>
    </g>
  </svg>
);
export const IconOrders = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    className="navbar-inactive-icon"
  >
    <g strokeWidth="0">
      <path d="M2.752 18c.858 0 1.553.695 1.553 1.552 0 .858-.695 1.553-1.553 1.553-.857 0-1.552-.695-1.552-1.553 0-.857.695-1.552 1.552-1.552zm18.99.452c.608 0 1.1.493 1.1 1.1 0 .567-.429 1.034-.98 1.094l-.12.006h-13c-.607 0-1.1-.492-1.1-1.1 0-.567.43-1.033.98-1.093l.12-.007h13zM2.752 10.5c.858 0 1.553.695 1.553 1.552 0 .858-.695 1.553-1.553 1.553-.857 0-1.552-.695-1.552-1.553 0-.857.695-1.552 1.552-1.552zm18.99.452c.608 0 1.1.493 1.1 1.1 0 .567-.429 1.034-.98 1.094l-.12.006h-13c-.607 0-1.1-.492-1.1-1.1 0-.567.43-1.033.98-1.093l.12-.007h13zM2.752 3c.858 0 1.553.695 1.553 1.552 0 .858-.695 1.553-1.553 1.553-.857 0-1.552-.695-1.552-1.553C1.2 3.695 1.895 3 2.752 3zm18.99.452c.608 0 1.1.493 1.1 1.1 0 .567-.429 1.034-.98 1.094l-.12.006h-13c-.607 0-1.1-.492-1.1-1.1 0-.567.43-1.033.98-1.093l.12-.007h13z"></path>
    </g>
  </svg>
);
export const IconMinus = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="2"
      viewBox="0 0 12 2"
    >
      <line
        x2="10"
        y1="1"
        y2="1"
        fill="none"
        stroke="#146EB4"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
        transform="translate(1)"
      ></line>
    </svg>
  );
};
export const IconPlus = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={12}
      height={12}
      viewBox="0 0 12 12"
    >
      <g fill="#146EB4">
        <path d="M6 0a.75.75 0 01.745.663L6.75.75v10.5a.75.75 0 01-1.495.087l-.005-.087V.75A.75.75 0 016 0z" />
        <path d="M11.25 5.25a.75.75 0 01.087 1.495l-.087.005H.75a.75.75 0 01-.087-1.495L.75 5.25h10.5z" />
      </g>
    </svg>
  );
};
export const OuterContainer = styled.div`
  padding: 0 1rem;
  width: 100%;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
`;
export const LeftArrow = () => (
  <svg
    className="prefix__mr-1 prefix__mt-md-1 prefix__ml-md-0"
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
  >
    <g
      fill="none"
      fillRule="evenodd"
      stroke="#353535"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path d="M10.02 3.225l-8.36 8.55 8.36 8.55M1.66 11.775h21.12" />
    </g>
  </svg>
);
export const IconCategory = () => (
  <svg width={24} height={24} viewBox="0 0 24 24" className="details-icon">
    <g
      fill="none"
      fillRule="evenodd"
      strokeLinejoin="round"
      strokeWidth={1.8}
      transform="translate(3.004 3)"
    >
      <rect width={6.991} height={6.991} rx={0.5} />
      <rect width={6.991} height={6.991} x={10.983} rx={0.5} />
      <g transform="translate(0 11.033)">
        <rect width={6.991} height={6.991} rx={0.5} />
        <rect width={6.991} height={6.991} x={10.983} rx={0.5} />
      </g>
    </g>
  </svg>
);
export const IconCart = () => (
  <svg width={24} height={24} viewBox="0 0 24 24" className="details-icon">
    <g strokeWidth={0}>
      <path d="M18 1.15H6a.849.849 0 00-.68.34l-3 4a.852.852 0 00-.17.51v14A2.85 2.85 0 005 22.85h14A2.85 2.85 0 0021.85 20V6a.852.852 0 00-.17-.51l-3-4a.849.849 0 00-.68-.34zm-.425 1.7l2.575 3.433V20A1.15 1.15 0 0119 21.15H5l-.125-.007A1.15 1.15 0 013.85 20V6.282L6.424 2.85h11.151z" />
      <path d="M21 5.15a.85.85 0 01.107 1.693L21 6.85H3a.85.85 0 01-.107-1.693L3 5.15h18zm-5 4c.47 0 .85.38.85.85a4.85 4.85 0 11-9.7 0 .85.85 0 111.7 0 3.15 3.15 0 106.3 0c0-.47.38-.85.85-.85z" />
    </g>
  </svg>
);
export const IllustrationNotFound = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={216}
    height={128}
    viewBox="0 0 216 128"
  >
    <g fill="none" fillRule="evenodd">
      <path
        fill="#EE741F"
        d="M119 29a7 7 0 110 14h64a7 7 0 110 14h22a7 7 0 110 14h-19a7 7 0 100 14h6a7 7 0 110 14h-52a7.056 7.056 0 01-1.5-.161A7.056 7.056 0 01137 99H46a7 7 0 110-14H7a7 7 0 110-14h40a7 7 0 100-14H22a7 7 0 110-14h40c-3.866 0-1.033-3.134-1.033-7s5.799-5.67 9.665-5.67L119 29zm90 56a7 7 0 110 14 7 7 0 010-14z"
        opacity={0.1}
      />
      <g
        fill="#FFF"
        stroke="#EE741F"
        strokeLinecap="round"
        strokeWidth={2.75}
        transform="translate(54 6)"
      >
        <circle cx={52.8} cy={52.8} r={52.8} />
        <path d="M107.134 115.086L86.79 94.49" />
        <path
          d="M30.03 80.751C35.134 72.892 43.66 68.2 52.843 68.2c9.121 0 17.618 4.641 22.727 12.419-11.525-17.652-35.748-15.496-45.54.132zM77.55 47.3c-5.468 0-9.9-4.432-9.9-9.9h19.8c0 5.468-4.432 9.9-9.9 9.9h0zm-59.4-9.9h19.8c0 5.468-4.432 9.9-9.9 9.9s-9.9-4.432-9.9-9.9h0z"
          strokeLinejoin="round"
        />
      </g>
    </g>
  </svg>
);
