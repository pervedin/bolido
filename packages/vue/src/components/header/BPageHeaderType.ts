export type BPageHeaderType = {
    id: string,
    headertitle: string,
    logoarialabel?: string,
    righttext: string
}

export function useBPageHeaderType(
    bpageheadertype:BPageHeaderType = {} as BPageHeaderType) {

    if (!bpageheadertype.hasOwnProperty("id")) bpageheadertype.id = crypto.randomUUID();
    if (!bpageheadertype.hasOwnProperty("headertitle")) bpageheadertype.headertitle = "";

    if (!bpageheadertype.hasOwnProperty("righttext")) bpageheadertype.righttext = "";

    return bpageheadertype;
}
