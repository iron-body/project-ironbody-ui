import TitlePage from '../../components/TitlePage/TitlePage';
import UserCard from '../../components/UserCard/UserCard';
import UserForm from '../../components/UserForm/UserForm';
import { Container, ProfileWrapper } from './ProfilePage.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getIsProfileLoading, selectProfileFilled } from '../../redux/profile/profileSlice';
import Loader from '../../components/Loader/Loader';
import { useEffect } from 'react';
import { profileOperations } from '../../redux/profile/profileOperations';

const ProfilePage = () => {
  const isLoading = useSelector(getIsProfileLoading);
  const profileFilled = useSelector(selectProfileFilled);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!profileFilled) {
      dispatch(profileOperations.profileData());
    }
  }, [dispatch, profileFilled]);

  if (isLoading) {
    return <Loader />;
  }

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
