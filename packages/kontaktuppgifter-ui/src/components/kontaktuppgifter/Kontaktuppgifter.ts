export type KontaktuppgifterType = {
    id: string,
    namn: string,
    epost: string,
    epost_validering?: string,
    telefonnummer: string
}

export function useKontaktuppgifterType(
    kontaktuppgifter:KontaktuppgifterType = {} as KontaktuppgifterType) {

        if(!kontaktuppgifter.hasOwnProperty("id")) kontaktuppgifter.id = crypto.randomUUID();
        if(!kontaktuppgifter.hasOwnProperty("namn")) kontaktuppgifter.namn = "";
        if(!kontaktuppgifter.hasOwnProperty("epost")) kontaktuppgifter.epost = "";

        if (!kontaktuppgifter.hasOwnProperty("telefonnummer")) kontaktuppgifter.telefonnummer = "";

        return kontaktuppgifter;
}
