export type ForetagetsAdressType = {
    id: string,
    co?: string,
    adress?: string,
    postnummer: string,
    postort: string,
    epost?: string
}

export function useForetagetsAdressType(
    foretagetsAdress:ForetagetsAdressType = {} as ForetagetsAdressType):ForetagetsAdressType {

        if(!foretagetsAdress.hasOwnProperty("id")) foretagetsAdress.id = crypto.randomUUID();
        if(!foretagetsAdress.hasOwnProperty("postnummer")) foretagetsAdress.postnummer = "";
        if(!foretagetsAdress.hasOwnProperty("postort")) foretagetsAdress.postort = "";

        return foretagetsAdress;
}
