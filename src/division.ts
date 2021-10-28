/**
 * Division This class divides numbers from arrayfrom by divider and puts them into arrayto
 */
class division {
    public static divisionNo(arrayfrom: number[], arrayto: number[], divider: number) {
        arrayfrom.forEach(el => {
            if(el % divider == 0) {
                arrayto.push(el)
            }
        })
        return arrayto;
    }

    
}
export default division;

