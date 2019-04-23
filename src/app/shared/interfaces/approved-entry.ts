/* Abstraction of approved behavioral enrichment items. */
export interface ApprovedEntry {
    enrichmentItem: string;
    behaviorsEncouraged: string;
    dateApproved: string;
    safetyConcerns: string;
    exceptions: string;
    comments: string;
    species: string;
    category: string;
  }
