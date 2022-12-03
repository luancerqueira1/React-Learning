import * as types from './types';
import * as pinServices from '../services/PinService';
   
export const openModalSavePinAction = () => ({
   type: types.openModalSavePinType
});

export const closeModalsAction = () => ({
   type: types.closeModalsType
});

export const fetchFoldersInitAction = () => ({
   type: types.fetchFoldersInitType
});

export const fetchFoldersSuccessAction = (folders) => ({
   type: types.fetchFoldersSuccessType,
   payload: folders
});

export const fetchFoldersAction = async (dispatch) => {
   dispatch(fetchFoldersAction());
   const folders = await pinServices.getFolders();
   dispatch(fetchFoldersSuccessAction(folders))
};