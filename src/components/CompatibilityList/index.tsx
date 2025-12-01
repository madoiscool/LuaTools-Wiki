import React, {useState, useEffect} from 'react';
import styles from './styles.module.css';

interface GameCompatibility {
  gameName: string;
  appId: number;
  bypassRequired: boolean;
  online: boolean;
  notes: string;
}

export default function CompatibilityList(): React.ReactElement {
  const [games, setGames] = useState<GameCompatibility[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    async function fetchGames() {
      try {
        setLoading(true);
        
        // Fetch single aggregated JSON file from the deployed site
        // This ensures we get the version that matches the deployed site
        // Add cache-busting query parameter to prevent caching
        const cacheBuster = `?t=${Date.now()}`;
        const response = await fetch(
          `/community-compatibility-list/all-games.json${cacheBuster}`,
          {
            cache: 'no-store',
            headers: {
              'Cache-Control': 'no-cache, no-store, must-revalidate',
              'Pragma': 'no-cache',
              'Expires': '0',
            },
          },
        );

        if (!response.ok) {
          throw new Error('Failed to fetch games');
        }

        const gameData: GameCompatibility[] = await response.json();

        setGames(gameData.sort((a, b) => a.gameName.localeCompare(b.gameName)));
        setError(null);
      } catch (err) {
        setError('Failed to load compatibility list. Please try again later.');
        console.error('Error fetching games:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchGames();
  }, []);

  const filteredGames = games.filter(
    (game) =>
      game.gameName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      game.appId.toString().includes(searchTerm) ||
      game.notes.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  if (loading) {
    return (
      <div className={styles.container}>
        <div className={styles.loading}>Loading compatibility list...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.container}>
        <div className={styles.error}>{error}</div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search games by name, App ID, or notes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.searchInput}
        />
      </div>

      {filteredGames.length === 0 ? (
        <div className={styles.noResults}>
          {searchTerm
            ? 'No games found matching your search.'
            : 'No games found in the compatibility list.'}
        </div>
      ) : (
        <>
          <div className={styles.stats}>
            Showing {filteredGames.length} of {games.length} games
          </div>
          <div className={styles.tableContainer}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Game Name</th>
                  <th>App ID</th>
                  <th>Bypass Required</th>
                  <th>Online</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                {filteredGames.map((game, index) => (
                  <tr key={index}>
                    <td className={styles.gameName}>{game.gameName}</td>
                    <td>
                      <a
                        href={`https://store.steampowered.com/app/${game.appId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.appIdLink}
                      >
                        {game.appId}
                      </a>
                    </td>
                    <td>
                      <span
                        className={
                          game.bypassRequired
                            ? styles.badgeWarning
                            : styles.badgeSuccess
                        }
                      >
                        {game.bypassRequired ? 'Yes' : 'No'}
                      </span>
                    </td>
                    <td>
                      <span
                        className={
                          game.online ? styles.badgeSuccess : styles.badgeInfo
                        }
                      >
                        {game.online ? 'Yes' : 'No'}
                      </span>
                    </td>
                    <td className={styles.notes}>{game.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}

