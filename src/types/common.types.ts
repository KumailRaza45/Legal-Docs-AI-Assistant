export interface DataType {
  key: React.Key;
  email: string;
  firmName: string;
  status: boolean;
  inviteSentDate: string;
  joinedDate: string;
}

export enum InvitationTableTypes {
  LAW_FIRMS = "Law firms",
  LAW_FIRM_MEMBERS = "Law firm members",
  ATTORNEYS = "Attorneys",
}
