import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { Fund } from './model/fund';
import { LeadOrgUnit } from './model/leadOrgUnit';
import { PAASCode } from './model/PAASCode';
import { Project } from './model/project';
import { ProjectsService } from './services/project-services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'practicalAssesment';
  dataLoaded: boolean=false;
  private isLoading = new BehaviorSubject<boolean>(false);
  isLoading$ = this.isLoading.asObservable();


  leadOrgs: LeadOrgUnit[] = [];
  funds: Fund[] = [];
  paasCodes: PAASCode[] = [];

  projects: Project[] = [];

  selectedLeadOrg: LeadOrgUnit = { id: 0, orgUnitName: "" };
  selectedpassCode: PAASCode = { id: 0, paascodeName: "" };
  selectedfund: Fund = { id: 0, fundName: "" };
  projectToSave: Project = { approvalStatus: "", endDate: new Date, fund: { fundName: "", id: 0 }, id: 0, leadOrgUnit: { orgUnitName: "", id: 0 }, paascode: { paascodeName: "", id: 0 }, pagValue: 0, projectTitle: "", startDate: new Date, totalContribution: 0, totalExpenditure: 0, totalPsc: 0 };
  constructor(private httpService: ProjectsService) {

  }

  ngOnInit(): void {
    this.initPage();
    this.dataLoaded=true;
  }
  initPage(): void {
    this.isLoading.next(true);
    this.httpService.initPage()
      .subscribe(res => {
        console.log(res)
        /*if (res.developerMessage === "Deleted")
          this.floorUnits = this.floorUnits.filter(c => c.id != this.delFloorUnit.id);*/

        this.leadOrgs = res.leadOrgDta.leadorgs;
        this.funds = res.fundDta.funds;
        this.paasCodes = res.paasCodeDta.paascodes;

        this.projects = res.data.projects;


        //console.log(custToSave);
        this.isLoading.next(false);
        //this.dataLoaded = true;
        //document.getElementById('closeModalFL').click();

      })
  }

  saveProject(prjForm: NgForm): void {
    this.isLoading.next(true);
    this.projectToSave = prjForm.value as Project;

    this.projectToSave.fund = this.selectedfund;

    this.projectToSave.paascode = this.selectedpassCode;

    this.projectToSave.leadOrgUnit = this.selectedLeadOrg;

    console.log(this.projectToSave);

    this.httpService.createProject( this.projectToSave)
        .subscribe(res => {
          console.log(res)
          /*if (res.developerMessage === "Deleted")
            this.floorUnits = this.floorUnits.filter(c => c.id != this.delFloorUnit.id);*/
          this.projects.push(res.data.project);
          //console.log("+ + + + + + + + +");
          this.isLoading.next(false);
          prjForm.resetForm();
          
        });

  }

}
