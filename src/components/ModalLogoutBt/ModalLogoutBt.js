import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authOperations } from '../../redux/auth';
import { walletActions } from '../../redux/wallet';

import s from './ModalLogoutBt.module.css';

const ModalLogoutBt = ({
  firtsButtonText,
  secondButtonText,
  firstLinkButton,
  secondLinkButton,
  canselAction,
}) => {
  const dispatch = useDispatch();

  function closeModal() {
    dispatch(walletActions.logoutModalAction());
  }

  return (
    <>
      {!firstLinkButton && !secondLinkButton && (
        <div className={s.buttonsContainer}>
          <button type="submit" className={[s.buttons, s.buttonAdd].join(' ')}>
            {firtsButtonText}
          </button>
          <button
            type="button"
            className={[s.buttons, s.buttonCancel].join(' ')}
            onClick={canselAction}
          >
            {secondButtonText}
          </button>
        </div>
      )}
      {firstLinkButton && (
        <div className={s.buttonsContainer}>
          <NavLink to={firstLinkButton}>
            <button
              type="button"
              className={[s.buttons, s.buttonAdd].join(' ')}
              onClick={() => {
                dispatch(authOperations.logout());
                closeModal();
              }}
            >
              {firtsButtonText}
            </button>
          </NavLink>
          <button
            type="button"
            className={[s.buttons, s.buttonCancel].join(' ')}
            onClick={canselAction}
          >
            {secondButtonText}
          </button>
        </div>
      )}
      {secondLinkButton && (
        <div className={s.buttonsContainer}>
          <button type="submit" className={[s.buttons, s.buttonAdd].join(' ')}>
            {firtsButtonText}
          </button>
          <NavLink to={secondLinkButton}>
            <button
              type="button"
              className={[s.buttons, s.buttonCancel].join(' ')}
            >
              {secondButtonText}
            </button>
          </NavLink>
        </div>
      )}
    </>
  );
};

export default ModalLogoutBt;
