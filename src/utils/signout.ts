import repository from "src/repository"

export const signout = async (dispatch: any) => {
  const response = await repository.post('/auth/signout')
  if (response.data) {
    //set session to null dispatch(setSession(null))
    localStorage.removeItem('refresh-token')
    sessionStorage.removeItem('access-token')
  }
}