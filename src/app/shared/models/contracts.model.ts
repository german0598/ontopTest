interface status {
  code: String,
  text: String
}

export interface Contract {
  img: string;
  contractorName: string;
  type: string;
  startDate: Date;
  amount: number;
  status: status
}