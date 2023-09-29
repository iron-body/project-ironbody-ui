import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
// import { useRef, useState } from 'react';
import sprite from '../../../icons.svg';
// import { profileOperations } from '../../redux/profile/profileOperations';
import { Btn, LinkBtn } from '../LogOutBtn/LogOutBtn.styled';
import {
  AvatarWrapper,
  AvatarBtnSvg,
  AvatarBtn,
  FileInput,
  AvatarSvg,
  AvatarCircle,
  NameWrapper,
  Name,
  User,
  DailyList,
  DailyItem,
  DailyBox,
  DailyWrapper,
  DailySvg,
  DailyText,
  DailyNumber,
  WarningContainer,
  WarningWrapper,
  WarningSvg,
  WarningText,
  LogoutWrapper,
  UserCardWrapper,
  LogoutBtnSvg,
  Wrapper,
} from './UserCard.styled';

import { selectProfileData } from '../../redux/profile/profileSlice';
import { useNavigate } from 'react-router-dom';
import { authOperations } from '../../redux/auth/authOperations';
import { selectUsername } from '../../redux/auth/authSlice';
import { useState } from 'react';

const UserCard = () => {
  const profileData = useSelector(selectProfileData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUserName = useSelector(selectUsername);

  const [file, setFile] = useState(null);

  const handleFileChange = e => {
    e.preventDefault();
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUploadClick = e => {
    e.preventDefault();
    console.log('click');
    if (!file) {
      return;
    }
  };

  return (
    <Wrapper>
      <UserCardWrapper>
        <AvatarWrapper>
          <AvatarCircle>
            <AvatarSvg>
              <use href={`${sprite}#gridicons_user`} />
            </AvatarSvg>
            <FileInput
              type="file"
              // onChange={handleChange}
              id="upload-avatar"
              accept="image/*,.png,.jpg,.web"
              onChange={handleFileChange}
            />
            <AvatarBtn onClick={handleUploadClick}>
              <AvatarBtnSvg>
                <use href={`${sprite}#check mark`} />
              </AvatarBtnSvg>
            </AvatarBtn>
          </AvatarCircle>
        </AvatarWrapper>
        <NameWrapper>
          <Name>{currentUserName}</Name>
          <User>User</User>
        </NameWrapper>

        <DailyList>
          <DailyItem>
            <DailyBox>
              <DailyWrapper>
                <DailySvg>
                  <use href={`${sprite}#icon-fluent_food-24-filled`} />
                </DailySvg>
                <DailyText>Daily calorie intake</DailyText>
              </DailyWrapper>
              <DailyNumber>{profileData?.calorieNorm?.toFixed()}</DailyNumber>
            </DailyBox>
          </DailyItem>
          <DailyItem>
            <DailyBox>
              <DailyWrapper>
                <DailySvg>
                  <use href={`${sprite}#icon-dumbbell`} />
                </DailySvg>
                <DailyText>Daily norm of sports</DailyText>
              </DailyWrapper>
              <DailyNumber>{profileData?.sportTimeNorm} min</DailyNumber>
            </DailyBox>
          </DailyItem>
        </DailyList>
        <WarningContainer>
          <WarningWrapper>
            <WarningSvg>
              <use href={`${sprite}#tabler:exclamation-mark`} />
            </WarningSvg>
            <WarningText>
              We understand that each individual is unique, so the entire approach to diet is
              relative and tailored to your unique body and goals.
            </WarningText>
          </WarningWrapper>
        </WarningContainer>

        <LogoutWrapper
          onClick={() => {
            navigate('/');
            dispatch(authOperations.logout());
          }}
        >
          <Btn>
            <LinkBtn>Logout</LinkBtn>
            <LogoutBtnSvg>
              <use href={`${sprite}#log-out-01`} />
            </LogoutBtnSvg>
          </Btn>
        </LogoutWrapper>
      </UserCardWrapper>
    </Wrapper>
  );
};

export default UserCard;
