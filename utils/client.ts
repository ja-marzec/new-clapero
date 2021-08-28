export const  dataFetching = async (url: string, dataProcessing: (item: any) => any) => {
    let data ;
    try{
        const prod = await fetch(`${process.env.NEXT_SERVER}/${url}`);
        const json = await prod.json();
        const formatedData = json.data.map((item: any) => dataProcessing(item));
        data = formatedData
    } catch (error) {
        console.log(error);
    }

    return {
       data
    }
}