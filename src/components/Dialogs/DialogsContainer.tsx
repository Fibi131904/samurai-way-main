import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { DialogsPageType, sendMessageAC, updateNewMessageBodyAC } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { AppStateType } from '../../redux/redux-store';


type mapStateToPropsType = {
  dialogsPage: DialogsPageType
}
type mapDispachToPropsType = {
  updateNewMessageBody: (updateText: string) => void
  sendMessage: () => void
}
export type DialogsPropsType = mapStateToPropsType & mapDispachToPropsType


let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
  return {
    dialogsPage: state.dialogsPage
  }
}

let mapDispachToProps = (dispatch: Dispatch): mapDispachToPropsType => {
  return {
    updateNewMessageBody: (updateText: string) => {
      dispatch(updateNewMessageBodyAC(updateText))
    },
    sendMessage: () => {
      dispatch(sendMessageAC())
    }
  }
}

export const DialogsContainer = connect(mapStateToProps, mapDispachToProps)(Dialogs)

