
const counterReducer:any = (state:{event:string, info:string, coordinates:{ lat:number, lng:number}}, action:{type:string}) => {
  switch(action.type) {
    case 'CEREMONIA':
      return {
        event: 'Ceremonia',
        info: ('P. Luis Rodrigo Nuñez L.C. <br/> P. Diego Arregui L.C.'),
        coordinates: {
          lat: 20.30262,
          lng: -103.25023
        },
      }
    case 'BANQUETE':
      return {
          event: 'Banquete',
          info: 'P. Luis Rodrigo Nuñez L.C. P. Diego Arregui L.C.',
          coordinates: {
            lat: 20.297062777811753,
            lng: -103.23119377872393
          },
      }
    case 'AFTER':
      return {
          event: 'After',
          info: 'P. Luis Rodrigo Nuñez L.C. <br/> P. Diego Arregui L.C.',
          coordinates: {
            lat: 1,
            lng: 1
          },
      }
    case 'HOSPEDAJE':
      return {
        event: 'Hospedaje',
        info: 'P. Luis Rodrigo Nuñez L.C. <br/> P. Diego Arregui L.C.',
        coordinates: {
          lat: 20.297860422386233,
          lng: -103.29606274339423
        },
      }
    default:
      return {
          event: 'Ceremonia',
          info: 'P. Luis Rodrigo Nuñez L.C. <br/> P. Diego Arregui L.C.',
          coordinates: {
            lat: 20.30262,
            lng: -103.25023
          },
      }
  }
}
  
  export default counterReducer