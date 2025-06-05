export type PersonOrganisationType = {
    id: string,
    personidentitet: string,
    fornamn: string,
    efternamn: string,
    bosattningsland: string
}

export function usePersonOrganisation(
    personOrganisation:PersonOrganisationType = {} as PersonOrganisationType):PersonOrganisationType {
        if(!personOrganisation.hasOwnProperty("id")) personOrganisation.id = crypto.randomUUID();
        personOrganisation.personidentitet = "";
        personOrganisation.fornamn = "";
        personOrganisation.efternamn = "";
        personOrganisation.bosattningsland = "";

        return personOrganisation;
}
