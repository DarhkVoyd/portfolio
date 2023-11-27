import axios from 'axios'
import dotenv from 'dotenv'
import { type Request, type Response, type NextFunction } from 'express'

dotenv.config()

export const spotifyController = (req: Request, res: Response, next: NextFunction): void => {
  void (async (): Promise<any> => {
    try {
      const bearerToken = await generateBearerToken()
      const spotifyData = await getSpotifyData(bearerToken)
      res.send(spotifyData)
    } catch (error) {
      console.error('Error in spotifyController:', error)
      res.status(500).send('Internal Server Error')
    }
  })()
}

const getSpotifyData = async (bearerToken: string): Promise<any> => {
  try {
    const response = await axios.get('https://api.spotify.com/v1/users/6nhcufxwya439gceiqqcnwr0j/playlists?limit=50&offset=0', {
      headers: {
        Authorization: `Bearer ${bearerToken}`
      }
    })
    return response.data
  } catch (error) {
    console.error('Error getting spotify data:', error)
    throw error
  }
}

const generateBearerToken = async (): Promise<string> => {
  const clientID = process.env.SPOTIFY_CLIENT_ID
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET

  const data = new URLSearchParams()
  data.append('grant_type', 'client_credentials')

  try {
    const response = await axios.post('https://accounts.spotify.com/api/token', data, {
      headers: {
        Authorization: 'Basic ' + Buffer.from(clientID + ':' + clientSecret).toString('base64'),
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })

    const bearerToken = response.data.access_token
    return bearerToken
  } catch (error) {
    console.error('Error generating bearer token:', error)
    throw error
  }
}
