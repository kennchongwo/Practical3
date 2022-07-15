import { Fund } from "./fund";
import { LeadOrgUnit } from "./leadOrgUnit";
import { PAASCode } from "./PAASCode";
import { Project } from "./project";
export interface CustomResponse {

    timeStamp: Date;
    statusCode: number;
    status: string;
    reason: String;
    message: string;
    developerMessage: string;

    data: { projects: Project[], project: Project };
    
    leadOrgDta: { leadorgs: LeadOrgUnit[], leadOrg?: LeadOrgUnit };

    fundDta: { funds: Fund[], fund?: Fund };

    paasCodeDta: { paascodes: PAASCode[], paasCode?: PAASCode };
}