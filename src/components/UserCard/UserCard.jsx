import { useSelector } from 'react-redux';
// import { getUserName } from '../../redux/selectors';
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
// window.onload = () => {
//   const uploadAvatar = document.getElementById('upload-avatar');
//   const uploadBtn = document.getElementById('upload-btn');
//   uploadBtn.addEventListener('click', function () {
//     uploadAvatar.click();
//   });
// };
// const baseURL = 'https://connections-api.herokuapp.com/';

const UserCard = () => {
  // const filePicker = useRef(null);
  // const [selectedFile, setSelectedFile] = useState(null);
  // const [uploaded, setUploaded] = useState();

  // const handleChange = event => {
  //   console.log(event.target.files);
  //   setSelectedFile(event.target.files[0]);
  // };

  // const handleUpload = async () => {
  //   filePicker.current.click();
  //   if (!selectedFile) {
  //     alert('pleas select a file');
  //     return;
  //   }
  //   const formData = new FormData();
  //   formData.append('avatar', selectedFile);

  //   const res = await fetch(baseURL, {
  //     method: 'POST',
  //   });
  //   const data = await res.json();
  //   setUploaded(data);
  // };

  //   const handlePick = () => {
  //     filePicker.current.click();
  //     handleUpload()
  // }
  // const userName = useSelector(getUserName);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(profileOperations.profileData());
  // }, [dispatch]);

  const profileData = useSelector(selectProfileData);
  // console.log('profileData UserCard :>> ', profileData);

  const { owner, calorieNorm, sportTimeNorm } = profileData;
  // console.log('profileData :>> ', profileData);
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
              // ref={filePicker}
              id="upload-avatar"
              accept="image/*,.png,.jpg,.web"
            />
            <AvatarBtn>
              <AvatarBtnSvg>
                <use href={`${sprite}#check mark`} />
              </AvatarBtnSvg>
            </AvatarBtn>
          </AvatarCircle>
        </AvatarWrapper>
        <NameWrapper>
          <Name>{owner.name}</Name>
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
              <DailyNumber>{calorieNorm?.toFixed()}</DailyNumber>
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
              <DailyNumber>{sportTimeNorm} min</DailyNumber>
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

        <LogoutWrapper>
          <Btn>
            <LinkBtn to="/logout">Logout</LinkBtn>
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
