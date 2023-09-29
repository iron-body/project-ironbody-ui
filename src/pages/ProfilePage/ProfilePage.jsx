import TitlePage from 'components/TitlePage/TitlePage';
import UserCard from '../../components/UserCard/UserCard';
import UserForm from '../../components/UserForm/UserForm';
import { Container, ProfileWrapper } from './ProfilePage.styled';
import { useSelector } from 'react-redux';
import { getIsProfileLoading } from '../../redux/profile/profileSlice';
import Loader from '../../components/Loader/Loader';

const ProfilePage = () => {
  const isLoading = useSelector(getIsProfileLoading);

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
