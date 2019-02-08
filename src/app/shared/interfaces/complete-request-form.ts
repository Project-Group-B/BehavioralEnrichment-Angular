export interface CompleteRequestForm {
  department: string;
  species: string;
  housed: string;
  activityCycle: string;
  age: string;

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

  naturalBehaviors: string;

  enrichmentCategory: string[];
  nameOfSubmitter: string;
  otherSource: string;
  source: string;
  timeRequired: string;
  volunteerDocentUtilized: boolean;
  whoConstructs: string;
  dateOfSubmission: Date;
}
