import React from "react";
import { instructorListType } from "./proptypes";

function InstructorList(props: instructorListType) {
  return (
    <div>
      {props.instructorNameLastNameList.map((item, index) => {
        return (
          <h3 key={index}>
            {item.firstName} {item.lastName}
          </h3>
        );
      })}
    </div>
  );
}

export default InstructorList;
