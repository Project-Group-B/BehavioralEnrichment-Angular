/* Abstraction of incident reports. */
import{IncidentReportForm} from './incident-report-form'

export interface SubmittedIncident {
    incidentID: IncidentReportForm;
    incidentDate: IncidentReportForm;
    enrichmentItem: IncidentReportForm;
    department: IncidentReportForm;
    futureUseDecision: IncidentReportForm;

}