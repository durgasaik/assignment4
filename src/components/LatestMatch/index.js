// Write your code here
import './index.css'

const LatestMatch = props => {
  const {LatestMatchDetails} = props
  const {
    competingTeam,
    date,
    venue,
    result,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    umpires,
  } = LatestMatchDetails
  return (
    <div className="latest-match-container">
      <h1 className="heading">latest Matches</h1>
      <div className="match-card">
        <div className="logo-container">
          <div>
            <p className="team-name">{competingTeam}</p>
            <p className="date">{date}</p>
            <p className="match-details">{venue}</p>
            <p className="match-details">{result}</p>
          </div>
          <img
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
            className="team-logo"
          />
        </div>
        <hr className="separator" />
        <div className="second-details">
          <p className="label">First Innings</p>
          <p className="label-value">{firstInnings}</p>
          <p className="label">Second Innings</p>
          <p className="label-value">{secondInnings}</p>
          <p className="label">Man of the Match</p>
          <p className="label-value">{manOfTheMatch}</p>
          <p className="label">Umpires</p>
          <p className="label-value">{umpires}</p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
