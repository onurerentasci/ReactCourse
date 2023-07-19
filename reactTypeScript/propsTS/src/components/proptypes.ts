export type instructorProps = {
  instructorNameLastName: { firstName: string; lastName: string };
};

export type instructorListType = {
  instructorNameLastNameList: { firstName: string; lastName: string }[];
};

export type RequestProps = {
  status: "loading" | "success" | "error"; // bu üç ifade dışında string kabul etmez
};

export type TakenData = {
  name: string;
  courseNumber: number;
  isBest?: boolean;
};
