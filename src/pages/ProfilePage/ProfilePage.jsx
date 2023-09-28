import TitlePage from 'components/TitlePage/TitlePage';
import UserCard from '../../components/UserCard/UserCard';
import UserForm from '../../components/UserForm/UserForm';
import { Container, ProfileWrapper } from './ProfilePage.styled';
import { useEffect } from 'react';
import { profileOperations } from '../../redux/profile/profileOperations';
import { useSelector, useDispatch } from 'react-redux';
import { getIsProfileLoading, selectProfileData } from '../../redux/profile/profileSlice';
import Loader from '../../components/Loader/Loader';

const ProfilePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(profileOperations.profileData());
  }, [dispatch]);
  const isLoading = useSelector(getIsProfileLoading);
  console.log('isLoading  profileData :>> ', isLoading);
  return (
    <Container>
      <main>
        <TitlePage titleText={'Profile Settings'} />
        <ProfileWrapper>
          {isLoading ? <Loader /> : <UserCard />}
          {isLoading ? <Loader /> : <UserForm />}
        </ProfileWrapper>
      </main>
    </Container>
  );
};

export default ProfilePage;
