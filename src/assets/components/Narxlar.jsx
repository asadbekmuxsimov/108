import React, { children, useState } from "react";
import useMyStore from "../../my-store";
import SortByDown02Icon from "../imgs/sort-by-down-02-stroke-rounded";
import SortByUp02Icon from "../imgs/sort-by-up-02-stroke-rounded";

function NarhlarProjekt({ name , title }) {
  const state = useMyStore();
  const { tartibi } = state;
  return (
    <div>
      <div className="flex justify-between gap-4 pb-5 select-none">
        <div
          onClick={() => {
            useMyStore.setState({
              currentSort: name,
              tartibi: !tartibi
            });
            console.log(name);
          }}
          className="flex items-center gap-3 cursor-pointer"
        >
          {title}
          <span className=" cursor-pointer">
            {state.currentSort === name ? (
              <>{tartibi ? <SortByDown02Icon /> : <SortByUp02Icon />}</>
            ) : null}
          </span>
        </div>
      </div>
    </div>
  );
}

export default NarhlarProjekt;
