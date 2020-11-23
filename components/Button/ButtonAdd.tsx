import styled from "styled-components";
import { SButtonAdd } from "../../styles/StyledElements";
const ButtonAdd = ({
  isInCart,
  addToCart,
}: {
  isInCart: boolean;
  addToCart: () => void;
}) => {
  return (
    <SButtonAdd type="button" onClick={() => addToCart()}>
      <span>Add </span>
      <svg
        className="addPlusIcon"
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="12"
        viewBox="0 0 12 12"
      >
        <g>
          <path d="M6 0c.385 0 .702.29.745.663L6.75.75v10.5c0 .414-.336.75-.75.75-.385 0-.702-.29-.745-.663l-.005-.087V.75C5.25.336 5.586 0 6 0z"></path>
          <path d="M11.25 5.25c.414 0 .75.336.75.75 0 .385-.29.702-.663.745l-.087.005H.75C.336 6.75 0 6.414 0 6c0-.385.29-.702.663-.745L.75 5.25h10.5z"></path>
        </g>
      </svg>
    </SButtonAdd>
  );
};

export default ButtonAdd;
