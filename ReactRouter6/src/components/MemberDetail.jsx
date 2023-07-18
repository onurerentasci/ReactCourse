import React from "react";
import { useParams } from "react-router-dom";

function MemberDetail() {
  const { memberID } = useParams();
  return <div>MemberDetail {memberID}</div>;
}

export default MemberDetail;
