import { useDispatch, useSelector, connect } from 'react-redux';

import {
  geofencesActions, groupsActions, driversActions, maintenancesActions, calendarsActions,
} from './store';
import { useEffectAsync } from './reactHelper';

const CachingController = () => {
  const authenticated = useSelector((state) => !!state.session.user);
  console.log("authenticated", authenticated);
  const dispatch = useDispatch();

  // useEffectAsync(async () => {
   
  //     const response = await fetch('/api/geofences');
  //     if (response.ok) {
  //       dispatch(geofencesActions.refresh(await response.json()));
  //     } else {
  //       throw Error(await response.text());
  //     }
    
  // }, []);

  // useEffectAsync(async () => {
    
  //     const response = await fetch('/api/groups');
  //     if (response.ok) {
  //       dispatch(groupsActions.refresh(await response.json()));
  //     } else {
  //       throw Error(await response.text());
  //     }
    
  // }, []);

  // useEffectAsync(async () => {
   
  //     const response = await fetch('/api/drivers');
  //     if (response.ok) {
  //       dispatch(driversActions.refresh(await response.json()));
  //     } else {
  //       throw Error(await response.text());
  //     }
    
  // }, []);

  // useEffectAsync(async () => {
    
  //     const response = await fetch('/api/maintenance');
  //     if (response.ok) {
  //       dispatch(maintenancesActions.refresh(await response.json()));
  //     } else {
  //       throw Error(await response.text());
  //     }
    
  // }, []);

  // useEffectAsync(async () => {
   
  //     const response = await fetch('/api/calendars');
  //     if (response.ok) {
  //       dispatch(calendarsActions.refresh(await response.json()));
  //     } else {
  //       throw Error(await response.text());
  //     }
    
  // }, []);

  return null;
};

export default connect()(CachingController);
