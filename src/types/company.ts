/** @format */

interface IContract {
    no: string;
    issue_date: string;
}

interface IPhoto {
    name: string;
    filepath: string;
    thumbpath: string;
    createdAt: string;
}

export interface ICompany {
    id: string;
    contactId: string;
    name: string;
    shortName: string;
    businessEntity: string;
    contract: IContract;
    type: string[];
    status: string;
    photos: IPhoto[];
    createdAt: string;
    updatedAt: string;
}
