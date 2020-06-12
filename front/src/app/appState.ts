interface AppState {
  hostName: any,
  header: any,
  portfolioImg: any,
  reviewMsg: any,
  //starRating: any,
  state_form: any,
  error: any,
  previews: any
}
const appState: AppState = {
  hostName: (location.hostname == 'localhost') ? 'http://localhost/' : '/',
  //header
  header: {
    //isLogged: false,
    user: {
      userName: '',
      _id: 'unlogged',
      role: 'user',
      isLogged: false
    },
  },
  portfolioImg: [],
  reviewMsg: [],
  //: [4.5],
  // for auth component
  state_form: 'login',
  error: {
    dublicate_user: false
  },
  //currentNewProductImg: 'assets/img/sws1.png',
  previews: [
    {
      reader: {
        result: "assets/400x300.png"
      }
    }
  ],


}





export default appState;