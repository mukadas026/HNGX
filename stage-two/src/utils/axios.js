import axios from "axios"

// export function getMovies(url){
const baseURL = "https://api.themoviedb.org/3/movie/"

export const client = axios.create({
	baseURL: baseURL,
	params: {
		// Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MWMyODU3ZTExOWJiNjYyOTVjYTE5NmQ4NTk3NzBjOSIsInN1YiI6IjY0YjI5YzBiMGJiMDc2MDE0ZTRlOGNiMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JmhaMRKfF49PwY1m0QWsgfqahh8UMA34VsY7bG_70fw'
	},
	headers: {
		Authorization:
			"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MWMyODU3ZTExOWJiNjYyOTVjYTE5NmQ4NTk3NzBjOSIsInN1YiI6IjY0YjI5YzBiMGJiMDc2MDE0ZTRlOGNiMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JmhaMRKfF49PwY1m0QWsgfqahh8UMA34VsY7bG_70fw",
	},
})

// let data = null

// client.get(url)
// .then((res) => {
//     data = res.data
// })
// .catch(err => {
//     console.log(err)
// })

// return data
// }
