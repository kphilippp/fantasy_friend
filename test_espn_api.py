from espn_api.football import League
from dotenv import load_dotenv
import os
load_dotenv()

# make sure you pip intsall the packages above

# ====== FILL THESE IN WITH YOUR INFO ======
LEAGUE_ID =  int(os.getenv('LEAGUE_ID'))      
SEASON_ID = int(os.getenv('SEASON_ID'))                

SWID = os.getenv('SWID')   
ESPN_S2 = os.getenv('ESPN_S2')
# ==========================================

def main():
    # Create a League object using your cookies for private leagues
    league = League(
        league_id=LEAGUE_ID,
        year=SEASON_ID,
        swid=SWID,
        espn_s2=ESPN_S2,
    )

    print(league)

    # Print a simple sanity check: league name and all team names
    print(f"League Name: {league.settings.name}")
    print(f"Season: {league.year}")
    print("Teams in this league:")

    for team in league.teams:
        print(f"- {team.team_name} (owner: {team.owners})")

    # Example: print your roster for team 1 (change teamId as needed)
    my_team = league.teams[0]  # first team in the list
    print("\nExample Roster for Team 1:")
    for player in my_team.roster:
        print(f"{player.name} - {player.position} - {player.proTeam}")

if __name__ == "__main__":
    main()
