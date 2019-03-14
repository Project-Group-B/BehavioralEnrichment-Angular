import { SpeciesInfo } from './species-info';
import { DepartmentInfo } from './department-info';
import { PartialUserInfo } from './partial-user-info';

export interface CompleteRequestForm {
  department: DepartmentInfo;
  species: SpeciesInfo;
  housed: string;
  activityCycle: string;
  age: string;

  itemId: number;
  enrichmentName: string;
  enrichmentDayNightTime: string;
  enrichmentDescription: string;
  enrichmentFrequency: string;
  enrichmentPresentation: string;

  anotherDeptZoo: boolean;
  anotherDeptZooMoreInfo: boolean;
  lifeStrategiesWksht: boolean;
  safetyComment: string;
  safetyQuestion: boolean;
  risksQuestion: boolean;

  naturalBehaviors: string;

  enrichmentCategory: string[];
  nameOfSubmitter: PartialUserInfo;
  otherSource: string;
  source: string;
  timeRequired: string;
  volunteerDocentUtilized: boolean;
  whoConstructs: string;
  dateOfSubmission: Date;
}
