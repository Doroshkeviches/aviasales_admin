import { useAppSelector } from 'src/storeTypes';
import FlightsSearch from './components/flights-search';
import PathsList from './components/Paths-list';
import { sessionSelector } from '../auth/store/auth.selector';

export default function FlightsPage() {
  return (
    <>
      <FlightsSearch />
      <PathsList />
    </>
  );
}