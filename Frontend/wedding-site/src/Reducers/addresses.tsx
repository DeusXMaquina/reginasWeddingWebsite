import logo from '../pictures/Captura_edited.jpg'

const counterReducer:any = (state:{event:string, coordinates:{ lat:number, lng:number}, image:any}, action:{type:string}) => {
  switch(action.type) {
    case 'CEREMONIA':
      return {
        event: 'Ceremonia',
        coordinates: {
          lat: 1,
          lng: 1
        },
        image: logo
      }
    case 'BANQUETE':
      return {
          event: 'Banquete',
          coordinates: {
            lat: 1,
            lng: 1
          },
          image: 'imagen'
      }
    case 'AFTER':
      return {
          event: 'After',
          coordinates: {
            lat: 1,
            lng: 1
          },
          image: 'imagen'
      }
    default:
      return {
          event: 'Ceremonia',
          coordinates: {
            lat: 1,
            lng: 1
          },
          image: logo
      }
  }
}
  
  export default counterReducer