const loggedReducer:any = (state:boolean = true, action:{type:string}) => {
  switch (action.type) {
    case 'SIGN_IN':
      return !state
    default:
      return state
  }
}

export default loggedReducer