import { SpeciesInfo } from './species-info';
import { DepartmentInfo } from './department-info';
import { PartialUserInfo } from './partial-user-info';

export interface CompleteRequestForm {
  department: DepartmentInfo;
  species: SpeciesInfo;
  animal: number;

  itemId: number;
  enrichmentName: string;
  enrichmentDayNightTime: string;
  enrichmentDescription: string;
  enrichmentFrequency: string;
  enrichmentPresentationMethod: string;

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
