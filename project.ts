import { Fund } from "./fund";
import { LeadOrgUnit } from "./leadOrgUnit";
import { PAASCode } from "./PAASCode";

export interface Project {
    id: number;
    projectTitle: string;
    paascode: PAASCode;
    fund: Fund;
    pagValue: number;
    approvalStatus: string;
    startDate: Date
    endDate: Date;
    leadOrgUnit: LeadOrgUnit;
    totalExpenditure: number;
    totalContribution: number;
    totalPsc: number;
}