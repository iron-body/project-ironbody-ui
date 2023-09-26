import TitlePage from 'components/TitlePage/TitlePage';
import UserCard from 'components/UserCard/UserCard';
import UserForm from 'components/UserForm/UserForm';
import { Container, ProfileWrapper } from './ProfilePage.styled';


const ProfilePage = () => {
  return (
    <Container>
      <main>
        <TitlePage titleText={'Profile Settings'} />
        <ProfileWrapper>
          <UserCard />
          <UserForm />
        </ProfileWrapper>
      </main>
    </Container>
  );
};

export default ProfilePage;

