import { useEffect, useState } from 'react';
import TagsList from './components/TagsList';
import { Alert, CircularProgress } from '@mui/material';
import { useContextData, TagData } from './context/DataContext';

interface Error {
  boolean: boolean,
  message: string,
}

function App() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error>({ boolean: false, message: '' });
  const context = useContextData();
  const { tagsData, setTagsData, sortBy, setSortBy, sortOrder, setSortOrder } = context;

  useEffect(() => {
    setLoading(true);
    const fetchTagsData = async () => {
      try {
        const response = await fetch("https://api.stackexchange.com/2.3/tags?pagesize=100&fromdate=1134345600&todate=1711497600&order=desc&min=0&max=9999999&sort=popular&site=stackoverflow");

        if (!response.ok) {
          throw new Error('Problem')
        }

        const jsonData = await response.json();
        const items: TagData[] = await jsonData.items;
        setTagsData(items);
        setLoading(false);
      } catch (error) {
        setError({ boolean: true, message: 'Error fetching data' });
        console.error('Error fetching data', error);
        setLoading(false);
      }
    }
    fetchTagsData();
  }, []);
  return (
    <div style={{ width: '100%' }}>
      {loading ? <CircularProgress
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(50%, 50%)'
        }} />
        :
        <TagsList
          tagsData={tagsData}
          sortBy={sortBy}
          setSortBy={setSortBy}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
        />}
      {error.boolean && <Alert
        sx={{
          position: 'absolute',
          marginLeft: '20px',
          marginTop: '20px',
        }}
        severity="error">{error.message}</Alert>}
    </div >
  )
}

export default App;
