// import { useAppSelector } from 'src/storeTypes';
import FlightsSearch from './components/flights-search';
import PathsList from './components/Paths-list';
// import { sessionSelector } from '../auth/store/auth.selector';
import { Stack } from '@mui/material';

export default function FlightsPage() {

  return (
    <Stack direction={'column'} className='page-stack'>
      <FlightsSearch />
      <PathsList />
    </Stack>
  );
}