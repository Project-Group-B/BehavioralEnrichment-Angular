/* Abstraction of incident reports. */
import{IncidentReportForm} from './incident-report-form'

export interface incidentStatus {
    incidentID: IncidentReportForm;
    incidentDate: IncidentReportForm;
    enrichmentItem: IncidentReportForm;
    department: IncidentReportForm;
    futureUseDecision: IncidentReportForm;

}