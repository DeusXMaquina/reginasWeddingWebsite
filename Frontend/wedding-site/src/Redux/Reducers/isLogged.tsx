const loggedReducer:any = (state:boolean = false, action:{type:string}) => {
  switch (action.type) {
    case 'SIGN_IN':
      return !state
    default:
      return state
  }
}

export default loggedReducer