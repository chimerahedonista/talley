export interface Proposal {
    id: string;
    status: "SUBMITTED" | "REVIEW" | "ACTIVE" | "COMPLETED";
    title: string;
    description: string;
    details: string;
    timeRemaining: number;
    proposedBy: string;
    votes: Vote
}

export interface Vote {
    for: number;
    against: number;
    abstain: number;
}