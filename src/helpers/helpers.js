export const helpers = (presupuestoGeneral, presupuestoRestante, claseAntes) => {

    let clase = claseAntes;

    if( presupuestoRestante > ( presupuestoGeneral / 2 ) ){
        clase += `bg-presupuestoRestante-bueno`
    } else if ( presupuestoRestante > ( presupuestoGeneral * 0.25 ) ){
        clase += 'bg-presupuestoRestante-media'
    } else {
        clase += 'bg-presupuestoRestante-baja'
    }

    return clase;
}