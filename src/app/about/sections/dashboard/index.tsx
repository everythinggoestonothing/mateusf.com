import { AgeCard } from './cards/age'
import { GithubFollowers } from './cards/github-followers'
import { GithubStars } from './cards/github-stars'
import { LastTrack } from './cards/last-track'
import { SpotifyPlays } from './cards/spotify-plays'
import { TopArtist } from './cards/top-artist'

export function Dashboard() {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
      <AgeCard />
      <GithubStars />
      <GithubFollowers />
      <SpotifyPlays />
      <TopArtist />
      <LastTrack />
    </div>
  )
}