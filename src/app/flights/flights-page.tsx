import FlightsSearch from './components/flights-search';
import PathsList from './components/Paths-list';
import { Stack } from '@mui/material';

export default function FlightsPage() {

  return (
    <Stack className='page-stack'>
      <FlightsSearch />
      <PathsList />
    </Stack>
  );
}