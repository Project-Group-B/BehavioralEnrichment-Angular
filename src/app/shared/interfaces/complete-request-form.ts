import { SpeciesInfo } from './species-info';
import { DepartmentInfo } from './department-info';
import { PartialUserInfo } from './partial-user-info';

export interface CompleteRequestForm {
  department: DepartmentInfo;
  species: SpeciesInfo;
  animalId: number;

  itemId: number;
  enrichmentName: string;
  enrichmentDescription: string;
  enrichmentLocation: number;
  enrichmentPresentationMethod: string;
  enrichmentDayNightTime: string;
  enrichmentFrequency: number;

  lifeStrategiesWksht: boolean;
  anotherDeptZoo: boolean;
  anotherDeptZooMoreInfo: boolean;
  safetyQuestion: boolean;
  risksQuestion: boolean;
  safetyComment: string;

  naturalBehaviors: string;

  source: string;
  otherSource: string;
  timeRequired: number;
  whoConstructs: string;
  volunteerDocentUtilized: boolean;
  enrichmentCategory: string;
  nameOfSubmitter: PartialUserInfo;
  dateOfSubmission: Date;
}
